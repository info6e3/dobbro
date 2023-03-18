import React, { useRef, useEffect, useState } from 'react';
import imageURL from './images/1.jpg';

import ObjectKaleidoscope from "./components/ObjectKaleidoscope";

const Kaleidoscope = ({cnt}) => {
    const canvasRef = useRef(null);
    const [imageSize, setImageSize] = useState(0);
    let canvasSize = 850;
    const count = cnt;
    const img = new Image();//Получаем картинк

    let kaleidoscope;
    let oldX = 0,
        oldY = 0;
    let canvas;

    let animationTimer;

    useEffect(() => {
        Init();
    })

    function Init() {
        canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = canvasSize;
        canvas.height = canvasSize;

        img.src = imageURL;

        img.onload = () => {
                if(img.width < img.height)
                    setImageSize(img.width);
                else
                    setImageSize(img.height);
                kaleidoscope = new ObjectKaleidoscope(context, img, count);
                canvas.addEventListener('mousemove', (e) => Translation(e));
        };
    }



    const accuracy = 0.05; //точность докручивания
    let timerI = 0; //итерация

    function Translation(e) {
        //
        const canvasSide = canvas.width/2 * Math.sin(360/count/2*Math.PI/180)/Math.sin((90-360/count/2)*Math.PI/180);
        const imageSide = canvasSide/canvas.width * imageSize;
        const imageFacet = imageSide*2; //грань многоугольника в пикселях по картинке

        const canvasX = e.pageX - e.target.offsetLeft, //координаты по размеру канваса
            canvasY = e.pageY - e.target.offsetTop;

        const imageX = canvasX/canvas.width * imageSize, //координаты по размеру картинки
            imageY = canvasY/canvas.height * imageSize;


        const offsetImageX = 0; //Начальное смещение картинки X (Ширина картинки - грань/2)
        const offsetImageY = -canvasSize; //Начальное смещение картинки y (Высота картинки/2)
        //
        const offsetX = imageX/imageSize * (imageSize - imageFacet), //координаты по размеру области перемещения X - грань многоугольника ширины картинки
            offsetY = imageY/imageSize * imageSize/2; //Y - Высота картинки/2

        //anim
        const deltaX = offsetX-oldX;
        const deltaY = offsetY-oldY;

        const newOffsetX = oldX //+ (deltaX * 0.3);
        const newOffsetY = oldY //+ (deltaY * 0.3);

        oldX = newOffsetX;
        oldY = newOffsetY;


        clearInterval(animationTimer);
        timerI = 0;
            animationTimer = setInterval(() => {
                const count = 40;//скорость прокрутки <0
                if(timerI >= count - accuracy) { // finish
                    kaleidoscope.DrawPolygon(offsetImageX - offsetX, offsetImageY + offsetY);
                    oldX = offsetX;
                    oldY = offsetY;
                    clearInterval(animationTimer);
                } else {
                    timerI += (count - timerI)/count;
                    const stepOffsetX = newOffsetX + (deltaX * 1.0) * (timerI/count);
                    const stepOffsetY = newOffsetY + (deltaY * 1.0) * (timerI/count);
                    kaleidoscope.DrawPolygon(offsetImageX - stepOffsetX, offsetImageY + stepOffsetY);
                    oldX = stepOffsetX;
                    oldY = stepOffsetY;
                }
            }, 1);


        kaleidoscope.DrawPolygon(offsetImageX - newOffsetX, offsetImageY + newOffsetY);
    }

    return (
            <canvas className={'Kaleidoscope'} ref={canvasRef} />
    );
}

export default Kaleidoscope;