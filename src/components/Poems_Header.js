import React, {useEffect, useRef, useState} from 'react';
import torrentFile from '../download/experimental_hip_hop_dobbro_Дискография_6_альбомов_2012_2020,_MP3.torrent';
import {Link} from "react-router-dom";

function Poems_Header({title}) {
    document.title = title;
    const [isOpened, setIsOpened] = useState(false);
    const refLinkTop = useRef();
    const refLinkCenter = useRef();
    const refLinkBottom = useRef();

    let timeOutTop = null;
    let timeOutCenter = null;
    let timeOutBottom = null;

    useEffect(() => {
        clearTimeout(timeOutTop)
        clearTimeout(timeOutCenter)
        clearTimeout(timeOutBottom)
        if(isOpened) {
            refLinkTop.current.classList.add('PoemsHeader_Link_show')
            timeOutCenter = setTimeout(() => {
                refLinkCenter.current.classList.add('PoemsHeader_Link_show')
                timeOutBottom = setTimeout(() => {
                    refLinkBottom.current.classList.add('PoemsHeader_Link_show')
                }, 100)
            }, 100)
        } else {
            refLinkBottom.current.classList.remove('PoemsHeader_Link_show')
            timeOutCenter = setTimeout(() => {
                refLinkCenter.current.classList.remove('PoemsHeader_Link_show')
                timeOutTop = setTimeout(() => {
                    refLinkTop.current.classList.remove('PoemsHeader_Link_show')
                }, 100)
            }, 100)
        }
    }, [isOpened])

    return (
        <div>
            <header className={"PoemsHeader"}>
                <h2 id={"0"} className={"PoemsHeaderName_Vertical"}>{title}</h2>
                <h1 className={"PoemsHeaderTitle"}><Link className={"PoemsHeaderTitle_Link"}
                                                         to={'/'}>dobbro</Link></h1>


                <div className={"PoemsHeaderMenu unselectable"} onClick={() => setIsOpened(!isOpened)}>
                    <div id={'PoemsHeaderMenu_LineTop'} className={"PoemsHeaderMenu_Line"}></div>
                    <div id={'PoemsHeaderMenu_LineCenter'} className={"PoemsHeaderMenu_Line"}></div>
                    <div id={'PoemsHeaderMenu_LineBot'} className={"PoemsHeaderMenu_Line"}></div>
                </div>

                <div className={"PoemsHeader_LinksContainer_VisibleArea"}>
                    <div className={"PoemsHeader_GradientPanel"}></div>
                    <div className={"PoemsHeader_LinksContainer"}>
                        <Link ref={refLinkTop} className={`PoemsHeader_Link`} to={`/content`}>оглавление</Link>
                        <Link ref={refLinkCenter} className={`PoemsHeader_Link`} to={torrentFile}>скачать</Link>
                        <Link ref={refLinkBottom} className={`PoemsHeader_Link`} to={`/about`}>контакты</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Poems_Header;
