import React from 'react';

import Poems_Footer from "../common/Poems_Footer";
import Poems_Links from "../common/Poems_Links";

import Image_1 from './images/1.png';
import Image_2 from './images/2.png';
import Image_3 from './images/3.png';
import Image_4 from './images/4.png';

import Video_1 from './videos/tishomertv.mp4';

import PlayButton from '../common/PlayButton/PLayButton'

import audio1 from '../../../../music/konecigri/dobbro - конец игры - 01 vollokna.mp3';
import audio2 from '../../../../music/konecigri/dobbro - конец игры - 02 buddta.mp3';
import audio3 from '../../../../music/konecigri/dobbro - конец игры - 03 beggal.mp3';
import audio4 from '../../../../music/konecigri/dobbro - конец игры - 04 workbro.mp3';
import audio5 from '../../../../music/konecigri/dobbro - конец игры - 05 uznull.mp3';
import audio6 from '../../../../music/konecigri/dobbro - конец игры - 06 pogonny.mp3';
import audio7 from '../../../../music/konecigri/dobbro - конец игры - 07 merttva.mp3';
import audio8 from '../../../../music/konecigri/dobbro - конец игры - 08 tishomertv.mp3';
import audio9 from '../../../../music/konecigri/dobbro - конец игры - 09 nuvvse.mp3';
import PoemsHeader from "../common/PoemsHeader";


function Poems_Konecigri() {
    const currentAlbum = 7;

    return (
        <div className="Mobile_PoemsPage">
            <PoemsHeader/>
            <div className={"Mobile_PoemsContainer"}>
                <div id={"1"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>vollokna<PlayButton music={audio1}/></h3>
                    <div className={"Mobile_PoemText"}>тошные ночки тривиальные подвиги<br/>дилетант с глазами битой собаки отбросил мыслесвёрла<br/>дрянным взмахом<br/>расшиби лоб о стену чтобы слова были лёгкими и точными<br/>неужели страх не изжил<br/>а иногда он вот на середине разговора замолкал и смотрел<br/>куда-то внутрь затолкал его кричу закрой глаза открой рот<br/>рот это жизнь это когда метаболируешь это когда ген<br/>радуется<br/>это когда оси времени наматывают твои волосы и одежду<br/>и ты вытягиваешься в длинную кричащую нить<br/>это они специально ехали старались везли карамель<br/>цитрусовые дольки юбок взмывают в танце<br/>амплитуда взмаха расширяется до бесконечности<br/>из окон сыпятся отрезанные ноги<br/>творчество симуляция безумия<br/>слова бетонные блоки падают на люделошадей ломая<br/>пластиковые каски благоразумий<br/>искрошились нижние зубы кто-то искупался в щёлочном<br/>озере твоей иссушённой мечты<br/>грязь и стоны троллейбуса нашептали мне как ты идёшь<br/>вперёд<br/>и каждый человек хитрый враг<br/>я жду нападения со всех сторон<br/>а нападение следует изнутри в тот самый момент<br/>когда я заливаю капсаицин в глотку случайному прохожему<br/>выйти из проспектов заломанных рук у меня из глаз<br/>животные выпадают<br/>смотри а когда-то здесь ели людей<br/>и в оглушительном ужасе действительности тонкобеззвучно<br/>кричал внутренний ребёнок<br/>люди не вслушивались цепенея в реальность и не такое<br/>прекрасно вмещалось<br/>дети самое мерзкое и вкусное<br/>эгоистично искривлённые рты ты посмотри мелкие дьяволы<br/>вылезли из деталей<br/>и колотят в первые этажи твоих глазниц<br/>берегись автомобиля чужих людей и потеряться<br/>выходи гулять почаще шаль из стона шипящих гласных</div>
                </div>
                <div id={"2"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>buddta<PlayButton music={audio2}/></h3>
                    <div className={"Mobile_PoemText"}>осторожнее вспоротые лепестки детских животов<br/>закрываются<br/>следующая станция детские фотографии в горных массивах<br/>пыльных альбомов<br/>ты наверное таких не помнишь и не видала<br/>моя память заключена на матовой поверхности плёнки<br/>липкостью прикосновения к лицу ребёнка<br/>которому говорили полные стылого эха голоса вокзалов<br/>что нельзя выпить из каждой ночи<br/>не влезть отяжелевшим и усложненным сознанием в нежные<br/>ткани собственного детства<br/>не вспомнить сказок сочинённых самому себе там только<br/>болты машинное масло<br/>многоточие и фактор‑2 а сказка только о потерянном кое-где<br/>кое-кто с кой-каким портфелем<br/>шёл однажды кое-как в кой-какую школу<br/>шел однажды кое-как и ловил ворон и они каркали<br/>могильными смешками<br/>из-за тополей и кустарника и множества лиц на камнях<br/>удивлённо выгибали брови<br/>из смертных судорог стреляли глазами в кое-меня<br/>а кое-я никак не мог найти могилу отца<br/>где же она куда закатилась может неких лиц спросить<br/>я любил в детстве ходить с бабушкой домой через кладбище<br/>смотреть на надгробия и она непременно говорила такой<br/>молодой был<br/>а я с высоты своих шести с половиной лет пытался постичь смерть<br/>ароматы времени года захлестнут тебя с головой<br/>как на этом снимке где ты в возрасте пяти лет взят мокрой<br/>рукой волны чёрного моря<br/>и уверен что так можно летать<br/>прилетел в счастливые от двадцати до тридцати а там<br/>может мы будем прощаться или вот что<br/>неси своё время на красивых тарелках скорее мне я голодна<br/>вечерами доедали гамсуна совсем другими людьми<br/>перед глазами всё плывет и я смеюсь<br/>мы спали на тех же лавочках потеряете книгу фрекен<br/>это почти так же как слушать мой смешной голос трёхлетней<br/>давности<br/>и воображать будто есть цельные временносшитые люди<br/>которые одинаковы<br/>которые не секунда и умерли<br/>как будто есть память и предыдущая жизнь<br/>будто когда-то был я</div>
                </div>
                <img className={"Mobile_PoemsPage_Images"} src={Image_1}/>
                <div id={"3"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>beggal<PlayButton music={audio3}/></h3>
                    <div className={"Mobile_PoemText"}>снуло пришел ультиматум завершительной категории<br/>увлекся гашем у товарища бегалиева сын наркоман и он<br/>знает по теории психологии<br/>что навсегда это хотя семь месяцев лечил<br/>но всё равно под столом сложносочинённая симфония<br/>коноплевони<br/>а учёба не идёт конотоп восстания бегалиев джуниор<br/>нашёл а потом нашли опера ленинского района<br/>а безутешный отец не знает как быть в поезде отдельным<br/>вышел на улицу<br/>а её нет красными пятнами сквозь мутную воду<br/>тонет каждый случайный прохожий беззастенчиво твердые<br/>стены истёрли мне щеки<br/>в скольжении вниз по отвесным тротуарам<br/>вслед церковный трамваеколокол звонит<br/>рёв людей внутреннего сгорания<br/>птицы поют телефонными гудками в нейлоне инженерных сетей<br/>здесь время докручивает стрелки на часах (звон)<br/>устало вглядываясь в план распада мира на завтра<br/>штукатурка бетон и кирпичи летят вверх и вбок<br/>там моя агония пьёт колу без сахара<br/>изломанные голоса коридоров<br/>закроют тебе тайну пустотного молчания<br/>и бесконечность в липком гудроне снов<br/>заунывно выкликает тебя проснуться в собственном прошлом где<br/>десятки я дробятся а потом перетекают один в другого<br/>я положу в пакет собачно-пограничную паранойю<br/>а в прошлый раз слон трубил<br/>у нас грибы невнятная соль и безмятежная бесконечность<br/>молодости<br/>(безмятежность только одна)<br/>пеппово расширение одного полукруга зрачка ест время<br/>перемолотым в труху ложками<br/>он может выброситься из общежития для тебя но это как-то<br/>странно<br/>то есть я правильно понял вас зовут ислам и вы хотите<br/>сплести песнь из погибших звуков мира? синтезаторная<br/>вьюга все смотрят на тебя за тобой и по тебе нервный танец<br/>тока сокращающего мышцы в ужасной аварии врезал себя<br/>в позвоночный столб ты не веришь в лекарства<br/>хочу умирать в стране с добровольной эвтаназией<br/>играет 6 раз в конце месяца 29 миллионеров вас всех<br/>выиграл житель ставропольского края<br/>не такие уж большие деньги<br/>я сожру завтрашние сутки и не будет города<br/>он расплавится на твоих губах он так специально<br/>вытащил всё человеческое по проводам из тебя проснись<br/>сейчас<br/>вставай класть свои сутки на холодный мрамор алтаря<br/>и резать им горло<br/>обсидиановым я жду и всегда ждал<br/>мне выпал холодный век с тёплыми зимами и падением вне<br/>себя</div>
                </div>
                <div id={"4"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>workbro<PlayButton music={audio4}/></h3>
                    <div className={"Mobile_PoemText"}>здесь повторяемость каждого шага ведёт к бесконечнолицым<br/>коллегам<br/>после привет они растягиваются по ширине<br/>в сущности<br/>приходится регулировать рабочие ситуации с рядом<br/>разговаривающих плоскостей<br/>плоскость Лена устала от бесконечных опозданий плоскости<br/>Юрия<br/>только ещё одно последнее опоздание<br/>и от плоскости Юрия в порядке соблюдения приказа<br/>о взыскании<br/>будет отсечён прямоугольник<br/>история наматывается на свою магнитную плёнку<br/>мир как скучный способ умереть<br/>я раздуваю щеки и на их дирижабле вылетаю в небеса<br/>лавочнического цвета<br/>и ангелы карьерного роста нежно прошуршат на ухо<br/>вот твой свечной завод в самаре только сердце останови<br/>останови все эти диалоги<br/>никогда не замолкают всё время шум шум разговоры ооо<br/>вектор бизнесуспех<br/>посредством слияния и поглощения<br/>наращивает свой потенциал к привлечению прямоугольников<br/>ромбов параллелограммов окружностей к текущим рекам<br/>задач<br/>плохо плавающие фигуры нам не нужны<br/>здесь главное понимать зачем ты здесь<br/>в этой комнате в этом здании в этой компании<br/>районе городе галактике<br/>а если не понимаешь совсем беда<br/>так вот я совсем теперь всё понял<br/>и приобрёл инициативу<br/>привлёк в рамках оптимизации<br/>себе в руки угол с двумя буквами П и М<br/>с разрядностью в восемь круглых остроконечных цилиндров<br/>и обязуюсь за последующие два часа оптимизировать<br/>численность фигур внутри кубов<br/>до нулевого числа<br/>чтобы у всех-всех<br/>было счастье добро любовь радость</div>
                </div>
                <img className={"Mobile_PoemsPage_Images"} src={Image_2}/>
                <div id={"5"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>uznull<PlayButton music={audio5}/></h3>
                    <div className={"Mobile_PoemText"}>незаконченные дома щерятся фонарями в почти арктическую<br/>ночь<br/>плавленая музыка из наушников<br/>захлестнула улицу<br/>и теперь все прохожие собакостарухи хачи молодые<br/>некрасивые женщины<br/>не просто несут мешки мусора своей повседневности<br/>но звучат недопетым паттерном<br/>появляются и исчезают в этой вечноночи<br/>снегом простуженных мыслей города<br/>монтируют из себя один бесконечный клип на песню я так<br/>рад что спас меня иисус<br/>когда ощущаешь сильный удар по голове<br/>то в нос врывается вся безнадёжность ситуации<br/>предвестником всего плохого<br/>вот нет тебя говорит тебе это ощущение<br/>ты улица молчаливого камня<br/>ты острая вспышка<br/>ты выбитые зубы<br/>ты заброшенные на провода кроссовки<br/>ты пять ножевых которые живут в брюшной полости улицы<br/>по которой ты ходишь на работу<br/>и если не повезло то ты выныриваешь<br/>вываливаешься в острые края облупившейся краски плохих<br/>больниц<br/>из оставшейся я создал свою персональную армию всяких<br/>плосковатых зверей<br/>пару карт несуществующих стран и уже с этим<br/>внушительным капиталом<br/>уснул и узнал что тоннели метро гораздо шире чем тебе<br/>говорили<br/>что там просто тёмными некрасивыми картинками<br/>водят перед окнами специальные санитары<br/>и в них нет бетона и рельс<br/>а только земляные полы из них вверх лезут электрические<br/>лампы<br/>по ним движется локомотив<br/>и обрастает плацкартными вагонами<br/>или длинной баржей<br/>по которой движется наше с тобой любимое ничто<br/>я придумал сюжет для книги<br/>только уронил его в сонные воды<br/>и уже в них я встретил свою бабушку<br/>тело которой стало усохшим телом ребёнка<br/>необязательно жить в заброшенной каменоломне<br/>чтобы слышать призраков сказала она<br/>достаточно бесшумно проснуться не меняя ритма дыхания<br/>и запомнить как они нашёптывают тебе твои мысли на завтра<br/>запиши именно так</div>
                </div>
                <div id={"6"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>pogonny<PlayButton music={audio6}/></h3>
                    <div className={"Mobile_PoemText"}>выстрелы фейерверков это ничто иное<br/>как попытка убить небо распустившейся мимолётной<br/>красотой вспышки<br/>поразить и заполнить пустоты чёрных глазниц ночи<br/>вечером 23 января я со своим другом Алексеем возвращался<br/>с работы мы пили пиво из бутылки<br/>нас выхватил фарами из смеси серых изгибов домов<br/>и космических пустырей<br/>проезжающий мимо автомобиль патрульно-постовой службы<br/>и две совести в кителях при помощи дубинок доставили нас<br/>в участок<br/>старший главный следователь нерадушно встретил своих<br/>подчиненных руганью<br/>вы же сами себя вызвали<br/>кричал он им вызвали по 911 никаких вызовов не поступало<br/>на мой старший главный пульт<br/>вы же псы режима откуда эти невинные граждане<br/>где состав преступления люди умирают ежеминутно в этом<br/>панельно-бетонном аду<br/>радикальные организации поднимают свои гидроголовые отростки<br/>и умы слабых и сомневающихся подобны флюгерам<br/>скрипящим на ветру<br/>если прострелить вам ноги табельным<br/>если засунуть вам пивную бутылку в задний проход<br/>если напильниками снимать с вас нагулянное мясо и жир<br/>и сэмплировать крики и тысячной доли ваших страданий<br/>не покроет позора<br/>должны осколки зелёного и коричневого стекла на языках<br/>ваших расположиться мозаикой из слов ВИНА ПОЛИЦИИ<br/>БЕЗГРАНИЧНА<br/>порицающий взмах начальственной руки опрокинул<br/>оставшиеся часы<br/>а подписи об отсутствии претензий<br/>переместили меня с Алексеем в предрабочую мягкость<br/>домашних кроватей<br/>спустя двое суток на телефон моей матери поступил звонок<br/>от скрытого абонента<br/>и плачущий голос представившийся мною простонал<br/>мама меня подставили мама я невиновен я забыл свою<br/>фамилию друг Алексей подставил меня<br/>когда я передавал его наркотики и пиво и теперь я в плену<br/>государства глотаю слёзы<br/>и даже злые оперативники в новых кителях морщат бывалые<br/>лица от незавидности моей судьбы<br/>но доброта и понимание их не имеют фактических пределов<br/>и они согласны за тысячу долларов и моё честное слово<br/>про неучастие в наркотических аферах закрыть глаза на всю<br/>эту историю<br/>переиграть время разрубить гордиев узел причинно-<br/>следственных связей<br/>а кожаный голос оперативника с порезанным языком<br/>подтвердил эти слова<br/>мама позвонила мне а я ставил ящики с алкоголем на полки<br/>и не мог в соответствии с правилами компании принимать<br/>входящие звонки<br/>и вечером мать домой не пустила нет денег таких кричала она<br/>в тюрьму уходи<br/>на шум пришел участковый и от него мы уже узнали что<br/>в хихикающих коридорах<br/>раздваивают каждого кто оставил подпись на протоколах<br/>сумрачных участков<br/>и адские колесницы патрульных везут в тюрьмы несчастных<br/>доппельгангеров<br/>и мой двойник попал в тюрьму<br/>каждый день он ходил шить милицейскую форму<br/>выучился курить сигареты я передаю ему книги в тюремную<br/>библиотеку<br/>те что можно отдать навсегда книги никогда не вернутся<br/>из тюрьмы<br/>в каждой из них я пишу дорогой двойник пусть тебе не так<br/>повезло как мне<br/>пусть согреет тебя известие что мы с Алексеем каждый день<br/>тебя жалеем<br/>и запускаем салюты небольшие ввысь<br/>и чёрные кошки щурят на нас свои египетские разрезы<br/>с камерами милиционеров на глазном дне<br/>и что мать моя лишилась покоя боится что ты вернёшься<br/>озлобленным и квартиру у нас отберёшь я же считаю что тебе<br/>там интереснее чем в ничто<br/>что нет злобы в сердце твоем и гнева<br/>ты почти как мать сам даешь жизнь новым кителям<br/>и наполняются в них ткань за эпителием<br/>новые милиционеры которых никогда не будет много<br/>чтобы беречь порядок нашего общего вечнонебесного царства</div>
                </div>
                <img className={"Mobile_PoemsPage_Images"} src={Image_3}/>
                <div id={"7"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>merttva<PlayButton music={audio7}/></h3>
                    <div className={"Mobile_PoemText"}>ты меня не знаешь<br/>красные блики стоп сигналов автомобилей<br/>бегают испуганными зверьками по твоему слезливому лицу<br/>мы очень-очень молоды и поэтому думаем что несчастны<br/>пытаемся перещеголять травмами враг врага<br/>такое бывает когда не хочешь разбираться в словах<br/>и обоюдное нежелание понимать всё возрастает<br/>я глупее тебя мир это отражение в зрачках умирающей<br/>собаки<br/>которая глядит сквозь полиэтиленовый пакет наполненный<br/>водой<br/>отдаю все вещи которые есть с собой но они не нужны тебе<br/>бросаешь их на асфальте ладно<br/>я ушёл творить подвиги в этих плоскостях индустриальной<br/>нелепицы<br/>найти первого попавшегося человека и ударить его лицо<br/>найти первое попавшееся зеркало провалиться с каплями<br/>крови<br/>треугольниками осколков и лопнувшими сосудами<br/>в холодную гладкость обратной стороны мира но в этой ночи<br/>ничего<br/>нет людей нет зеркал есть только глупые бесстеклистые<br/>витрины<br/>а в них пластмассовые люди<br/>обнял и шепчу что ждал всегда только тебя<br/>что только гладкая безмятежность твоей оболочки примирит<br/>меня с реальностью<br/>что так долго ждал счастья прикоснуться к тебе но ты молчишь<br/>нежно тянусь к пластиковому лицу касаюсь губ твоя голова<br/>плохо закреплена и падает на пол<br/>я выхожу из витрины и плачу где та другая живая<br/>разбросанные вещи на асфальте покажут дорогу<br/>истекающий слезами голос из телефона говорит не вздумай<br/>только не иди<br/>не ищи<br/>я мертва оттого что тебя нет рядом<br/>я мертва от каждого взгляда который адресован не мне<br/>я пластиковею от твоей безразличности<br/>я мертва оттого что тебя нет рядом<br/>я мертва от каждого взгляда который адресован не мне<br/>я пластиковею от твоей безразличности<br/>я мертва от ножей твоих идиотских поступков<br/>и ножей криминальных элементов твоего идиотского города<br/>ты мне не нужен ненавижу<br/>сквозь эти долгие-долгие дни в поисках неизвестной<br/>аберрации психики<br/>которая возникает при подмене одних ассоциаций другими<br/>я осмелилась верить что ты сможешь заменить мне всё<br/>или хотя бы что-то пророчества сквозь трубку<br/>ты умер<br/>сжимаю пластик<br/>навстречу мне едет машина<br/>бегу изо всех сил навстречу цифры 60–70 успеть</div>
                </div>
                <img className={"Mobile_PoemsPage_Images"} src={Image_4}/>
                <div id={"8"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>tishomertv<PlayButton music={audio8}/></h3>
                    <div className={"Mobile_PoemText"}>я всех вас видел<br/>гиены ожидающие смерти львов собственных тел<br/>сонные рты в судорожном ожидании приходов<br/>прислушиваются к механической работе внутренних органов<br/>как к шорохам из пустой комнаты<br/>каждый раз врёшь себе что это всё не так просто<br/>не упорыш а отважный исследователь дофаминовых гор<br/>и эндорфиновых рек<br/>или последний поэт ленивого мира в безысходности пытается<br/>нащупать неизвестно что<br/>между волокон морфинга хирурги совести из мягких тканей<br/>выдирают пули будничных выдумок<br/>о том что тебе что-то мешает<br/>сказка про белого бычка никто тебе не мешает и не мешал<br/>ты просто сам ничего хочешь пальцы не выпляшут нужный<br/>код ребус из букв<br/>всё это смех пропавших секунд<br/>сначала они едва слышно писком комара царапают тишину<br/>но постепенно звук разрастается заполняет комнату твоей<br/>головы рвёт на части ошмётки ушей<br/>а потом становится всё громче и вот уже нет тебя нет ничего<br/>есть только звук<br/>а потом он достигает предела и звук становится тишиной<br/>постоянным состоянием вообще всё это постоянно мудрый<br/>пребывает в неизменном<br/>мне неизменно тошно я ушёл в горы неудачных попыток<br/>самоконтроля путешествую по рекам незаполненных<br/>отчётов ставлю палатку съёмной квартиры у речки жду<br/>медведя госслужб с тоской в глазах нет тоски нет грусти нет<br/>усталости<br/>просто открываешь глаза и отрешённо делаешь вещи<br/>внутренний мальчик который кричал волки в псарнях<br/>общественного питания<br/>умер а я иду напролом сквозь реальность на мне красивое<br/>белое пальто<br/>я вру всем что смотрю на мир с другой стороны<br/>что завернулся на 6 часов в одежды безумия<br/>побывал в изнанке сознания<br/>курил кальян с гусеницей меня вовсе нет<br/>я просто фотоснимок где всё ещё так сладко<br/>где я нахожусь в руках отца чуть нахмуренный<br/>а мама моложе чем я сейчас она говорит мне<br/>всего лишь две таблетки открой конфорки маленькие атомные<br/>лодки<br/>внутренний лысый человек скажет твоим голосом они<br/>утонули и засмеётся<br/>три крышки и гулять по внутреннему периметру камеры<br/>в сизо<br/>четыре этажа ночью стучат по артиллерии батарей<br/>я пята ахилла я противотанковый ёж<br/>игл шприцов я танцор на колючей проволоке смыслов<br/>я голос бога заезженной грампластинки<br/>плоскогубцами разорванная реальность лениво пытается<br/>стечь в дно стакана-колодца<br/>твоих глаз<br/>пустые комнаты пустых людей романтизация простреливания<br/>себе конечностей<br/>жалкие попытки хоть как-нибудь сделать нескучно<br/>кормление иллюзиями себя в прямом смысле<br/>полудохлые от передозировок не очень умные человеки<br/>пытаются разлепить глаза<br/>но в новостях ищите трупы житель города миллионника<br/>открыл газ в квартире и сбежал с вечеринки</div>
                </div>
                <div id={"9"} className={"Mobile_Poem"}>
                    <h3 className={"Mobile_PoemTitle"}>nuvvse<PlayButton music={audio9}/></h3>
                    <div className={"Mobile_PoemText"}>дом 1 это мечты об Арктике и удушительные мысли летом<br/>ворованный спирт в скорлупе ломких настроений<br/>и жестокости льда<br/>дом это гудки дискового телефона и случайным цифрам<br/>номера<br/>читать книгу серии я познаю мир про сокровища<br/>в взрезанные глотки индейцев сыпать маис<br/>пока на дне трахей не блеснёт жадная драгоценность<br/>лампочки лестничной клетки или смотреть пока корона<br/>голубого цветка конфорки<br/>не распустится на весь мир дом я никуда не пойду или скорее<br/>вырваться<br/>дом это приезжай почаще у тебя есть мы<br/>но ждёт дворец дураков ты в нем кронпринц-камердинер<br/>выбитых дверей в твоей комнате советские тётки хрипят<br/>вползая в детские пьяные сны<br/>ну а потом дом это отсутствие дома это когда мир состоит<br/>из лавочек и он очень холодный<br/>это делай что не нравится чтобы было где спать<br/>единственный дом который действительно есть это я сам<br/>в этом доме любое слово кажется невероятным если 4 раза его<br/>повторить<br/>буквы распадаясь смеются<br/>куски кириллицы стекают с предметов<br/>реальность сбрасывает оковы языка<br/>абсурд судорожно ищет сурдожесты всегда начинай<br/>с простых целей<br/>найти архитектора который вылепит заново нас чуткими<br/>пальцами<br/>будет передавать куску материи твою красоту и мою глупость<br/>моё разочарование и твоё чувство вселенной<br/>места где буду я скоро обратятся в ужас<br/>поэтому безмолвными ночами я смотрю в пустоту<br/>которую ни отразить ни отрезать пытался найти её предел<br/>а нашёл синицу в твоём рту<br/>мой ангел бьёт руками водную гладь отныне и четыре века<br/>в осколках её искривляются мои возможные жизни<br/>а ангел никак не утонет нет я снял маску а под ней лицо<br/>мёртвого друга<br/>который им никогда не был<br/>снимаю маску а под ней другая<br/>они вырастали с самого начала меня<br/>с того момента когда показываю три<br/>с того момента как будила и целовала тьма<br/>что-то даже слышала об этом<br/>в сгнивших лёгких плещется ревнивый бог<br/>человек так устроен что возвращается к тем же местам<br/>топится в тех же реках я два года ждал такую игру<br/>давай покабудки я невыразимый а ты бесконечная<br/>при окончательном подсчёте реальностью<br/>окажется только гладишь пальцами тонкую взвесь пусто ты</div>
                </div>
            </div>
        </div>
    );
}

export default Poems_Konecigri;
