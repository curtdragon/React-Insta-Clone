import React from 'react';
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";

function PostContainer(props) {
    return (
        <>
        {props.posts.map(posts => (
            <div key={posts.id} className="posts">
                <div>
                    <div>
                        <img src={posts.thumbnailUrl} alt={posts.username}/>
                        <h3>{posts.username}</h3>
                    </div>
                        <img src={posts.imageUrl} alt="post"/>
                    <div>
                        <p>{posts.likes} likes</p>
                    </div>
                </div>
                <div className="comments">
                    <CommentSection comments={posts}/>                    
                </div>
                <div>
                    <p>{posts.timestamp}</p>
                </div>
            </div>
        ))}
        </>
    );
}

PostContainer.propTypes = {
    postContainer: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            )
        })
    )
}

export default PostContainer; 