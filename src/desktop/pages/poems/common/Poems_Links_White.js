import React from "react";

import albums from "../../../../albums";

import Image_ArrowBack_active from "../images/BlackArrowBack_active.png";
import Image_ArrowBack from "../images/BlackArrowBack.png";
import Image_ArrowForward_active from "../images/BlackArrowForward_active.png";
import Image_ArrowForward from "../images/BlackArrowForward.png";
import config from "../../../../config";

function Poems_Links({album}) {

    window.onkeydown = function(e) {
        if(e.keyCode === 37) {
            document.cookie = "poem_number=0";
            window.location.href = `${config.address}${albums[album-1].ref}`;
        }
        if(e.keyCode === 39) {
            document.cookie = "poem_number=0";
            window.location.href = `${config.address}${albums[album+1].ref}`;
        }
    };

    function PoemsBackLink_onmouseover(){
        const Element_Div_PoemsBackLink_Title = document.querySelector('#PoemsBackLink_Title');
        Element_Div_PoemsBackLink_Title.style.opacity = '1';

        const Element_Image_ArrowBack = document.querySelector('#Image_ArrowBack');
        Element_Image_ArrowBack.src = Image_ArrowBack_active;
    }

    function PoemsBackLink_onmouseout(){
        const Element_Div_PoemsBackLink_Title = document.querySelector('#PoemsBackLink_Title');
        Element_Div_PoemsBackLink_Title.style.opacity = '0.5';

        const Element_Image_ArrowBack = document.querySelector('#Image_ArrowBack');
        Element_Image_ArrowBack.src = Image_ArrowBack;
    }

    function PoemsForwardLink_onmouseover(){
        const Element_Div_PoemsForwardLink_Title = document.querySelector('#PoemsForwardLink_Title');
        Element_Div_PoemsForwardLink_Title.style.opacity = '1';


        const Element_Image_ArrowForward = document.querySelector('#Image_ArrowForward');
        Element_Image_ArrowForward.src = Image_ArrowForward_active;
    }

    function PoemsForwardLink_onmouseout(){
        const Element_Div_PoemsForwardLink_Title = document.querySelector('#PoemsForwardLink_Title');
        Element_Div_PoemsForwardLink_Title.style.opacity = '0.5';

        const Element_Image_ArrowForward = document.querySelector('#Image_ArrowForward');
        Element_Image_ArrowForward.src = Image_ArrowForward;
    }

    if(album === 0) {
        return (
            <div className={"PoemsLinksContainer unselectable"}>
                <a href={`${config.address}${albums[album+1].ref}`} className={"PoemsForwardLink"} onMouseOut={()=>PoemsForwardLink_onmouseout()}  onMouseOver={()=>PoemsForwardLink_onmouseover()}>
                    <div id={"PoemsForwardLink_Title"}>{albums[album+1].title}</div>
                    <img id={"Image_ArrowForward"} src={Image_ArrowForward}/>
                </a>
            </div>
        );
    }

    if(album === albums.length - 1) {
        return (
            <div className={"PoemsLinksContainer unselectable"}>
                <a href={`${config.address}${albums[album-1].ref}`} className={"PoemsBackLink"} onMouseOut={()=>PoemsBackLink_onmouseout()}  onMouseOver={()=>PoemsBackLink_onmouseover()}>
                    <div id={"PoemsBackLink_Title"}>{albums[album-1].title}</div>
                    <img id={"Image_ArrowBack"} src={Image_ArrowBack}/>
                </a>
            </div>
        );
    }

    return (
        <div className={"PoemsLinksContainer unselectable"}>
            <a href={`${config.address}${albums[album-1].ref}`} className={"White_PoemsBackLink"} onMouseOut={()=>PoemsBackLink_onmouseout()}  onMouseOver={()=>PoemsBackLink_onmouseover()}>
                <div id={"PoemsBackLink_Title"}>{albums[album-1].titleLink}</div>
                <img id={"Image_ArrowBack"} src={Image_ArrowBack}/>
            </a>
            <a href={`${config.address}${albums[album+1].ref}`} className={"White_PoemsForwardLink"} onMouseOut={()=>PoemsForwardLink_onmouseout()}  onMouseOver={()=>PoemsForwardLink_onmouseover()}>
                <div id={"PoemsForwardLink_Title"}>{albums[album+1].titleLink}</div>
                <img id={"Image_ArrowForward"} src={Image_ArrowForward}/>
            </a>
        </div>
    );
}

export default Poems_Links;