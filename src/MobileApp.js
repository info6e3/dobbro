import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mobile_ContentPage from './mobile/pages/content/ContentPage';
import Mobile_Poems_1661 from "./mobile/pages/poems/1661/1661";
import Mobile_Poems_Estetika from "./mobile/pages/poems/estetika/estetika"
import Mobile_Poems_Prizhok from "./mobile/pages/poems/prizhok/prizhok";
import Mobile_Poems_Nikolai from "./mobile/pages/poems/nikolai/nikolai";
import Mobile_Poems_Cosmohach from "./mobile/pages/poems/cosmohach/cosmohach";
import Mobile_Poems_Nizneba from "./mobile/pages/poems/nizneba/nizneba";
import Mobile_Poems_Arcticameet from "./mobile/pages/poems/arcticameet/arcticameet";
import Mobile_Poems_Konecigri from "./mobile/pages/poems/konecigri/konecigri";
import Mobile_Poems_Narkofobia from "./mobile/pages/poems/narkofobia/narkofobia";
import Mobile_StartPage from "./mobile/pages/start/Start";
import Mobile_Contacts from "./mobile/pages/contacts/Contacts";

import './styles/mobile/mobile_styles.scss'

function MobileApp() {

    return (
        <div className="MobileApp">
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<Mobile_ContentPage/>}/>
                    <Route exact path={"/content"} element={<Mobile_ContentPage/>}/>
                    <Route exact path={"/about"} element={<Mobile_Contacts/>}/>
                    <Route exact path={"/album1"} element={<Mobile_Poems_1661/>}/>
                    <Route exact path={"/album2"} element={<Mobile_Poems_Estetika/>}/>
                    <Route exact path={"/album3"} element={<Mobile_Poems_Prizhok/>}/>
                    <Route exact path={"/album4"} element={<Mobile_Poems_Nikolai/>}/>
                    <Route exact path={"/album5"} element={<Mobile_Poems_Cosmohach/>}/>
                    <Route exact path={"/album6"} element={<Mobile_Poems_Nizneba/>}/>
                    <Route exact path={"/album7"} element={<Mobile_Poems_Arcticameet/>}/>
                    <Route exact path={"/album8"} element={<Mobile_Poems_Konecigri/>}/>
                    <Route exact path={"/album9"} element={<Mobile_Poems_Narkofobia/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default MobileApp;
