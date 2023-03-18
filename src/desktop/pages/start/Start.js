import React, { useState, useEffect } from 'react';
import config from "../../../config";
import Kaleidoscope from "../../../components/Kaleidoscope/Kaleidoscope";
import albums from "../../../albums";

function StartPage() {
    function Enter() {
        window.location.href = `${config.address}content`;
    }

    return (
        <div>
            <Kaleidoscope  cnt={20}/>
            <div className={"StartButton"} onClick={() => Enter()}><div className={"StartLink"} onClick={() => Enter()}>dobbro<br/><div className={"Bold"}>стихи</div></div></div>
        </div>
    );
}

export default StartPage;
