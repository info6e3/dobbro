import React, { useState, useEffect } from 'react';
import Image_1 from './images/1.png';
import Image_2 from './images/2.png';
import Image_3 from './images/3.png';
import Image_4 from './images/4.png';
import Image_5 from './images/5.png';
import config from "../../../config";
import albums from "../../../albums";

import PoemsHeader from '../poems/common/PoemsHeader'

function ContentPage() {

    // <img className={"Mobile_ContentPage_Images"} id={"ContentPage_Image_2"} src={Image_2}/>
    // <img className={"Mobile_ContentPage_Images"} id={"ContentPage_Image_3"} src={Image_3}/>
    // <img className={"Mobile_ContentPage_Images"} id={"ContentPage_Image_4"} src={Image_4}/>
    // <img className={"Mobile_ContentPage_Images"} id={"ContentPage_Image_5"} src={Image_5}/>



    return (
        <div className="Mobile_ContentPage">
            <PoemsHeader/>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[0].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[0].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>клубки минут</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>лжеобычный спутник</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>бессмертны ровно до восьми пятнадцати</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>в пустоту на летней сцене</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>подмостки цирковой ямы</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>здания автомашины животные деревья</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>фагоциты в бетонном позвоночнике проспекта</a></div>
                <div className={"Mobile_ContentPage_Section_ReadRightText"}>избегай</div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>по адским кругам мчат</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>стылый воздух искрится</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[0].ref}#10`} className={"Mobile_ContentPage_Section_Poem_Link"}>с 09.10.2011 года является запрещённым к использованию</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[1].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[1].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>как минимум двое</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>привет поехавшим</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>сардиния</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>жёлтый подземный город</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>не умел</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>уткоистории</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>как зовут что употреблял</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>полутрупы</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>пора спать ложиться</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#10`} className={"Mobile_ContentPage_Section_Poem_Link"}>существо заданных вопросов</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#11`} className={"Mobile_ContentPage_Section_Poem_Link"}>добрые люди жрут злых</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[1].ref}#12`} className={"Mobile_ContentPage_Section_Poem_Link"}>не скучай</a></div>
            </div>
            <div className={"Mobile_ContentPage_SingleSection"}>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[2].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>подвешенный прыжок</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[3].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[3].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[3].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>дкиуб</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[3].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>мобн</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[3].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>а были вот золотые времена</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[4].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[4].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}полицейский иегова></a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>слежу за тобой</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>двадцать три</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>карамультук ггкп</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>слишком громкий мертвец</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>бластер</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>смерть или што</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>сурхоб</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>стерега</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[4].ref}#10`} className={"Mobile_ContentPage_Section_Poem_Link"}>жизнь это вещь</a></div>
            </div>
            <div className={"Mobile_ContentPage_SingleSection"}>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[5].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>низ неба</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[6].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[6].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>yalibliutebya</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>sadden7</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>molloko</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>anntidrum</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>helllord</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>burner 9spoiled0</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>spbbprivet</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>tone</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>starlings60k</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#10`} className={"Mobile_ContentPage_Section_Poem_Link"}>suddenday skull</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[6].ref}#11`} className={"Mobile_ContentPage_Section_Poem_Link"}>ahha whitey</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[7].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[7].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>vollokna</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>buddta</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>beggal</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>workbro</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>uznull</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>pogonny</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>merttva</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>tishomertv</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[7].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>nuvvse</a></div>
            </div>
            <div className={"Mobile_ContentPage_Section"}>
                <h2 className={"Mobile_ContentPage_Section_Name"}><a href={`${config.address}${albums[8].ref}`} className={"Mobile_ContentPage_Section_Poem_Link"}>{albums[8].title}</a></h2>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#1`} className={"Mobile_ContentPage_Section_Poem_Link"}>vnutri sebbya</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#2`} className={"Mobile_ContentPage_Section_Poem_Link"}>preddostorozhnost</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#3`} className={"Mobile_ContentPage_Section_Poem_Link"}>nevvsegda</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#4`} className={"Mobile_ContentPage_Section_Poem_Link"}>mozhe dopommogty</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#5`} className={"Mobile_ContentPage_Section_Poem_Link"}>izbezhat raspadda</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#6`} className={"Mobile_ContentPage_Section_Poem_Link"}>pottomu</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#7`} className={"Mobile_ContentPage_Section_Poem_Link"}>naddvoih</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#8`} className={"Mobile_ContentPage_Section_Poem_Link"}>bbegi</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#9`} className={"Mobile_ContentPage_Section_Poem_Link"}>yaknayshshvidshe</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#10`} className={"Mobile_ContentPage_Section_Poem_Link"}>otsyudda</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#11`} className={"Mobile_ContentPage_Section_Poem_Link"}>essli</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#12`} className={"Mobile_ContentPage_Section_Poem_Link"}>smozhzhesh</a></div>
                <div className={"Mobile_ContentPage_Section_Poem"}><a href={`${config.address}${albums[8].ref}#13`} className={"Mobile_ContentPage_Section_Poem_Link"}>usppet</a></div>
            </div>
        </div>
    );
}

export default ContentPage;
