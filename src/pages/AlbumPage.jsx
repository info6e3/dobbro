import React from 'react';
import Poems_Header from "../components/Poems_Header";
import albums from "../structure/albums.json";
import Poems_Links from "../components/Poems_Links";
import Album from "./Album";

const AlbumPage = ({albumIndex, images, bgImages}) => {
    return (
        <div className={"PoemsPage"}>
            <Poems_Header title={albums[albumIndex].title}/>
            <Poems_Links
                prev={
                    albums[albumIndex - 1] ? {
                        title: albums[albumIndex - 1].title,
                        ref: albums[albumIndex - 1].ref
                    } : null
                }
                next={
                    albums[albumIndex + 1] ? {
                        title: albums[albumIndex + 1].title,
                        ref: albums[albumIndex + 1].ref
                    } : null
                }
            />
            <Album album={albums[albumIndex]}
                   images={images}
                   bgImages={bgImages}/>
        </div>
    );
};

export default AlbumPage;