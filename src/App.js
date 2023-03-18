import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DesktopApp from "./DesktopApp";
import MobileApp from "./MobileApp";

function App() {

    useEffect(() => {
        console.log(process.env.NODE_ENV)
        console.log(process.env.REACT_APP_URL)
    })

    if(window.innerWidth < 1512) {
        return (
            <MobileApp/>
        );
    } else {
        return (
            <DesktopApp/>
        );
    }
}

export default App;
