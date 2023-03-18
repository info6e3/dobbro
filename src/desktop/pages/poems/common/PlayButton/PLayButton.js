import React, {useEffect, useState} from 'react';

import './PLayButton.css';

function PlayButton({music}) {
    const [isPressed, setPressed] = useState(false);
    const [audio, setAudio] = useState(new Audio(music));

    function Play() {
        setPressed(true);
        audio.play();
    }

    function Pause() {
        setPressed(false);
        audio.pause();
    }

    if(isPressed) {
        return (
            <div className={"PlayButton"} display={"inline"} onClick={Pause}>
                <svg className={"PlayImage"} color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
                </svg>
            </div>
        );
    } else {
        return (
            <div className={"PlayButton"} display={"inline"} onClick={Play}>
                <svg className={"PlayImage"} color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
            </div>
        );
    }


}

export default PlayButton;



