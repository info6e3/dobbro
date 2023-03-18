import React from 'react';

import albums from "../../../../albums";
import config from "../../../../config";

function Poems_Header({album}) {
    document.title = albums[album].title;
    let MenuIsOpened = false;
    let distances = 240;
    let interval;

    function MenuOpen() {

        const Element_Div_LinksContainer = document.querySelector('.PoemsFooter_LinksContainer');
        const Element_A_LinkTop = document.querySelector('#PoemsFooter_LinkTop ');
        const Element_A_LinkCenter = document.querySelector('#PoemsFooter_LinkCenter ');
        const Element_A_LinkBot = document.querySelector('#PoemsFooter_LinkBot ');

        const Element_Div_Menu_LineTop = document.querySelector('#PoemsFooterMenu_LineTop');
        const Element_Div_Menu_LineBot = document.querySelector('#PoemsFooterMenu_LineBot');

        if(MenuIsOpened) { //hide
            clearInterval(interval);

            interval = setInterval(() => {

                Move(Element_A_LinkTop, Element_A_LinkCenter, Element_A_LinkBot, Element_Div_Menu_LineTop, Element_Div_Menu_LineBot, false);


            }, 1);

            //


            MenuIsOpened = false;
        } else { //show
            clearInterval(interval);

            interval = setInterval(() => {

                Move(Element_A_LinkTop, Element_A_LinkCenter, Element_A_LinkBot, Element_Div_Menu_LineTop, Element_Div_Menu_LineBot, true);

            }, 1);

            //

            MenuIsOpened = true;
        }
    }

    function Move(element1, element2, element3, lineTop, lineBot, direction) {
        if((distances === 0 && direction === true) || (distances === 240 && direction === false)) {
            clearInterval(interval);
        } else {
            if(direction) {
                distances = distances - 2;


            } else {
                distances = distances + 2;
            }

            lineTop.style.top = `${(distances - 240)/24 * (-1)}px`;
            lineBot.style.bottom = `${(distances - 240)/24 * (-1)}px`;

            if(distances >= 120) {
                element1.style.left = `${distances - 120}%`;
                if(distances <= 180)
                    element2.style.left = `${distances - 60}%`;

            } else {
                if(distances >= 60)
                    element2.style.left = `${distances - 60}%`;

                element3.style.left = `${distances}%`;
            }
        }
    }


    return (
        <div>
            <footer className={"PoemsFooter"}>
                <h2 id={"0"}  className={"PoemsFooterName_Vertical"}>{albums[album].title}</h2>
                <h1 className={"PoemsFooterTitle"}><a className={"PoemsFooterTitle_Link"} href={config.address}>dobbro</a></h1>


                <div className={"PoemsFooterMenu unselectable"} onClick={()=>MenuOpen()}>
                    <div id={'PoemsFooterMenu_LineTop'} className={"PoemsFooterMenu_Line"}></div>
                    <div id={'PoemsFooterMenu_LineCenter'} className={"PoemsFooterMenu_Line"}></div>
                    <div id={'PoemsFooterMenu_LineBot'} className={"PoemsFooterMenu_Line"}></div>
                </div>

                <div className={"PoemsFooter_LinksContainer_VisibleArea"}>
                    <div className={"PoemsFooter_GradientPanel"}></div>
                    <div className={"PoemsFooter_LinksContainer"}>
                        <a className={"PoemsFooter_Link"} href={`${config.address}content`} id={"PoemsFooter_LinkTop"}>оглавление</a>
                        <a className={"PoemsFooter_Link"} href={config.download} id={"PoemsFooter_LinkCenter"}>скачать</a>
                        <a className={"PoemsFooter_Link"} href={`${config.address}about`} id={"PoemsFooter_LinkBot"}>контакты</a>
                    </div>
                </div>

            </footer>

        </div>
    );
}

export default Poems_Header;
