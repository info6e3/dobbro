import Image_Prizhok from './images/prizhok.png';
import Image_Nizneba from './images/nizneba.png';

import React from "react";

const albums = [
    {
        title: '1661',
        ref: 'album1',
        titleLink: '1661',
    },
    {
        title: 'эстетика дрожащих изображений',
        ref: 'album2',
        titleLink: 'эстетика дрожащих изображений',
    },
    {
        title: 'подвешенный прыжок',
        ref: 'album3',
        titleLink: <img src={Image_Prizhok}/>,
    },
    {
        title: 'с николаем совсем плохо',
        ref: 'album4',
        titleLink: 'с николаем совсем плохо',
    },
    {
        title: 'космохачкала',
        ref: 'album5',
        titleLink: 'космохачкала',
    },
    {
        title: 'низ неба',
        ref: 'album6',
        titleLink: <img src={Image_Nizneba}/>,
    },
    {
        title: 'arcticameet',
        ref: 'album7',
        titleLink: 'arcticameet',
    },
    {
        title: 'конец игры',
        ref: 'album8',
        titleLink: 'конец игры',
    },
    {
        title: 'наркофобія',
        ref: 'album9',
        titleLink: 'наркофобія',
    }
]

export default albums;
