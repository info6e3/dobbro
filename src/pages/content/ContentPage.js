import React, {useEffect} from 'react';
import Image_1 from '../../images/content/1.png';
import Image_2 from '../../images/content/2.png';
import Image_3 from '../../images/content/3.png';
import Image_4 from '../../images/content/4.png';
import Image_5 from '../../images/content/5.png';
import albums from "../../structure/albums.json";
import Izbegai from "./Izbegai";
import torrentFile from "../../download/experimental_hip_hop_dobbro_Дискография_6_альбомов_2012_2020,_MP3.torrent";
import {Link} from "react-router-dom";

function ContentPage() {
    let image2showed = false;
    let image3showed = false;
    let image4showed = false;
    let image5showed = false;

    let topsElements = [2980, 4159, 5170, 6001]

    let imageAnimationState = [false, false, false, false];

    useEffect(() => {
        window.onscroll = function () {
            const image2 = document.querySelector('#ContentPage_Image_2');
            const image3 = document.querySelector('#ContentPage_Image_3');
            const image4 = document.querySelector('#ContentPage_Image_4');
            const image5 = document.querySelector('#ContentPage_Image_5');

            image2showed = ImageAnimationControl(image2, image2showed, 0);
            image3showed = ImageAnimationControl(image3, image3showed, 1);
            image4showed = ImageAnimationControl(image4, image4showed, 2);
            image5showed = ImageAnimationControl(image5, image5showed, 3);
        }
    });

    function ImageAnimationControl(image, state, index) {
        const startY = window.innerHeight * 7 / 8;
        const endY = window.innerHeight * 1 / 8;


        const imageTop = image.getBoundingClientRect().y;
        const imageBot = image.getBoundingClientRect().y + image.height;


        if (state) {
            image.style.top = topsElements[index] + (window.pageYOffset + window.innerHeight - topsElements[index]) / 4 + 'px';
            // image.style.transform = `translate(0, ${(window.pageYOffset+window.innerHeight - topsElements[index])/5}px)`;
        }


        if (!imageAnimationState[index]) {
            if (imageTop <= startY && imageBot >= startY && !state) { // появление снизу при скролле вниз
                imageAnimationState[index] = true;
                //console.log('image showed');
                image.classList.remove('ContentPage_Image_Hide')
                image.classList.remove('ContentPage_Image_Hide2')
                image.classList.add('ContentPage_Image_Show');

                setTimeout(() => {
                    imageAnimationState[index] = false;
                }, 800);
                return true;
            }

            if (imageBot <= endY && state) { //исчезание вверх при скролле вниз
                imageAnimationState[index] = true;
                //console.log('image hide');
                image.classList.remove('ContentPage_Image_Show')
                image.classList.remove('ContentPage_Image_Show2')
                image.classList.add('ContentPage_Image_Hide');

                setTimeout(() => {
                    imageAnimationState[index] = false;
                }, 800);
                return false;
            }

            if (imageTop <= endY && imageBot >= endY && !state) { // появление сверху при скролле вверх
                imageAnimationState[index] = true;
                //console.log('image showed');
                image.classList.remove('ContentPage_Image_Hide')
                image.classList.remove('ContentPage_Image_Hide2')
                image.classList.add('ContentPage_Image_Show2');

                //
                setTimeout(() => {
                    imageAnimationState[index] = false;
                }, 800);
                return true;
            }

            if (imageTop > startY && state) { //исчезание вниз при скролле вверх
                imageAnimationState[index] = true;

                //console.log('image hide2');
                image.classList.remove('ContentPage_Image_Show')
                image.classList.remove('ContentPage_Image_Show2')
                image.classList.add('ContentPage_Image_Hide2');

                setTimeout(() => {
                    imageAnimationState[index] = false;
                }, 800);
                return false;
            }
        }

        return state;
    }

    function Album(album, index, element) { //вставить element после poem с index
        if (albums[album].poems.length === 1)
            return (
                <div className={"ContentPage_Section"}>
                    <div className={"ContentPage_SingleSection"}>
                        <div className={"ContentPage_Section_Poem"}><a href={`${albums[album].ref}#$1`}
                                                                       className={"ContentPage_Section_Poem_Link"}>{albums[album].poems[0].title}</a>
                        </div>
                    </div>
                </div>)
        return (
            <div className={"ContentPage_Section"}>
                <div>
                    <h2 className={"ContentPage_Section_Name"}><a href={`${albums[album].ref}`}
                                                                  className={"ContentPage_Section_Poem_Link"}>{album}</a>
                    </h2>
                    {
                        albums[album].poems.map((poem, i) => {
                                return i + 1 === index ?
                                    <React.Fragment key={i}>
                                        <div className={"ContentPage_Section_Poem"}><a
                                            href={`${albums[album].ref}#${i + 1}`}
                                            className={"ContentPage_Section_Poem_Link"}>{poem.title}</a></div>
                                    </React.Fragment>
                                    :
                                    <React.Fragment key={i}>
                                        <div className={"ContentPage_Section_Poem"}><a
                                            href={`${albums[album].ref}#${i + 1}`}
                                            className={"ContentPage_Section_Poem_Link"}>{poem.title}</a></div>
                                    </React.Fragment>
                            }
                        )
                    }
                </div>
            </div>
        )
    }

    function Albums(albumTitle, id, element) { //вставить element после poem с index в альбоме albumTitle
        return Object.keys(albums).map((title, index) => {
            return (
                albumTitle === title ?
                    <React.Fragment key={index}>
                        {
                            Album(title, id, element)
                        }
                    </React.Fragment>

                    :
                    <React.Fragment key={index}>
                        {
                            Album(title)
                        }
                    </React.Fragment>
            )
        })
    }

    return (
        <div className="ContentPage">
            <div id={"ContentPage_ImagesContainer"}>
                <div className={"ContentPage_Images_Container"}><img id={"ContentPage_Image_2"}
                                                                     className={"ContentPage_Images"} src={Image_2}/>
                </div>
                <div className={"ContentPage_Images_Container"}><img id={"ContentPage_Image_3"}
                                                                     className={"ContentPage_Images"} src={Image_3}/>
                </div>
                <div className={"ContentPage_Images_Container"}><img id={"ContentPage_Image_4"}
                                                                     className={"ContentPage_Images"} src={Image_4}/>
                </div>
                <div className={"ContentPage_Images_Container"}><img id={"ContentPage_Image_5"}
                                                                     className={"ContentPage_Images"} src={Image_5}/>
                </div>
            </div>
            <div id={"ContentPage_Header"}>
                <div id={"ContentPage_ImageAndHead"} style={{
                    backgroundImage: `url(${Image_1})`
                }}>
                    <h1 id={"ContentPage_HeadText"}>dobbro</h1>
                </div>
                <div id={"ContentPage_Menu"}>
                    <div className={"ContentPage_Menu_ThisItem"}>оглавление</div>
                    <a href={torrentFile} className={"ContentPage_Menu_Item"}>скачать</a>
                    <Link to={'/about'} className={"ContentPage_Menu_Item"}>контакты</Link>
                </div>
            </div>
            {
                Albums("1661", 7, <Izbegai/>)
            }
            <div id={"ContentPage_Footer"}></div>
        </div>
    );
}

export default ContentPage;
