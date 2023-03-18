import React, {useEffect} from 'react';

import albums from "../../../../albums";
import config from "../../../../config";

function PoemsHeader() {
    let scrollPrev = 0;

    useEffect(() => {
        document.onscroll = function() {
            let scrolled = window.pageYOffset;
            const header = document.querySelector('.Mobile_White_PoemsHeader');

            if(!MenuIsOpened) {
                if ( scrolled > 100 && scrolled > scrollPrev ) {
                    header.classList.add('Header_out');
                } else {
                    header.classList.remove('Header_out');
                }
            }
            scrollPrev = scrolled;
        };
    });

    let MenuIsOpened = false;

    function MenuOpen() {
        const element =  document.querySelector('.Mobile_White_PoemsHeader_LinksContainer');

        if(MenuIsOpened) {          //close
            element.classList.remove('Links_show');
            MenuIsOpened = false;
        } else {                    //open
            element.classList.add('Links_show');
            MenuIsOpened = true;
        }
    }

    return (
        <div>
            <div className={"Mobile_White_PoemsHeader_LinksContainer"}>
                <a className={"Mobile_White_PoemsHeader_Link"} href={`${config.address}content`} id={"Mobile_PoemsHeader_LinkTop"}>оглавление</a>
                <a className={"Mobile_White_PoemsHeader_Link"} href={config.download} id={"Mobile_PoemsHeader_LinkCenter"}>скачать</a>
                <a className={"Mobile_White_PoemsHeader_Link"} href={`${config.address}about`} id={"Mobile_PoemsHeader_LinkBot"}>контакты</a>
            </div>
            <header className={"Mobile_White_PoemsHeader"}>
                <h1 className={"Mobile_White_PoemsHeader_Title"}><a className={"Mobile_White_PoemsHeaderTitle_Link"} href={config.address}>dobbro</a></h1>
                <div className={"Mobile_White_PoemsHeader_Menu unselectable"} onClick={()=>MenuOpen()}>
                    <div id={'Mobile_White_PoemsHeaderMenu_LineTop'} className={"Mobile_White_PoemsHeaderMenu_Line"}></div>
                    <div id={'Mobile_White_PoemsHeaderMenu_LineCenter'} className={"Mobile_White_PoemsHeaderMenu_Line"}></div>
                    <div id={'Mobile_White_PoemsHeaderMenu_LineBot'} className={"Mobile_White_PoemsHeaderMenu_Line"}></div>
                </div>
            </header>
            <div className={"Mobile_PoemsHeader_Space"}></div>
        </div>
    );
}

export default PoemsHeader;
