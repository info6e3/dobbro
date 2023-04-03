import React, {useEffect} from 'react';

function Teeth() {
    let linesState = [];
    let distances = [];

    let intervals = [];

    let leftColumn = [];
    let rightColumn = [];
    let dashColumn = [];

    let flag = true;

    for(let i = 0; i < 26; i++)
    {
        if(flag) {
            leftColumn.push(<div className={"Poem_Column_Text_Line_Left"} id={`lineLeft_${i}`}>совершая добро</div>)
            rightColumn.push(<div className={"Poem_Column_Text_Line_Right"} id={`lineRight_${i}`}>избегай славы</div>)


            flag = false;
        } else {
            leftColumn.push(<div className={"Poem_Column_Text_Line_Left"} id={`lineLeft_${i}`}>совершая зло</div>)
            rightColumn.push(<div className={"Poem_Column_Text_Line_Right"} id={`lineRight_${i}`}>избегай наказания</div>)

            flag = true;
        }

        dashColumn.push(<div className={"Poem_Column_Text_Line_Dash"} id={`lineDash_${i}`}>-</div>)
        linesState.push(false);
        distances.push(100);
    }

    useEffect(() => {
        window.onscroll = function() {
            for(let i = 0; i < 26; i++)
            {
                const lineLeft = document.querySelector(`#lineLeft_${i}`);
                const lineRight = document.querySelector(`#lineRight_${i}`);
                const lineDash = document.querySelector(`#lineDash_${i}`);

                const centerY = window.innerHeight * 3/4;
                const lineTop = lineLeft.getBoundingClientRect().y;


                if(lineTop <= centerY && !linesState[i]) { //show
                    linesState[i] = true;

                    clearInterval(intervals[i]);

                    intervals[i] = setInterval(() => {
                        Move(lineLeft,lineDash, lineRight, i, true);
                    }, 8);


                }
                if(lineTop >= centerY && linesState[i]) { //hide
                    linesState[i] = false;
                    console.log('hide')
                    clearInterval(intervals[i]);

                    intervals[i] = setInterval(() => {
                        Move(lineLeft,lineDash, lineRight, i, false);
                    }, 8);
                }
            }
        }
    });

    function Move(elementLeft, elementDash, elementRight, i, direction) {
        if((i !== 0 && direction) || (i !== 25 && !direction)) {
            if(distances[i-1] <= 90 && direction || distances[i+1] >= 10 && !direction) {
                if((distances[i] === 0 && direction === true) || (distances[i] === 100 && direction === false)) {
                    clearInterval(intervals[i]);
                } else {
                    if(direction) {
                        distances[i] = distances[i] - 1;
                    } else {
                        distances[i] = distances[i] + 1;
                    }
                    elementLeft.style.right = `${distances[i]}%`;
                    elementRight.style.left = `${distances[i]}%`;
                    elementDash.style.opacity = `${100 - distances[i]}%`;
                }
            }
        } else {
            if((distances[i] === 0 && direction === true) || (distances[i] === 100 && direction === false)) {
                clearInterval(intervals[i]);
            } else {
                if(direction) {
                    distances[i] = distances[i] - 1;
                } else {
                    distances[i] = distances[i] + 1;
                }
                elementLeft.style.right = `${distances[i]}%`;
                elementRight.style.left = `${distances[i]}%`;
                elementDash.style.opacity = `${100 - distances[i]}%`;
            }
        }
    }

    return (
        <div className={"Poem_Two_Columns"}>
            <div className={"Poem_Column_Text_Left"}><div className={"Poem_Column_Gradient_Left"}></div>{leftColumn}</div>
            <div className={"Poem_Column_Text_Dash"}>{dashColumn}</div>
            <div className={"Poem_Column_Text_Right"}><div className={"Poem_Column_Gradient_Right"}></div>{rightColumn}</div>
        </div>
    );
}

export default Teeth;