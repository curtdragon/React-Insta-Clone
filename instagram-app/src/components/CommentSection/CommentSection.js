import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
    return (
        <>
            {props.comments ?
            props.comments.map(comments => {
                    return <div key={comments.id}>
                        <p className="name">{comments.username}</p>
                        <p>{comments.text}</p>
                    </div>
            })
            : null
            }
        </>
    );
};

export default CommentSection;