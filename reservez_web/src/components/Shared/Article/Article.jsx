import React from "react";
import './Article.css';

const Article = props => {
    const {id, title, media} = props;

    return <>
        <section id={id} className={'article-container'}>
            <div className={'article-wrapper'}>
                {title &&
                    <div className={'title-box'}>
                        <h2 className={'article-title'}>{title}</h2>
                    </div>
                }
                <div className={'article-content'}>
                    <div className={'article-text'}>
                        {props.children}
                    </div>
                    {media &&
                        <div className={'article-media'}>
                            <img src={media} alt={title}/>
                        </div>
                    }
                </div>
            </div>
        </section>
    </>
}

export default Article;