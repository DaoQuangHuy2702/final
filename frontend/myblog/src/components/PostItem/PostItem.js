import React from 'react';
import './PostItem.css';

const PostItem = () => {
    return(
        <div className="post-item">
            <div className="post-image">
                <img src="https://thumbs.dreamstime.com/b/happy-couple-love-travel-raised-hands-cliff-happy-couple-love-travel-raised-hands-cliff-norway-man-woman-112188598.jpg" alt="book"/>
            </div>
            <div className="post-content">
                <div className="post-content__title">
                    <p>Wherever far wow thus a squirrel raccoon jeez jaguar this from along</p>
                </div>
            </div>
        </div>
    )
}

export default PostItem;