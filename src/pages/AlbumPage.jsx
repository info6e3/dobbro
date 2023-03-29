import React, {useEffect} from 'react';
import Poems_Header from "../components/Poems_Header";
import albums from "../structure/albums.json";
import Poems_Links from "../components/Poems_Links";
import Album from "./Album";

const AlbumPage = ({album, next, prev, images, bgImages, theme}) => {

    if(theme) document.querySelector('body').classList.add(theme)

    return (
        <div className={"PoemsPage"}>
            <Poems_Header title={album}/>
            <Poems_Links
                theme={theme}
                prev={
                    prev ? {
                        title: prev,
                        ref: albums[prev].ref
                    } : null
                }
                next={
                    next ? {
                        title: next,
                        ref: albums[next].ref
                    } : null
                }
            />
            <Album
                album={albums[album]}
                images={images}
                bgImages={bgImages}/>
        </div>
    );
};

export default AlbumPage;