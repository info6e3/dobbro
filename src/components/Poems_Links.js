import React from "react";
import Image_ArrowBack from "../images/interface/ArrowBack_active.png";
import Image_ArrowForward from "../images/interface/ArrowForward_active.png";
import Image_BlackArrowBack from "../images/interface/BlackArrowBack.png";
import Image_BlackArrowForward from "../images/interface/BlackArrowForward_active.png";
import {Link, useNavigate} from "react-router-dom";

import Image_NiznebaLink from "../images/links/nizneba.png";
import Image_PrizhokLink from "../images/links/prizhok.png";

function Poems_Links({next, prev, theme}) {
    const navigate = useNavigate();

    window.onkeydown = function (e) {
        if (e.keyCode === 37) {
            if (prev) {
                document.cookie = "poem_number=0";
                navigate(prev.ref)
                window.scrollTo(0, 0)
            }
        }
        if (e.keyCode === 39) {
            if (next) {
                document.cookie = "poem_number=0";
                navigate(next.ref)
                window.scrollTo(0, 0)
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
                prev ? <Link  onClick={() => window.scrollTo(0, 0)}  to={prev.ref+'#0'} className={"PoemsBackLink"}>
                    <div id={"PoemsBackLink_Title"}>{linkTitle(prev)}</div>
                    <img id={"Image_ArrowBack"} src={theme === "white" ? Image_BlackArrowBack : Image_ArrowBack}/>
                </Link> : null
            }
            {
                next ? <Link onClick={() => window.scrollTo(0, 0)} to={next.ref+'#0'} className={"PoemsForwardLink"}>
                    <div id={"PoemsForwardLink_Title"}>{linkTitle(next)}</div>
                    <img id={"Image_ArrowForward"} src={theme === "white" ? Image_BlackArrowForward : Image_ArrowForward}/>
                </Link> : null
            }
        </div>
    );
}

export default Poems_Links;