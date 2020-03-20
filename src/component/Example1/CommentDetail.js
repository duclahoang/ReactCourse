import React from 'react'

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.ava} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">
                {props.cmt}
            </div>
        </div>
    )
}

export default CommentDetail