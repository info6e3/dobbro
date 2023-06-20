import React from 'react';
import torrentFile from '../../download/experimental_hip_hop_dobbro_Дискография_6_альбомов_2012_2020,_MP3.torrent';
import {Link} from "react-router-dom";

function Contacts() {
    return (
        <div className="Contacts">
            <div id={"Contacts_Header"}>
                <div id={"Contacts_Head"}>
                    <h1 className={"Contacts_HeadText"}><a className={"Contacts_HeadLink"} href={`${process.env.REACT_APP_URL}`}>dobbro</a></h1>
                </div>
                <div id={"ContentPage_Menu"}>
                    <Link to={'/content'} className={"ContentPage_Menu_Item"}>оглавление</Link>
                    <a href={torrentFile} className={"ContentPage_Menu_Item"}>скачать</a>
                    <div className={"ContentPage_Menu_ThisItem"}>контакты</div>
                </div>
            </div>
            <div className={"Contacts_LeftPanel"}>
                <a href={`${process.env.REACT_APP_BOOSTY}`} className={"Contacts_LeftPanel_Support"}><div className={"Support"}>поддержать</div><div className={"Boosty"}>{'{boosty}'}</div></a>

                <div className={"Contacts_LeftPanel_EmailTitle"}>email</div>
                <div className={"Contacts_LeftPanel_Email"}>dob46bro@gmail.com</div>
            </div>
            <div className={"Contacts_About"}>
                проект «dobbro» начался<br/>с трагического случая,<br/>когда молодой<br/>начинающий поэт<br/>александр дванов<br/>попытался совершить<br/>суицид. после длительного<br/>лечения в психиатрических<br/>больницах, в 2012 году<br/>интернет-публике был<br/>представлен первый<br/>сборник песен,<br/>объединённых в альбом<br/>«1661», и с тех пор проект<br/>«dobbro» занял нишу жанра<br/>spoken word.
            </div>
            <div id={"Contacts_Footer"}>
                <div className={"Contacts_Footer_Contacts"}>
                    <a href={`${process.env.REACT_APP_YOUTUBE}`} className={"Contacts_ContactLink"}>youtube</a>
                    <a href={`${process.env.REACT_APP_TELEGRAM}`} className={"Contacts_ContactLink"}>telegram</a>
                    <a href={`${process.env.REACT_APP_VK}`} className={"Contacts_ContactLink"}>vk</a>
                </div>
                <div className={"Contacts_Label"}>dobbro</div>
                <div className={"Contacts_Year"}>2022</div>
            </div>
        </div>
    );
}

export default Contacts;
