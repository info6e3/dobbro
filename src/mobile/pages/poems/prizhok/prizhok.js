import React from 'react';

import Poems_Footer from "../common/Poems_Footer";
import Poems_Links from "../common/Poems_Links";
import PoemsHeader from "../common/PoemsHeader";

function Poems_Prizhok() {
    const currentAlbum = 2;

    return (
        <div className="Mobile_PoemsPage">
            <PoemsHeader/>
            <div className={"Mobile_PoemsContainer"}>
                <div id={"1"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>подвешенный прыжок</h3>
                    <div className={"Mobile_PoemText"}>Мост из одной реальности в другую<br/>лента гниющего мяса<br/>обмочившихся малолеток со странгуляционной полосой<br/>на шее<br/>которых никто не понял<br/>которых недооценили<br/>смертельно обидели<br/>лишили мнимого будущего благополучия<br/>ты теперь будешь мёртвый гуф<br/>великий мастер однократных и бесповоротных<br/>перевоплощений в труп<br/>и у меня для тебя плохие новости<br/>твой вроде как красивый подвешенный прыжок скис<br/>и ты просто мерзкий кусок памяти<br/>пахнущий личным поражением<br/>и мне почти похуй<br/>да только эту дыру ничем не заделать<br/>я обещал не писать о тебе песен<br/>я обещал не писать вообще никогда ничего если ты<br/>выпилишься<br/>и вот из украденного usb-шнуром последнего воздуха<br/>не тебе мои крики ни о чём<br/>не тебе моё чувство сдохнуть<br/>не тебе свет ламп который ты любил<br/>вообще ничего тебе ёбаное мясо вечного возвращения</div>
                </div>
            </div>
        </div>
    );
}

export default Poems_Prizhok;
