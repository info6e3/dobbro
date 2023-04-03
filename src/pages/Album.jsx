import React from 'react';

const Album = ({album, images, bgImages, id = null, element = null}) => {
    return (
        <div className="Album">
            <div className={"PoemsPage_BackgroundImagesContainer"}>
                {
                    bgImages?.map((img, index) => <div key={index}>{img}</div>)
                }
            </div>
            <div className={"PoemsContainer"}>
                {
                    album.poems.map((poem, index) => {
                            return (
                                <div key={index}>
                                    <div id={index + 1} className={"Poem"}>
                                        <h3 className={"PoemTitle"}>{poem.title.split('<br/>').map((str, index) => <div
                                            key={index}>{str}</div>)}</h3>
                                        <div className={"PoemText"}>{
                                            poem.text.split('<br/>').map((str, index) => <div key={index}>{str}</div>)
                                        }
                                        </div>
                                    </div>
                                    {
                                        id === index + 1 ?
                                            element
                                            :
                                            null
                                    }
                                    {
                                        images?.filter(img => img.after === index + 1).map((img, i) => React.cloneElement(img.element, {key:i}))
                                    }
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
};

export default Album;