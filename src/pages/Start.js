import React from 'react';
import Kaleidoscope from "../components/Kaleidoscope/Kaleidoscope";

function StartPage() {
    document.querySelector('body').style.overflow = 'hidden';

    return (
        <div className={"StartPage"}>
            <Kaleidoscope  count={20} size={1000}/>
            <div className={"StartButton"}><a className={"StartLink"} href={'/content'}>dobbro<br/><div className={"Bold"}>стихи</div></a></div>
        </div>
    );
}

export default StartPage;
