import React, {useRef, useEffect} from 'react';
import imageURL from './images/img.png';

import Kaleidoscope from "./Kaleidoscope";

const KaleidoscopeInteractive = ({count, size}) => {
    const canvasRef = useRef(null);
    const img = new Image();

    let kaleidoscope;
    let oldX = 0.5, oldY = 0.5;

    let animationTimer;

    const accuracy = 0.01; //точность докручивания
    let timerI = 0; //итерация
    const iterationCount = 30; // Количество итераций анимации I(iter) =~ iter! // Плавность прокрутки
    const time = 3 // время для 1 итерации; // Количество итераций анимации

    let currentX = oldX, currentY = oldY, olderOffsetX, olderOffsetY

    useEffect(() => {
        img.src = imageURL;
        img.onload = () => {
            kaleidoscope = new Kaleidoscope(canvasRef.current.getContext("2d"), img, size, count);
            canvasRef.current.addEventListener('mousemove', Translation);
        };
    })

    function Translation(e) {
        clearInterval(animationTimer);
        currentX = e.offsetX/canvasRef.current.clientWidth
        currentY = e.offsetY/canvasRef.current.clientHeight;
        // Фиксируем старую точку созданием копии
        olderOffsetX = oldX
        olderOffsetY = oldY
        // Создаем копию старой точки
        oldX = currentX;
        oldY = currentY;
        // Обнуляем итератор
        timerI = 0;
        animationTimer = setInterval(() => {
            if (timerI >= iterationCount - accuracy) { // finish
                kaleidoscope.DrawPolygon(currentX, currentY);
                oldX = currentX;
                oldY = currentY;
                clearInterval(animationTimer);
            } else {
                timerI += (iterationCount - timerI) / iterationCount;
                oldX = olderOffsetX + (currentX - olderOffsetX) * (timerI / iterationCount);
                oldY = olderOffsetY + (currentY - olderOffsetY)  * (timerI / iterationCount);
                kaleidoscope.DrawPolygon(oldX,  oldY);
            }
        }, time);
        kaleidoscope.DrawPolygon(olderOffsetX, olderOffsetY);
    }

    return (
        <canvas className={'Kaleidoscope'} ref={canvasRef}/>
    );
}

export default KaleidoscopeInteractive;