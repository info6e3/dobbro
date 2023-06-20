import React, {useEffect, useLayoutEffect} from 'react';
import Poems_Header from "../components/Poems_Header";
import albums from "../structure/albums.json";
import Poems_Links from "../components/Poems_Links";
import AlbumContent from "./AlbumContent";

const AlbumPage = ({album, next, prev, images, bgImages, theme, id=null, element=null}) => {

    console.log("mount")
    if(theme) {
        console.log("theme")
        document.querySelector('body').classList.add(theme)
    } else  {
        console.log("no theme")
        document.querySelector('body').classList = null
    }

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
            <AlbumContent
                id={id}
                element={element}
                album={albums[album]}
                images={images}
                bgImages={bgImages}/>
        </div>
    );
};

export default AlbumPage;