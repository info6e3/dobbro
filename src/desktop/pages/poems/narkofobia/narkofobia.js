import React from 'react';

import Poems_Header from "../common/Poems_Header";
import Poems_Links from "../common/Poems_Links";

import Image_1 from './images/1.png';
import Image_2 from './images/2.png';
import Image_3 from './images/3.png';
import Image_4 from './images/4.png';
import Image_5 from './images/5.png';

import PlayButton from '../common/PlayButton/PLayButton'

import audio1 from '../../../../music/narkofobia/dobbro - наркофобія - 01 vnutri sebbya.mp3';
import audio2 from '../../../../music/narkofobia/dobbro - наркофобія - 02 preddostorozhnost.mp3';
import audio3 from '../../../../music/narkofobia/dobbro - наркофобія - 03 nevvsegda.mp3';
import audio4 from '../../../../music/narkofobia/dobbro - наркофобія - 04 mozhe dopommogty.mp3';
import audio5 from '../../../../music/narkofobia/dobbro - наркофобія - 05 izbezhat raspadda.mp3';
import audio6 from '../../../../music/narkofobia/dobbro - наркофобія - 06 naddvoih.mp3';
import audio7 from '../../../../music/narkofobia/dobbro - наркофобія - 07 pottomu.mp3';
import audio8 from '../../../../music/narkofobia/dobbro - наркофобія - 08 bbegi.mp3';
import audio9 from '../../../../music/narkofobia/dobbro - наркофобія - 09 yaknayshshvidshe.mp3';
import audio10 from '../../../../music/narkofobia/dobbro - наркофобія - 10 otsyudda.mp3';
import audio11 from '../../../../music/narkofobia/dobbro - наркофобія - 11 essli.mp3';
import audio12 from '../../../../music/narkofobia/dobbro - наркофобія - 12 smozhzhesh.mp3';
import audio13 from '../../../../music/narkofobia/dobbro - наркофобія - 13 usppet.mp3';


function Poems_Narkofobia() {
    const currentAlbum = 8;

    return (
        <div className="PoemsPage">
            <Poems_Header album={currentAlbum}/>
            <Poems_Links album={currentAlbum}/>
            <div className={"PoemsPage_BackgroundImagesContainer"}>
                <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Narkofobia_Image_2"} src={Image_2}/>
                <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Narkofobia_Image_4"} src={Image_4}/>
            </div>
            <div className={"PoemsContainer"}>
                <div id={"1"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>vnutri sebbya<PlayButton music={audio1}/></h3>
                    <div className={"PoemText"}>работаю простым разночинцем в компании неприятных людей<br/>скованных стремлением выжить в холодных нагромождениях<br/>старых и новых построек<br/>навыки мои позволяют обменивать время на набор<br/>продуктовый<br/>на место в одном из строений<br/>на отсутствие воя страха перед будущим в голове<br/>но иногда он становится совсем нестерпимым и никакая<br/>самбука не спасает ни грамма<br/>тогда приходится прибегать к неизвестного происхождения<br/>из холодных комьев земли<br/>вырастает фигура невнятной речи<br/>самое главное навсегда знать свой адрес и носить с собой<br/>такую тонкую маленькую книгу<br/>тогда может появиться шанс невредимым уйти<br/>но лучше всего носить с собой сорок тысяч слов настолько<br/>прекрасных<br/>чтобы каждый человек услышавший их<br/>уже никогда не стал бы бить никакого другого человека<br/>рукой ногой палкой из резины иными подручными предметами<br/>молотком по конституции которая срослась с головой<br/>скармливать зверям на круглых площадках под народное<br/>ликование<br/>обливать водой и искрить полевым телефоном в части<br/>тела твоего даждь нам днесь и остави нам долги перед<br/>обществом наши<br/>якоже и мы оставляем должников наших в железных клетках<br/>выменивая ради звучных званий<br/>наградного оружия<br/>похвальных грамот сотруднику внутренних органов<br/>за повреждение внутренних органов неблагонадёжных граждан<br/>которые настолько беспомощны в муравьином водовороте<br/>жизни<br/>что подобны мотылькам летящим на пламя<br/>нарушения биохимических процессов собственной оболочки<br/>то есть летящим на пламя внутри себя</div>
                </div>
                <div id={"2"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>preddostorozhnost<PlayButton music={audio2}/></h3>

                    <div className={"PoemText"}>23 января в 22:33 по московскому времени<br/>я александр дмитриевич дванов возвращался с работы<br/>и между магазинами вечная весна и всё по 46 рублей<br/>остановился чтобы завязать на правом ботинке шнурок<br/>концы которого разметались смертельно уставшими от заклинателей змеями<br/>(и выбросить из рук незаметно в сторону свёрток замотанный в синюю изоленту)<br/>в этот момент я заметил как впереди пара ног в штанах с красными лампасами<br/>и пара ног в джинсах разогнались<br/>чтобы при помощи коленей и щиколоток опрокинуть меня на землю<br/>в процессе падения я увидел<br/>беспощадный наждак асфальта<br/>фортификации из ледяной грязи которая возводится обувью прохожих<br/>окурок с отпечатком красных губ жемчужину замёрзшего плевка<br/>казённый блеск кожи одинаковых ботинок сбивших меня<br/>что выше пояса у ног ничего нет и не было никогда<br/>просто ровная поверхность укрытая серо-синей тканью<br/>монотонную мозаику спального строения<br/>оранжевое световое загрязнение неба российского зимнего города<br/>холод которого вползает по ночам в головы неуспевших впасть в бессознание граждан<br/>и заставляет тревожно вглядываться сквозь шторные щели в<br/>искры бенгальских огней из глазниц моего черепа<br/>столкнувшегося с асфальтом<br/>после этого я хотел было встать и идти<br/>но одни ноги установили на меня щиколотку в ботинке<br/>другие нанесли тычок где-то между рёбер<br/>поэтому я повернул голову<br/>наблюдал за силуэтами в окнах<br/>казалось они пытаются из фигур своих составить предостережение мне<br/>тщился разглядеть краями глаз будут ли помощники у этих ног<br/>и как долго я пробуду среди всей этой земной любви<br/>подоспели акробатически прыгающие гигантские руки <br/>достали из штанов с алыми лампасами багровое удостоверение <br/>из ног в джинсах что-то завёрнутое в чёрную изоленту<br/>после этого руки замахали ноги затопали<br/>и поволокли меня в автомобиль специальный для перевозки диких зверей<br/>так как на окнах были стальные решётки<br/>значит это конечности большого зоопарка или охотничьего хозяйства<br/>а я представитель дикого вида имеющий промысловую ценность.</div>
                </div>
                <img className={"PoemsPage_Images"} src={Image_1}/>
                <div id={"3"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>nevvsegda<PlayButton music={audio3}/></h3>

                    <div className={"PoemText"}>всегда в сознание приходил я с открытыми глазами<br/>каждый раз неплохо в нём обживался<br/>вот мне надо сделать<br/>вот мне кажется что я чего-то хочу<br/>вот всякие обстоятельства<br/>но здесь глаз мой был один а второй вроде полузакрыт<br/>или я его повесившись выколол<br/>а какие-то ноги или летающие вороны или одновременно и то и другое<br/>(так дети рисуют всех птиц простыми галками)<br/>ели глаз мой денежный эквивалент глаза<br/>так или иначе очнулся будто бы дома<br/>за 5 минут до будильника который на работу зовёт<br/>в зеркале себя разглядеть пытался за собственным лицом<br/>страх объяснений перед начальницей об опоздании шпоры погружал в мозг<br/>под землёй от нищих духом глаза отводил в сторону ветки зелёной вознёсся<br/>на площадь перехожу улицу ноги бьют за обиду существования<br/>бога распластанного подо мной<br/>сферы смеси земли и воды вырванные из поверхности ударами<br/>целуют щиколотки скатываются в обувь<br/>ветер прямо в лицо горькие фразы бросает<br/>об эксплуатирующей природе любого частного предпринимателя<br/>улица длинная и прямая тромбы повозок тягучи и медленны<br/>всё сгоревшее топливо из повозок вырвавшись<br/>набрасывается на альвеолы снующих пешеходов<br/>промахнувшись оседает на скулах строений прихотливым узором грязи<br/>на работе меня ждут но как заблудшего нерадивого сына<br/>которого без любви зачали а растили и вовсе случайные люди<br/>дверь входная из разочарованного железа скрипит устало<br/>вдруг меня охранник на входе не пустил пропуск мой не сработал<br/>на месте моей компании написано ооо берегиня комбинат швейный<br/>а трубку никто из моих коллег не берёт<br/>неужели все переехали а мне не сказали куда и что мне делать<br/>может всё это сон такой длинный<br/>глупая шутка битого бога отзвуки эха его красного смеха<br/>делать нечего на девятом валу своей растерянности<br/>отправлюсь к моей терпеливой матери<br/>ибо на ней ответственность за моё пребывание здесь<br/>да и покончить с собой я не могу<br/>так как дети не должны умирать раньше собственных родителей.</div>
                </div>
                <div id={"4"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>mozhe dopommogty<PlayButton music={audio4}/></h3>

                    <div className={"PoemText"}>ти зітхаєш і з віддихом розпускаються в кімнаті тьмяні квіти неіснуючих думок<br/>вони мерехтливою зграєю рушають по вигинам твоїх звивин<br/>боляче лунають у склепінні черепа<br/>з вікон очей неможливо роздивитися день це чи ніч<br/>зовні на підлозі розкидані речі<br/>і ти думаєш що світ лишень посмішка котра видряпана на стовбурі шибениці<br/>і коли вже стає зрозумілою сутність речей<br/>вони перевтілюються на чорні літери<br/>поєднані в слова реабілітаційний центр<br/>вони намагалися мене запроторити до рехабу<br/>але казав ні ні ні<br/>нізвідки не чекаючи допомоги<br/>назавжди обважнілим у хащах власних думок<br/>намагаєшся згадати чому тут опинився<br/>фіранки повік здіймаються<br/>знову видно кімнату<br/>в ній ліжка в ній люди<br/>в ній скоро треба вставати<br/>в ній скоро всі уголос читатимуть молитви<br/>Ми визнали, що були безсилі перед суспільною думкою,<br/>що життя наше стало некерованим.<br/>Повірили, що Сила, могутніша ніж наша власна,<br/>може повернути нам здоровий розум.<br/>Прийняли рішення доручити нашу волю і наше життя<br/>під опіку незнайомих керованих невідомо чим людей<br/>сумлінно та безстрашно огледіли самих себе зсередини.<br/>були змушені визнати перед суспільством, собою<br/>та іншою людиною достеменну природу наших помилок.<br/>Були повністю готові до того, щоб суспільство зробило вигляд<br/>ніби воно усунуло всі наші вади.<br/>Покірно просили його усунути наші недоліки.<br/>Склали список усіх людей, кому ми заподіяли шкоду,<br/>і стали готовими відшкодувати всім їм завдані збитки.<br/>Особисто відшкодовували заподіяні цим людям збитки, де тільки можливо,<br/>крім тих випадків, коли це могло зашкодити їм або кому-небудь іншому.<br/>Продовжували оглядати себе зсередини,<br/>і коли ми не відповідали суспільній думці, відразу визнавали це.<br/>Шукали шляхом молитви і медитації покращення<br/>нашого свідомого контакту зі суспільством, як ми розуміли Його,<br/>молячись лише про знання Його волі щодо нас і сили виконати її.<br/>Досягнувши схвалення суспільством, до якого привели ці кроки,<br/>ми намагались нести це послання і застосовувати ці принципи у всіх наших справах.</div>
                </div>
                <div id={"5"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>izbezhat raspadda<PlayButton music={audio5}/></h3>

                    <div className={"PoemText"}>языком жестов<br/>руки из зоопарковой машины сообщили имя моё и отца моего<br/>туловищу с головой и погонами в стеклянной будке увешанной трубками телефонными<br/>ноги в джинсах пинками загнали в подсобное помещение<br/>и стали на теле моём насаждать вспышки из колючих цветов сорной травы<br/>казалось я большой мешок с разными вещами<br/>и вот-вот корни ударов прорастут глубоко настолько<br/>чтобы из мешка на пол просыпались вещи<br/>и я думал что мир это всего лишь огород<br/>в котором ноги решительных и сильных<br/>вытаптывают ресурсы из подобных мне<br/>руки пропалывают побеги молодых мыслей<br/>что нет никакой участи кроме как быть ногами<br/>или избитым кровавым мясом на горизонтальной поверхности<br/>что свет это ровно то же самое что и темнота<br/>а значит любая вспышка это схлопывание<br/>сворачивается кровь кошкой в клубок<br/>крики тускнеют в стенах<br/>солёная жидкость затапливает всё<br/>и сделалось безмолвие в голове как бы на полчаса<br/>только приглушённые голоса мешая мат с канцеляритом<br/>сквозь толщу вод пели мне песнь<br/>«Ты, Александр Дмитриевич Дванов,<br/>поступая со своей жизнью безрассудно и без выгоды<br/>потрапыв в органы внутренние<br/>при помощи побоев ферментируешься в желудке нашей родины<br/>а после торжественно роздиляешься<br/>на верность Росийськои Фэдэрацийи и йийи народу!<br/><br/>Клянёмся при осуществлении раздельных разделочных полномочий<br/>сотрудника органов внутренних дел:<br/>уважать и защищать права и свободы человека и гражданина<br/>свято соблюдать Российской Федерации и федеральные законы;<br/>быть мужественными, честными и бдительными,<br/>не щадить своих сил в борьбе с преступностью помыслов и деяний;<br/>достойно исполнять наш служебный долг и разложенные на нас обязанности<br/>по обеспечению безопасности, законности и правопорядка,<br/>хранить державную и служебную тайну. Служи России, служи Закону!»<br/>в глаза вплывали очертания огромных ртов<br/>которые со стен и потолка шевелили губами извилины в голове моей<br/>а языки начали слизывать кровь с тела<br/>с тех пор я не приходил в сознание и никогда не приду<br/>ни поздно ни рано<br/>я не хочу домой ни поздно ни рано<br/>я не приду домой ни поздно ни рано.</div>
                </div>
                <div id={"6"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>naddvoih<PlayButton music={audio6}/></h3>

                    <div className={"PoemText"}>в телефонных трубках кровеносных сосудов воют маленькие волки<br/>в ритмичной остроте их воя<br/>изрезанные интонации голосов<br/>пытаются наощупь друг друга найти<br/>сквозь безразличие пространства<br/>сквозь холодный смог разбавленный воздухом<br/>сквозь неумолимую твёрдость стен сомкнувшихся повсюду<br/>точно так же и ты меня доставая из небытия<br/>превращая из животного в человека<br/>втолковывая непонятные буквы<br/>исполняла свой радостный долг не зная к чему это приведёт<br/>будущего боялась ведь в каждой истории заложен конфликт<br/>в каждом самолёте усталость металла<br/>предчувствие беды страшнее развязки<br/>в голос мой отчаяние входит оккупантом<br/>потому что состояние дел которое предстоит описать<br/>могло разве что в длинных кошмарах прийти<br/>где несуществующие стены<br/>в бесконечном наступлении<br/>сминая тело твоё без прикосновения проплывают мимо<br/>но монолитность стен дала брешь<br/>и возникли в камере моей руки вкатившие голову лысеющую<br/>черты лица неуловимо похожими казались на всех виденных ранее<br/>рука в форме утром 24 января протянула к голове телефон<br/>раздался из него голос твой страха полон<br/>но голова лысая в глаза глядя мною говорить начала<br/>что местонахождение моё милиция и неприятности<br/>что нужно приехать скорее поскольку ты моя мать<br/>на тебе ответственность за моё существование<br/>и что нет кроме этой ответственности и страха бесконечного одиночества <br/>ничего у человека<br/>хотя что может знать об этом лысоватая голова органов внутренних.</div>
                </div>
                <div id={"7"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>pottomu<PlayButton music={audio7}/></h3>

                    <div className={"PoemText"}>навкруги фортець чатує темрява вона випльовує та всотує<br/>розмиті фігури колишніх людей без жодної системи неначе<br/>букви кримінальних кодексів збожеволіли і тягнуть до своїх<br/>концентрично пекельних кіл як щонайбільше бранців але<br/>маючи витончений смак з‘їдають не всіх<br/> <br/>мамині сині очі топлять мене в сльозах <br/>хтось їй розповів що я захворів а ліки знаходяться<br/>у суворому режимі дня<br/>у щоденній молитві <br/>у м‘якій в‘язниці рехабу<br/> <br/>пробудження темним ранком зі смаком молодшого шкільного віку<br/>люди якісь силоміць з речами на вихід з домівки тягнуть <br/> <br/>від звички вірити людям стороннім мати плаче <br/>від думок нав‘язаних суспільством мати плаче <br/>від нескіченної хрестової ходи життя мати плаче <br/> <br/>ми звикли винуватити в бідах своїх<br/>інших<br/>бога <br/>капіталізм <br/> <br/>але якщо пережити всі біди<br/>якщо спочатку бути жертвою а потім катом <br/>якщо знайти спосіб розірвати цей ланцюг тортур <br/> <br/>виявиться що <br/> <br/>бранець цибулю власної голови руками стискає<br/>бранець не витирає сльози<br/>бранець очі карі щулить розгублено<br/>бранець сьогодні після пробудження гончаків<br/>має їм когось видати <br/>бранець сьогодні видасть мене<br/> <br/>веселим голосом близько другої дня телефонною розмовою виманить мене надвір <br/>для того щоб взяти в мене дві поштові марки <br/>звичка передавати такі речі привітальним стисканням рук мене не врятує <br/>троє середнього віку людей міцної статури з різних сторін виникнуть<br/>той що позаду заламає мені руки і одягне наручники <br/> <br/>пізніше виявиться що ніякого бранця й не було <br/>і що не видав він якнайменше ще трьох своїх знайомих<br/>серед яких не пощастило опинитися мені <br/> <br/>просто я виник в незнайомому районі міста <br/>зустрів патруль міліції та повідомив<br/>що маю при собі папір на який зарубіжні хіміки <br/>упустили отруйні нелегальні краплі <br/>запліднюючи цей папір усим якнайзлішим<br/>а тому маю бути покараним<br/>за законом людським та божим.</div>
                </div>
                <img className={"PoemsPage_Images"} src={Image_3}/>
                <div id={"8"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>bbegi<PlayButton music={audio8}/></h3>

                    <div className={"PoemText"}>любовь тело моё измождённое в этой реальности за ребро крюком держит<br/>не даёт уйти и провалиться в самозабвение вечности<br/>только никак пойму любовь ли это к отечеству<br/>из пасти которого сочится кровь граждан<br/>или любовь к матери моей<br/>взгляд которой столь робок и нежен<br/>что мысли мои приобретают невыразимость рассвета<br/>сердце толкается в клетке так сильно<br/>что ритм шагов сбит и пикирует вниз<br/>мы идём сказать матери<br/>здравствуй мама в этом холодном мире столь одинок растерян и отчаян я<br/>будто где-то в толще российских тюрем сокрыта душа злою волею<br/>милицейского государства и презрительно беспощадными смешками украдкой<br/>общество как в школе ставит мне подножки<br/>но не от злости а просто восхититься красотой падения<br/>череда локомоций захлёбывается<br/>шаг оборачивается неловкой судорогой<br/>и тела наши уже не совсем нам принадлежат<br/>мы бесплатные подённые бабочки деревообрабатывающей и швейной отраслей<br/>сквозь доски нашей черепной коробки странные сны<br/>жуками-древоточцами в голове зажили<br/>щупальцами из чёрной изоленты меня в кровати удерживали<br/>и я работу проспал да так что вместо родной упряжки<br/>там швейная берегиня оказалась<br/>и от этого превращения намерен был увидеть тебя <br/>просто чтобы убедиться что весь мир в порядке<br/>на своих местах что есть люди которых я знаю<br/>и они не отражения пикселей <br/>и не чьи-то длинные руки<br/>мама чьи-то руки долгие держат меня выученной беспомощностью за горло<br/>не отпустят никак звони в милицию<br/>вдруг меня похитили и я не могу никуда попасть<br/>вдруг в каждый звук моего голоса секретный тон подмешан<br/>который все слова мои обессмысливает на какой-то глупый манер<br/>иностранца кривляющегося на выдуманном языке<br/>выдающем во мне убийцу жестокого сердцем<br/>и каждый это может понять<br/>и каждый это куда надо принесёт<br/>а там уже во всём разберутся<br/>тебе позвонят и скажут ваш сын прекрасно болен<br/>ибо хотел запретного в теле нашем здоровом он клетка раковая<br/>мы все крайне обеспокоены и хотим его озолить<br/>и не надо посыпать голову пеплом гражданка<br/>лучше следили бы как следует за воспитанием<br/>отдавали на спорт он мог стать профессиональным человеком<br/>умеющим разные штуки востребованные<br/>по взмаху терпеливых дрессировщиков исполнять<br/>а теперь сын ваш тельцом на алтарь закона со спутанными копытами брошен<br/>и невидимая кровь времени будет сочиться из него все эти наалтарные годы<br/>пока не поймём мы степень его исправленности и благонадёжности<br/>которая согласно законам и нормативам российской федерации должна быть безграничной.</div>
                </div>
                <div id={"9"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>yaknayshshvidshe<PlayButton music={audio9}/></h3>

                    <div className={"PoemText"}>цареграді на ринку<br/>та п'є Байда горілочку:<br/>ой, п'є Байда та не день, не два,<br/>Не одну нічку та й не годину<br/>Ой, п'є Байда та й кивається<br/> <br/>зацьковані псами<br/>закалічені тортурами <br/>заколисані казками про власну небезпечність<br/>вмирають<br/>у землях гумових кийків<br/>у землях нескінченного братовбивства <br/>у землях інших<br/>вмирають <br/>на підлозі камер попереднього затримання від тілесних пошкоджень <br/>на підлозі власних кімнат від збігу обставин у судинах міжнародного чорного ринку<br/>на підлозі палат лікарень від власної необачливої  самотності<br/>вмирають<br/>через страх викликати собі швидку<br/>через брак інформації про споживання<br/>через відчайдушну спробу хоча б десь знайти спокій <br/> <br/>померлі колишні повітряними кулями відбиваються од стін палат і камер<br/>напівпрозорі їх вуста шепочуть <br/>повз мене буття земне моє<br/>крізь мене холодна криця<br/>наді мною прозоре ніщо<br/>мука повивальна нового людства відбувається мною <br/>мука вічна всілякого гнаного іншого відбувається мною<br/>мука лишається братам і сестрам моїм <br/>розділеним розкиданим розірваним <br/>і ми ні в чому не винні<br/>крім вад і недоліків наших скалічених тіл<br/>крім ядучої розлитої всюди ненависті<br/>крім злочинної байдужості до життя<br/> <br/>нічого не маємо крім нас самих<br/>ніхто на наш захист не підніметься крім нас самих<br/>ніколи не було найкращого часу боронити себе ніж зараз<br/> <br/>ой, як стрілив – царя вцілив,<br/>А царицю – в потилицю,<br/>А його доньку – в головоньку.<br/>Ото ж тобі, царю, за байдину кару.</div>
                </div>
                <div id={"10"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>otsyudda<PlayButton music={audio10}/></h3>

                    <div className={"PoemText"}>если звонит незнакомый номер - это наверняка террактная бомба обрела сознание<br/>и хочет запутать следы чтобы ты перезвонив её активировала<br/>на себя подозрения органов навлекая<br/>если родишь ребёнка в лучшем случае выйдет ни то ни сё<br/>офисная отбраковка<br/>жил и умер<br/>в худшем же родится чудище<br/>лунными ночами выслеживая женщин осенять молотком по голове в парках станет<br/>чтобы позже глодать лицо и клясться с плачем в вечной любви<br/>если ты выйдешь замуж<br/>то благоверный после долгих лет совместного брака глаза вдруг прятать начнёт<br/>и отвечать односложно коротко а вскоре сознается<br/>что всегда хотел больше быть девочкой<br/>деньги копит на операцию по смене пола<br/>покажет свои сбережения<br/>внушительную пачку обёрток от конфет золотой степ<br/>каждый раз когда телефон звонит<br/>тысячи бед пытаются протиснуться в игольное ушко микрофона и шею обвить<br/>они рвут друг друга когтями отталкивают<br/>но всегда побеждает только та<br/>слюна которой ядовитей всего<br/>только та у которой опустошительнее всего горе на изготовку<br/>так и сейчас звонит сына голос<br/>сначала говорит что заедет проведать<br/>а потом через пять минут что не придёт<br/>потому что попал в плохие руки и нужно искать много денег<br/>что скоро скажет время и адрес<br/>чтобы обменять его а голос почти спокойный<br/>так бегает курица с отрубленной головой<br/>почему нельзя было не высовываться<br/>не переходить никому дорогу<br/>почему нельзя быть осмотрительней<br/>почему себя нельзя беречь хотя бы во имя родных<br/>почему ты оставил меня<br/>а потом приходит и говорит будто звонил мне только один раз<br/>и смотрит искоса недоверчиво<br/>о звонках своих слышит впервые<br/>из всех бед его реальна только одна - загадочное исчезновение места работы.</div>
                </div>
                <div id={"11"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>essli<PlayButton music={audio11}/></h3>

                    <div className={"PoemText"}>моего части за эти дни траволаторная действительность<br/>увеличила до размеров невыносимых<br/>хоть я из пузырьков не пил не откусывал от предписанного<br/>выйти из комнаты не могу<br/>слишком величие моё для мира тягостно<br/>руки добрые руки злые руки вне оценочных категорий<br/>подсовывают мне сквозь узкое окошко постылое неизменное завтра<br/>в комнате я не один нас как минимум трое<br/>по углам какие-то смутные тени сутулятся<br/>делят хлеб разломанный<br/>продукты длительного срока хранения без заводской тары<br/>иные не запрещённые категории продовольствия шепчут мне послания<br/>звук которых от моих перепонок не отражается<br/>но с вместе пищей части смысла на меня обрывками цветной мишуры сна ниспадают<br/>из этих обрывков неловко пытаюсь картину будущего склеить<br/>но налетают ветры злые и по глади будущего бежит рябь<br/>то вижу на воле себя в желтой шапке<br/>то везут меня в вагонах дополнительных<br/>потом из дерева я выпиливаю бруски человекообразные <br/>а дальше тысячи таких же как и я<br/>то в приступе галлюцинаторного бреда прихожу в участок милицейский<br/>и подробнейше описываю несовершенное преступление<br/>нерадивому уставшему следователю не сумев его от собственной матери отличить<br/>может потому что нет никакой разницы<br/>все эти горы-решётки школы-лагеря дочки-матери<br/>просто изощренный сачок которым меня поймали<br/>или жизнь продета сквозь меня булавкой любопытного энтомолога<br/>просыпаюсь стены давятся мною<br/>части тела мои выплёвывают<br/>судорожно сквозняками вдыхают<br/>кашляют звуками российского гимна<br/>уже и не остаётся никого кроме меня<br/>и тянущегося ожидания вердикта уполномоченных людей<br/>которые никогда меня не знали и судьбу мою решат<br/>в соответствии с существующими предписаниями<br/>потому что я несвободен с рождения и до смерти<br/>в клетках зданий в клетках тела в винтовых лестницах днк<br/>в бесконечных текстах составляющих остов русской культуры<br/>в сшитом собрании постоянно устаревающих правил жизни общества<br/>спрятаны маленькие хитрые смеющиеся надо мною буквы<br/>выделанные рукой самосборного бога столь тонко<br/>что смысл их мне никогда не откроется<br/>я сам себе и узник и тюрьма<br/>я пленник зубастого лязга капканов фонем<br/>гораздо больше чем любого из помещений<br/>и будет там только плач и скрежет зубовный.</div>
                </div>
                <div id={"12"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>smozhzhesh<PlayButton music={audio12}/></h3>

                    <div className={"PoemText"}>Невский районный суд Санкт-петербурга<br/>в составе председательствующего судьи Четвериковой И.А.<br/>рассмотрев в открытом судебном заседании материалы уголовного дела в отношении<br/>Дванова Александра Дмитриевича имеющего образование,<br/>не женатого, разночинца ООО «БЕРЕГИНЯ»,<br/>военнообязанного, ранее не судимого,<br/>обвиняемого в совершении преступления,<br/>предусмотренного ч.2 ст.228 УК РФ, установил:<br/>Подсудимый Дванов А. Д. совершил покушение<br/>на незаконное приобретение наркотических средств в крупном размере,<br/>при следующих обстоятельствах:<br/>В начале года Дванов А.Д., имея преступный умысел<br/>на незаконное приобретение без цели сбыта<br/>наркотических средств в крупном размере,<br/>используя свой телефон для выхода в сеть «Интернет»,<br/>приискал контактные данные интернет - магазина в мессенджере «Теlеgrаm»<br/>занимающегося распространением наркотических средств<br/>бесконтактным способом через тайники-закладки.<br/>После чего, Дванов А. Д.,<br/>путем обмена сообщениями в мессенджере «Теlеgrаm»,<br/>договорился с оператором вышеуказанного магазина,<br/>личность которого в ходе предварительного следствия не установлена,<br/>о приобретении в вышеуказанном магазине наркотических средств.<br/>После чего Дванов А. Д., продолжая свои преступные действия,<br/>прибыл по адресу с целью незаконного приобретения наркотического средства,<br/>где нашел и стал хранить при себе полимерный пакетик<br/>с веществом растительного происхождения массой не менее 10,29 грамма.<br/>Однако, Дванов А.Д. свой преступный умысел,<br/>направленный на незаконное приобретение без цели сбыта<br/>наркотических средств в крупном размере,<br/>не смог довести до конца по независящим от него обстоятельствам,<br/>так как частями тел Российской Федерации был задержан,<br/>и в ходе проведения личного досмотра <br/>вышеуказанное вещество массой 10,29 у него было изъято. <br/>следовало ли дванову а д лететь <br/>на судьбу свою в лице огненосных сотрудников наших <br/>по следам ли его мерзким нашла бы карающая длань наша <br/>это не важно <br/>следователь таких как он на улице по взгляду  бегающему определяет безошибочно <br/>С учетом всех обстоятельств дела в их совокупности,<br/>характера и степени общественной опасности совершенного им преступления,<br/>относящееся к категории тяжких преступлений,<br/>направленное против здоровья населения и общественной нравственности,<br/>суд считает необходимым назначить подсудимому Дванову А.Д.<br/>наказание в виде лишения свободы<br/>в условиях осуществления за ним контроля<br/>со стороны специализированного государственного органа в виде рта,<br/>осуществляющего исправление и перевоспитание осуждённых.<br/>На основании изложенного и руководствуясь УПК РФ, суд<br/>П Р И Г О В О Р И Л :<br/>Признать Дванова Александра Дмитриевича виновным в<br/>совершении преступления, предусмотренного ч.2 ст.228 УК РФ,<br/>и назначить ему наказание в виде 5,5 лет колонии в облаках по<br/>месту регистрации.</div>
                </div>
                <img className={"PoemsPage_Images"} src={Image_5}/>
                <div id={"13"} className={"Poem"}>
                    <h3 className={"PoemTitle"}>usppet<PlayButton music={audio13}/></h3>

                    <div className={"PoemText"}>я не помню как я родился на свет<br/>был там скрежет зубов или потоп кровяной<br/>это не важно<br/>о себе помню только несуразную чепуху<br/>на леске существования сухой рыбой раскачивался<br/>от судьбы ударов<br/>заведомо неработающих инструкций<br/><br/>пока двусмысленно на небо не попал<br/>тучи над моей страною источник ресурсов <br/>на отряды разбитые заключённые колонии небесной<br/>бросают в аппараты вырезанные из дождевых облаков куски<br/>получая рулоны слабо дрожащего полотна <br/>отряд закройщиков вычерчивает мелом по ткани<br/>эскизы будущих рукавов штанин фуражек<br/>экономя серость туч<br/>потом другие отряды наши выкройки сшивают нитью кровавой<br/>готовые изделия на облачных складах напитавшись хмарью<br/>выкатываются выпрыгивают выползают выбираются выскакивают<br/>в учреждения суды помещения улицы опорные пункты милиции <br/>и пока внизу идёт эта двойственная возня <br/>бумажный отрывной календарь заключили под стражу<br/>служебно буднично безразлично из меня вырывают дни<br/>жизни моей листки влекомые движением воздуха если кто-то встретит<br/>(неуклюжесть и тяжесть характера моего не позволит ветру их далеко разбросать)<br/>то прошу передать их по указанному адресу моей матери<br/>и сказать ей что я жду здесь на облаках от неё послания<br/>потому что только те двойники вниз вернутся<br/>кого помнят и кому напишут письмо.</div>
                </div>
            </div>
        </div>
    );
}

export default Poems_Narkofobia;
