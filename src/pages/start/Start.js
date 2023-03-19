import React from 'react';
import Kaleidoscope from "../../components/Kaleidoscope/Kaleidoscope";

function StartPage() {
    function Enter() {
        window.location.href = `${process.env.REACT_APP_URL}/content`;
    }

    return (
        <div>
            <Kaleidoscope  count={20}/>
            <div className={"StartButton"} onClick={() => Enter()}><div className={"StartLink"} onClick={() => Enter()}>dobbro<br/><div className={"Bold"}>стихи</div></div></div>
        </div>
    );
}

export default StartPage;
