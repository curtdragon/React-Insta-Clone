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

            {props.comments &&
            props.comments.map(comments => {
                return <div key={comments.id}>
                    <p className="name">{comments.username}</p>
                    <p>{comments.text}</p>
                </div>
            })
            }
            <form className="newComment" /*onSubmit={this.submitHandler}*/>
                <input
                    // value={this.state.listItem}
                    placeholder="Add a comment..."
                    type="text"
                    // onChange={this.changeHandler}
                />
            </form>
        </>
    );
};

export default CommentSection;