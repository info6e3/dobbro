import React from 'react';

const Album = ({album, images, bgImages}) => {
    return (
        <div className="Album">
            <div className={"PoemsPage_BackgroundImagesContainer"}>
                {
                    bgImages?.map(img => img)
                }
            </div>
            <div className={"PoemsContainer"}>
                {
                    album.poems.map((poem, index) => {
                        return (
                            <>
                                <div id={index + 1} className={"Poem"}>
                                    <h3 className={"PoemTitle"}>{poem.title.split('<br/>').map((str) => <div>{str}</div>)}</h3>
                                    <div className={"PoemText"}>{
                                        poem.text.split('<br/>').map((str) => <div>{str}</div>)
                                    }
                                    </div>
                                </div>
                                {
                                    images?.filter(img => img.after === index + 1).map(img => img.element)
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Album;