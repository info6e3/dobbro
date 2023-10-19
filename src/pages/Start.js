import React from 'react';
import KaleidoscopeInteractive from "../components/Kaleidoscope/KaleidoscopeInteractive";

function StartPage() {
    document.querySelector('body').style.overflow = 'hidden';

    return (
        <div className={"StartPage"}>
            <KaleidoscopeInteractive  count={14} size={1000}/>
            <div className={"StartButton"}><a className={"StartLink"} href={'/content'}>dobbro<br/><div className={"Bold"}>стихи</div></a></div>
        </div>
    );
}

export default StartPage;
