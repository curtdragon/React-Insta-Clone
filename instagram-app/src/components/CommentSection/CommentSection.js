import React from "react";
import "./CommentSection.css";

//Function to create each comment including commenter name and comment
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