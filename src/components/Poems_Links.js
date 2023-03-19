import React from "react";
import Image_ArrowBack from "../images/interface/ArrowBack_active.png";
import Image_ArrowForward from "../images/interface/ArrowForward_active.png";
import {Link} from "react-router-dom";

import Image_NiznebaLink from "../images/links/nizneba.png";
import Image_PrizhokLink from "../images/links/prizhok.png";

function Poems_Links({next, prev}) {

    window.onkeydown = function (e) {
        if (e.keyCode === 37) {
            if (prev) {
                document.cookie = "poem_number=0";
                window.location.href = `${process.env.REACT_APP_URL}${prev.ref}`;
            }
        }
        if (e.keyCode === 39) {
            if (next) {
                document.cookie = "poem_number=0";
                window.location.href = `${process.env.REACT_APP_URL}${next.ref}`;
            }
        }
    };

    function linkTitle(direction) {
        if (direction.ref) {
            switch (direction.ref) {
                case '/prizhok':
                    return <img src={Image_PrizhokLink}/>
                case '/nizneba':
                    return <img src={Image_NiznebaLink}/>
                default:
                    return direction.title;
            }

        } else return direction.title;
    }

    return (
        <div className={"PoemsLinksContainer unselectable"}>
            {
                prev ? <a href={prev.ref} className={"PoemsBackLink"}>
                    <div id={"PoemsBackLink_Title"}>{linkTitle(prev)}</div>
                    <img id={"Image_ArrowBack"} src={Image_ArrowBack}/>
                </a> : null
            }
            {
                next ? <a href={next.ref} className={"PoemsForwardLink"}>
                    <div id={"PoemsForwardLink_Title"}>{linkTitle(next)}</div>
                    <img id={"Image_ArrowForward"} src={Image_ArrowForward}/>
                </a> : null
            }
        </div>
    );
}

export default Poems_Links;