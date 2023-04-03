import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ContentPage from './pages/content/ContentPage';
import StartPage from "./pages/Start";
import Contacts from "./pages/contacts/Contacts";

import albums from "./structure/albums.json";
import AlbumPage from "./pages/AlbumPage";

import Image_1661_1 from "./images/albums/1661/1.png";
import Image_1661_2 from "./images/albums/1661/2.png";
import Image_1661_3 from "./images/albums/1661/3.png";
import Image_estetika_2 from "./images/albums/estetika/2.png";
import Image_estetika_4 from "./images/albums/estetika/4.png";
import Image_estetika_1 from "./images/albums/estetika/1.png";
import Image_estetika_3 from "./images/albums/estetika/3.png";
import Image_nikolai_1 from "./images/albums/nikolai/1.png";
import Image_nikolai_2 from "./images/albums/nikolai/2.png";
import Image_kosmohachkala_1 from "./images/albums/kosmohachkala/1.png";
import Image_kosmohachkala_2 from "./images/albums/kosmohachkala/2.png";
import Image_kosmohachkala_3 from "./images/albums/kosmohachkala/3.png";
import Image_kosmohachkala_4 from "./images/albums/kosmohachkala/4.png";
import Image_arcticameet_1 from "./images/albums/arcticameet/1.png";
import Image_arcticameet_2 from "./images/albums/arcticameet/2.png";
import Image_arcticameet_3 from "./images/albums/arcticameet/3.png";
import Image_arcticameet_4 from "./images/albums/arcticameet/4.png";
import Image_konecigri_1 from "./images/albums/konecigri/1.png";
import Image_konecigri_2 from "./images/albums/konecigri/2.png";
import Image_konecigri_3 from "./images/albums/konecigri/3.png";
import Image_konecigri_4 from "./images/albums/konecigri/4.png";
import Image_narkofobia_1 from "./images/albums/narkofobia/1.png";
import Image_narkofobia_2 from "./images/albums/narkofobia/2.png";
import Image_narkofobia_3 from "./images/albums/narkofobia/3.png";
import Image_narkofobia_4 from "./images/albums/narkofobia/4.png";
import Image_narkofobia_5 from "./images/albums/narkofobia/5.png";
import Teeth from "./components/Teeth";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path={"/"} element={
                        function () {
                            return window.innerWidth < 1512 ? <StartPage/> : <ContentPage/>
                        }()
                    }/>
                    <Route exact path={"/content"} element={<ContentPage/>}/>
                    <Route exact path={"/about"} element={<Contacts/>}/>
                    <Route exact path={albums["1661"].ref} element={
                        <AlbumPage
                            id={7}
                            element={<Teeth/>}
                            album={"1661"}
                            next={"эстетика дрожащих изображений"}
                            images={[
                                {
                                    after: 2,
                                    element: <img className={"PoemsPage_Images"} src={Image_1661_1}/>
                                },
                                {
                                    after: 5,
                                    element: <img className={"PoemsPage_Images"} src={Image_1661_2}/>
                                },
                                {
                                    after: 9,
                                    element: <img className={"PoemsPage_Images"} src={Image_1661_2}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_1661_Image_3"}
                                         src={Image_1661_3}/>,
                                ]}/>
                    }/>
                    <Route exact path={albums["эстетика дрожащих изображений"].ref} element={
                        <AlbumPage
                            album={"эстетика дрожащих изображений"}
                            prev={"1661"}
                            next={"подвешенный прыжок"}
                            images={[
                                {
                                    after: 3,
                                    element: <img className={"PoemsPage_Images"} src={Image_estetika_1}/>
                                },
                                {
                                    after: 5,
                                    element: <img className={"PoemsPage_Images"} src={Image_estetika_3}/>
                                },
                                {
                                    after: 9,
                                    element: <img className={"PoemsPage_Images"} src={Image_1661_2}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"}
                                         id={"PoemsPage_estetika_Image_2"} src={Image_estetika_2}/>,
                                    <img className={"PoemsPage_BackgroundImages"}
                                         id={"PoemsPage_estetika_Image_4"} src={Image_estetika_4}/>
                                ]
                            }/>
                    }/>
                    <Route exact path={albums["подвешенный прыжок"].ref} element={
                        <AlbumPage
                            album={"подвешенный прыжок"}
                            prev={"эстетика дрожащих изображений"}
                            next={"с николаем совсем плохо"}
                        />
                    }/>
                    <Route exact path={albums["с николаем совсем плохо"].ref} element={
                        <AlbumPage
                            theme={"white"}
                            album={"с николаем совсем плохо"}
                            prev={"подвешенный прыжок"}
                            next={"космохачкала"}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"}
                                         id={"PoemsPage_Nikolai_Image_1"} src={Image_nikolai_1}/>,
                                    <img className={"PoemsPage_BackgroundImages"}
                                         id={"PoemsPage_Nikolai_Image_2"} src={Image_nikolai_2}/>
                                ]
                            }
                        />
                    }/>
                    <Route exact path={albums["космохачкала"].ref} element={
                        <AlbumPage
                            album={"космохачкала"}
                            prev={"с николаем совсем плохо"}
                            next={"низ неба"}
                            images={[
                                {
                                    after: 3,
                                    element: <img className={"PoemsPage_Images"} src={Image_kosmohachkala_2}/>
                                },
                                {
                                    after: 7,
                                    element: <img className={"PoemsPage_Images"} src={Image_kosmohachkala_4}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Cosmohach_Image_1"}
                                         src={Image_kosmohachkala_1}/>,
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Cosmohach_Image_3"}
                                         src={Image_kosmohachkala_3}/>
                                ]
                            }/>
                    }/>
                    <Route exact path={albums["низ неба"].ref} element={
                        <AlbumPage
                            album={"низ неба"}
                            prev={"космохачкала"}
                            next={"arcticameet"}
                        />
                    }/>
                    <Route exact path={albums["arcticameet"].ref} element={
                        <AlbumPage
                            album={"arcticameet"}
                            prev={"низ неба"}
                            next={"конец игры"}
                            images={[
                                {
                                    after: 2,
                                    element: <img className={"PoemsPage_Images"} src={Image_arcticameet_1}/>
                                },
                                {
                                    after: 7,
                                    element: <img className={"PoemsPage_Images"} src={Image_arcticameet_3}/>
                                },
                                {
                                    after: 10,
                                    element: <img className={"PoemsPage_Images"} src={Image_arcticameet_4}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Arcticameet_Image_2"}
                                         src={Image_arcticameet_2}/>
                                ]
                            }/>
                    }/>
                    <Route exact path={albums["конец игры"].ref} element={
                        <AlbumPage
                            album={"конец игры"}
                            prev={"arcticameet"}
                            next={"наркофобія"}
                            images={[
                                {
                                    after: 4,
                                    element: <img className={"PoemsPage_Images"} src={Image_konecigri_2}/>
                                },
                                {
                                    after: 7,
                                    element: <img className={"PoemsPage_Images"} src={Image_konecigri_4}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Konecigri_Image_1"}
                                         src={Image_konecigri_1}/>,
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Konecigri_Image_3"}
                                         src={Image_konecigri_3}/>
                                ]
                            }/>
                    }/>
                    <Route exact path={albums["наркофобія"].ref} element={
                        <AlbumPage
                            album={"наркофобія"}
                            prev={"конец игры"}
                            images={[
                                {
                                    after: 2,
                                    element: <img className={"PoemsPage_Images"} src={Image_narkofobia_1}/>
                                },
                                {
                                    after: 7,
                                    element: <img className={"PoemsPage_Images"} src={Image_narkofobia_3}/>
                                },
                                {
                                    after: 12,
                                    element: <img className={"PoemsPage_Images"} src={Image_narkofobia_5}/>
                                }
                            ]}
                            bgImages={
                                [
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Narkofobia_Image_2"}
                                         src={Image_narkofobia_2}/>,
                                    <img className={"PoemsPage_BackgroundImages"} id={"PoemsPage_Narkofobia_Image_4"}
                                         src={Image_narkofobia_4}/>
                                ]
                            }/>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
