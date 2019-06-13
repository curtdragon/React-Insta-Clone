import React from 'react';

function CommentSection(props) {
    return (
        <>
            {props.comments ?
            props.comments.map(comments => {
                    return <div key={comments.id}>
                        <p>{comments.username}</p>
                        <p>{comments.text}</p>
                    </div>
            })
            : null
            }

            {props.comments &&
            props.comments.map(comments => {
                return <div key={comments.id}>
                    <p>{comments.username}</p>
                    <p>{comments.text}</p>
                </div>
            })
            }
            <form /*onSubmit={this.submitHandler}*/>
                <input
                    // value={this.state.listItem}
                    placeholder="New Comment"
                    type="text"
                    // onChange={this.changeHandler}
                />
            </form>
        </>
    );
};

export default CommentSection;