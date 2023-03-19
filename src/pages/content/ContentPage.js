import React, {useEffect } from 'react';
import Image_1 from '../../images/content/1.png';
import Image_2 from '../../images/content/2.png';
import Image_3 from '../../images/content/3.png';
import Image_4 from '../../images/content/4.png';
import Image_5 from '../../images/content/5.png';
import albums from "../../structure/albums.json";
import Izbegai from "./Izbegai";
import torrentFile from "../../download/experimental_hip_hop_dobbro_Дискография_6_альбомов_2012_2020,_MP3.torrent";

function ContentPage() {
    let image2showed = false;
    let image3showed = false;
    let image4showed = false;
    let image5showed = false;

    let topsElements = [2980, 4159, 5170, 6001]

    let imageAnimationState = [false, false, false, false];

    useEffect(() => {
        window.onscroll = function() {
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
        const centerY = window.innerHeight/2;

        const startY = window.innerHeight * 7/8;
        const endY = window.innerHeight * 1/8;



        const imageTop = image.getBoundingClientRect().y;
        const imageCenter = image.getBoundingClientRect().y + image.height/2;
        const imageBot = image.getBoundingClientRect().y + image.height;


        if(state) {
            image.style.top = topsElements[index] + (window.pageYOffset+window.innerHeight - topsElements[index])/4 + 'px';
            // image.style.transform = `translate(0, ${(window.pageYOffset+window.innerHeight - topsElements[index])/5}px)`;
        }


        if(!imageAnimationState[index]) {
            //console.log('image', imageTop, imageBot)
            //console.log('pos', startY, endY)
            if(imageTop <= startY && imageBot >= startY && !state) { // появление снизу при скролле вниз
                imageAnimationState[index] = true;
                //console.log('image showed');
                image.classList.remove('ContentPage_Image_Hide')
                image.classList.remove('ContentPage_Image_Hide2')
                image.classList.add('ContentPage_Image_Show');

                setTimeout(()=> {
                    imageAnimationState[index] = false;
                }, 800);
                return true;
            }

            if(imageBot <= endY && state) { //исчезание вверх при скролле вниз
                imageAnimationState[index] = true;
                //console.log('image hide');
                image.classList.remove('ContentPage_Image_Show')
                image.classList.remove('ContentPage_Image_Show2')
                image.classList.add('ContentPage_Image_Hide');

                setTimeout(()=> {
                    imageAnimationState[index] = false;
                }, 800);
                return false;
            }

            if(imageTop <= endY && imageBot >= endY && !state) { // появление сверху при скролле вверх
                imageAnimationState[index] = true;
                //console.log('image showed');
                image.classList.remove('ContentPage_Image_Hide')
                image.classList.remove('ContentPage_Image_Hide2')
                image.classList.add('ContentPage_Image_Show2');

                //
                setTimeout(()=> {
                    imageAnimationState[index] = false;
                }, 800);
                return true;
            }

            if(imageTop > startY && state) { //исчезание вниз при скролле вверх
                imageAnimationState[index] = true;

                //console.log('image hide2');
                image.classList.remove('ContentPage_Image_Show')
                image.classList.remove('ContentPage_Image_Show2')
                image.classList.add('ContentPage_Image_Hide2');

                setTimeout(()=> {
                    imageAnimationState[index] = false;
                }, 800);
                return false;
            }
        }


        return state;
    }

    return (
        <div className="ContentPage">
            <div id={"ContentPage_ImagesContainer"}>
                <div className={"ContentPage_Images_Container"} ><img id={"ContentPage_Image_2"} className={"ContentPage_Images"} src={Image_2}/></div>
                <div className={"ContentPage_Images_Container"} ><img id={"ContentPage_Image_3"} className={"ContentPage_Images"} src={Image_3}/></div>
                <div className={"ContentPage_Images_Container"} ><img id={"ContentPage_Image_4"} className={"ContentPage_Images"} src={Image_4}/></div>
                <div className={"ContentPage_Images_Container"} ><img id={"ContentPage_Image_5"} className={"ContentPage_Images"} src={Image_5}/></div>
            </div>
            <div id={"ContentPage_Header"}>
                <div id={"ContentPage_ImageAndHead"} style={{
                    backgroundImage: `url(${Image_1})`
                }}>
                    <h1 id={"ContentPage_HeadText"}>dobbro</h1>
                </div>
                <div id={"ContentPage_Menu"}>
                    <a className={"ContentPage_Menu_ThisItem"}>оглавление</a>
                    <a href={torrentFile} className={"ContentPage_Menu_Item"}>скачать</a>
                    <a href={`${process.env.REACT_APP_URL}/about`} className={"ContentPage_Menu_Item"}>контакты</a>
                </div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[0].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[0].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#1`} className={"ContentPage_Section_Poem_Link"}>клубки минут</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#2`} className={"ContentPage_Section_Poem_Link"}>лжеобычный спутник</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#3`} className={"ContentPage_Section_Poem_Link"}>бессмертны ровно до восьми пятнадцати</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#4`} className={"ContentPage_Section_Poem_Link"}>в пустоту на летней сцене</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#5`} className={"ContentPage_Section_Poem_Link"}>подмостки цирковой ямы</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#6`} className={"ContentPage_Section_Poem_Link"}>здания автомашины животные деревья</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#7`} className={"ContentPage_Section_Poem_Link"}>фагоциты в бетонном позвоночнике проспекта</a></div>
                <Izbegai/>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#8`} className={"ContentPage_Section_Poem_Link"}>по адским кругам мчат</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#9`} className={"ContentPage_Section_Poem_Link"}>стылый воздух искрится</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[0].ref}#10`} className={"ContentPage_Section_Poem_Link"}>с 09.10.2011 года является запрещённым к использованию</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[1].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[1].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#1`} className={"ContentPage_Section_Poem_Link"}>как минимум двое</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#2`} className={"ContentPage_Section_Poem_Link"}>привет поехавшим</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#3`} className={"ContentPage_Section_Poem_Link"}>сардиния</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#4`} className={"ContentPage_Section_Poem_Link"}>жёлтый подземный город</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#5`} className={"ContentPage_Section_Poem_Link"}>не умел</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#6`} className={"ContentPage_Section_Poem_Link"}>уткоистории</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#7`} className={"ContentPage_Section_Poem_Link"}>как зовут что употреблял</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#8`} className={"ContentPage_Section_Poem_Link"}>полутрупы</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#9`} className={"ContentPage_Section_Poem_Link"}>пора спать ложиться</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#10`} className={"ContentPage_Section_Poem_Link"}>существо заданных вопросов</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#11`} className={"ContentPage_Section_Poem_Link"}>добрые люди жрут злых</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[1].ref}#12`} className={"ContentPage_Section_Poem_Link"}>не скучай</a></div>
            </div>
            <div className={"ContentPage_SingleSection"}>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[2].ref}`} className={"ContentPage_Section_Poem_Link"}>подвешенный прыжок</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[3].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[3].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[3].ref}#1`} className={"ContentPage_Section_Poem_Link"}>дкиуб</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[3].ref}#2`} className={"ContentPage_Section_Poem_Link"}>мобн</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[3].ref}#3`} className={"ContentPage_Section_Poem_Link"}>а были вот золотые времена</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[4].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[4].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#1`} className={"ContentPage_Section_Poem_Link"}полицейский иегова></a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#2`} className={"ContentPage_Section_Poem_Link"}>слежу за тобой</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#3`} className={"ContentPage_Section_Poem_Link"}>двадцать три</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#4`} className={"ContentPage_Section_Poem_Link"}>карамультук ггкп</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#5`} className={"ContentPage_Section_Poem_Link"}>слишком громкий мертвец</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#6`} className={"ContentPage_Section_Poem_Link"}>бластер</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#7`} className={"ContentPage_Section_Poem_Link"}>смерть или што</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#8`} className={"ContentPage_Section_Poem_Link"}>сурхоб</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#9`} className={"ContentPage_Section_Poem_Link"}>стерега</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[4].ref}#10`} className={"ContentPage_Section_Poem_Link"}>жизнь это вещь</a></div>
            </div>
            <div className={"ContentPage_SingleSection"}>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[5].ref}`} className={"ContentPage_Section_Poem_Link"}>низ неба</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[6].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[6].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#1`} className={"ContentPage_Section_Poem_Link"}>yalibliutebya</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#2`} className={"ContentPage_Section_Poem_Link"}>sadden7</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#3`} className={"ContentPage_Section_Poem_Link"}>molloko</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#4`} className={"ContentPage_Section_Poem_Link"}>anntidrum</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#5`} className={"ContentPage_Section_Poem_Link"}>helllord</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#6`} className={"ContentPage_Section_Poem_Link"}>burner 9spoiled0</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#7`} className={"ContentPage_Section_Poem_Link"}>spbbprivet</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#8`} className={"ContentPage_Section_Poem_Link"}>tone</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#9`} className={"ContentPage_Section_Poem_Link"}>starlings60k</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#10`} className={"ContentPage_Section_Poem_Link"}>suddenday skull</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[6].ref}#11`} className={"ContentPage_Section_Poem_Link"}>ahha whitey</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[7].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[7].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#1`} className={"ContentPage_Section_Poem_Link"}>vollokna</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#2`} className={"ContentPage_Section_Poem_Link"}>buddta</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#3`} className={"ContentPage_Section_Poem_Link"}>beggal</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#4`} className={"ContentPage_Section_Poem_Link"}>workbro</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#5`} className={"ContentPage_Section_Poem_Link"}>uznull</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#6`} className={"ContentPage_Section_Poem_Link"}>pogonny</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#7`} className={"ContentPage_Section_Poem_Link"}>merttva</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#8`} className={"ContentPage_Section_Poem_Link"}>tishomertv</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[7].ref}#9`} className={"ContentPage_Section_Poem_Link"}>nuvvse</a></div>
            </div>
            <div className={"ContentPage_Section"}>
                <h2 className={"ContentPage_Section_Name"}><a href={`${albums[8].ref}`} className={"ContentPage_Section_Poem_Link"}>{albums[8].title}</a></h2>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#1`} className={"ContentPage_Section_Poem_Link"}>vnutri sebbya</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#2`} className={"ContentPage_Section_Poem_Link"}>preddostorozhnost</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#3`} className={"ContentPage_Section_Poem_Link"}>nevvsegda</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#4`} className={"ContentPage_Section_Poem_Link"}>mozhe dopommogty</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#5`} className={"ContentPage_Section_Poem_Link"}>izbezhat raspadda</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#6`} className={"ContentPage_Section_Poem_Link"}>pottomu</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#7`} className={"ContentPage_Section_Poem_Link"}>naddvoih</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#8`} className={"ContentPage_Section_Poem_Link"}>bbegi</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#9`} className={"ContentPage_Section_Poem_Link"}>yaknayshshvidshe</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#10`} className={"ContentPage_Section_Poem_Link"}>otsyudda</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#11`} className={"ContentPage_Section_Poem_Link"}>essli</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#12`} className={"ContentPage_Section_Poem_Link"}>smozhzhesh</a></div>
                <div className={"ContentPage_Section_Poem"}><a href={`${albums[8].ref}#13`} className={"ContentPage_Section_Poem_Link"}>usppet</a></div>
            </div>
            <div id={"ContentPage_Footer"}></div>
        </div>
    );
}

export default ContentPage;
