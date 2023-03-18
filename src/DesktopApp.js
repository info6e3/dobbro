import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContentPage from './desktop/pages/content/ContentPage';
import Poems_1661 from "./desktop/pages/poems/1661/1661";
import Poems_Estetika from "./desktop/pages/poems/estetika/estetika"
import Poems_Prizhok from "./desktop/pages/poems/prizhok/prizhok";
import Poems_Nikolai from "./desktop/pages/poems/nikolai/nikolai";
import Poems_Cosmohach from "./desktop/pages/poems/cosmohach/cosmohach";
import Poems_Nizneba from "./desktop/pages/poems/nizneba/nizneba";
import Poems_Arcticameet from "./desktop/pages/poems/arcticameet/arcticameet";
import Poems_Konecigri from "./desktop/pages/poems/konecigri/konecigri";
import Poems_Narkofobia from "./desktop/pages/poems/narkofobia/narkofobia";
import StartPage from "./desktop/pages/start/Start";
import Contacts from "./desktop/pages/contacts/Contacts";
import './styles/desktop/styles.css'

function DesktopApp() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<StartPage/>}/>
                    <Route exact path={"/content"} element={<ContentPage/>}/>
                    <Route exact path={"/about"} element={<Contacts/>}/>
                    <Route exact path={"/album1"} element={<Poems_1661/>}/>
                    <Route exact path={"/album2"} element={<Poems_Estetika/>}/>
                    <Route exact path={"/album3"} element={<Poems_Prizhok/>}/>
                    <Route exact path={"/album4"} element={<Poems_Nikolai/>}/>
                    <Route exact path={"/album5"} element={<Poems_Cosmohach/>}/>
                    <Route exact path={"/album6"} element={<Poems_Nizneba/>}/>
                    <Route exact path={"/album7"} element={<Poems_Arcticameet/>}/>
                    <Route exact path={"/album8"} element={<Poems_Konecigri/>}/>
                    <Route exact path={"/album9"} element={<Poems_Narkofobia/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default DesktopApp;
