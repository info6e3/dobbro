import React from 'react';

function Izbegai() {
    let isMouseOver = false;
    let currentOpacity = 0;
    let text = true;
    let animationInterval;

    function ShowText() {
        if(!isMouseOver) {
            clearInterval(animationInterval);
            isMouseOver = true;
            if(text) {
                animationInterval = setInterval(() => {
                    const element = document.getElementById('Izbegai_Random_Text_1');
                    const element2 = document.getElementById('Izbegai_Random_Text_22');
                    currentOpacity += 4;
                    element.style.opacity = currentOpacity/100;
                    element2.style.opacity = currentOpacity/100;
                    if(currentOpacity >= 100) {
                        currentOpacity = 100;
                        clearInterval(animationInterval);
                    }
                }, 30)
            } else {
                animationInterval = setInterval(() => {
                    const element = document.getElementById('Izbegai_Random_Text_2');
                    const element2 = document.getElementById('Izbegai_Random_Text_11');
                    currentOpacity += 4;
                    element.style.opacity = currentOpacity/100;
                    element2.style.opacity = currentOpacity/100;
                    if(currentOpacity >= 100) {
                        currentOpacity = 100;
                        clearInterval(animationInterval);
                    }
                }, 30)
            }
        }
    }

    function HideText() {
        if(isMouseOver) {
            clearInterval(animationInterval);
            isMouseOver = false;
            if(text) {
                animationInterval = setInterval(() => {
                    const element = document.getElementById('Izbegai_Random_Text_1');
                    const element2 = document.getElementById('Izbegai_Random_Text_22');
                    currentOpacity -= 4;
                    element.style.opacity = currentOpacity/100;
                    element2.style.opacity = currentOpacity/100;
                    if(currentOpacity <= 0) {
                        currentOpacity = 0;
                        text = false;
                        clearInterval(animationInterval);
                    }
                }, 40)
            } else {
                animationInterval = setInterval(() => {
                    const element = document.getElementById('Izbegai_Random_Text_2');
                    const element2 = document.getElementById('Izbegai_Random_Text_11');
                    currentOpacity -= 4;
                    element.style.opacity = currentOpacity/100;
                    element2.style.opacity = currentOpacity/100;
                    if(currentOpacity <= 0) {
                        currentOpacity = 0;
                        text = true;
                        clearInterval(animationInterval);
                    }
                }, 40)
            }
        }
    }

    return (
        <div>
            <div className={"Izbegai_TextContainer"}>
                    <div id={"Izbegai_Random_Text_1"} className={"Izbegai_Random_Text_Right"}>славы</div>
                    <div id={"Izbegai_Random_Text_11"} className={"Izbegai_Random_Text_Left"}>совершая зло</div>
                    <div id={"Izbegai_Random_Text_2"} className={"Izbegai_Random_Text_Right"}>наказания</div>
                    <div id={"Izbegai_Random_Text_22"} className={"Izbegai_Random_Text_Left"}>совершая добро</div>
            </div>

            <div className={"Izbegai_ReadText"} onMouseOver={() => ShowText()} onMouseLeave={() => HideText()}>избегай</div>
        </div>
    );
}

export default Izbegai;
