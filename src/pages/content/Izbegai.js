import React, {useEffect, useRef, useState} from 'react';

function Izbegai() {
    const [label, setLabel] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const refStart = useRef();
    const refEnd = useRef();
    const [changeTimeout, setChangeTimeout] = useState(null);

    useEffect(() => {
        if (isMouseOver) {
            clearTimeout(changeTimeout);
            refStart.current.classList.add("Izbegai_Text_show")
            refEnd.current.classList.add("Izbegai_Text_show")
        } else {
            refStart.current.classList.remove("Izbegai_Text_show")
            refEnd.current.classList.remove("Izbegai_Text_show")
            setChangeTimeout(setTimeout(() => {
                setLabel(!label);
            }, 1000))
        }
    }, [isMouseOver])

    return (
        <div>
            <div className={"Izbegai_TextContainer"}>
                    <span ref={refStart}
                          className={"Izbegai_Text_Left"}
                          style={{
                              left: label ? '450px' : '516px'
                          }}
                    >{label ? 'совершая добро  ' : 'совершая зло  '}
                    </span><span
                className={"Izbegai_RedText"} onMouseOver={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}>избегай</span><span ref={refEnd}
                                                                               className={"Izbegai_Text_Right"}
                                                                               style={{
                                                                                   left: '1054px'
                                                                               }}>{label ? '  славы' : '  наказания'}</span>
            </div>
        </div>
    );
}

export default Izbegai;
