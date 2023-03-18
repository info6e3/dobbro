import React, { useState, useEffect } from 'react';
import config from "../../../config";
import PoemsHeader from "../poems/common/PoemsHeader";

function Contacts() {

    return (
        <div className="Mobile_Contacts">
            <PoemsHeader/>
            <div className={"Mobile_Contacts_Section"}>
                <a href={`${config.boosty}`} className={"Mobile_Contacts_LeftPanel_Support"}><div className={"Mobile_Support"}>поддержать</div><div className={"Mobile_Boosty"}>{'{boosty}'}</div></a>
                <div className={"Mobile_Contacts_LeftPanel_EmailTitle"}>email</div>
                <div className={"Mobile_Contacts_LeftPanel_Email"}>dob46bro@gmail.com</div>
            </div>
            <div className={"Mobile_Contacts_Section"}>
                проект «dobbro» начался<br/>с трагического случая,<br/>когда молодой<br/>начинающий поэт<br/>александр дванов<br/>попытался совершить<br/>суицид. после длительного<br/>лечения в психиатрических<br/>больницах, в 2012 году<br/>интернет-публике был<br/>представлен первый<br/>сборник песен,<br/>объединённых в альбом<br/>«1661», и с тех пор проект<br/>«dobbro» занял нишу жанра<br/>spoken word.
            </div>
            <div className={"Mobile_Contacts_Section"}>
                <div className={"Mobile_Contacts_Links"}>
                    <a href={`${config.youtube}`} className={"Mobile_Contacts_ContactLink"}>youtube</a>
                    <a href={`${config.telegram}`} className={"Mobile_Contacts_ContactLink"}>telegram</a>
                    <a href={`${config.vk}`} className={"Mobile_Contacts_ContactLink"}>vk</a>
                </div>
            </div>
            <div className={"Mobile_Contacts_Footer"}>
                <div className={"Mobile_Contacts_Label"}>dobbro</div>
                <div className={"Mobile_Contacts_Label"}>2022</div>
            </div>
        </div>
    );
}

export default Contacts;
