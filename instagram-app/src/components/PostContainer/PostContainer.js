import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";
import "./PostContainer.css";

function PostContainer(props) {
    return (
        <>
        {props.posts.map(posts => (
            <div key={posts.id} className="posts">
                <div className="posterInfo">
                    <img className="thumbImg" src={posts.thumbnailUrl} alt={posts.username}/>
                    <p className="name">{posts.username}</p>
                </div>
                    <img className="postImg" src={posts.imageUrl} alt="post"/>
                    <span className="icons">
                        <i className="far fa-heart fa-2x"></i>
                        <i className="far fa-comment fa-2x fa-flip-horizontal"></i>
                    </span>
                    <p className="likes">{posts.likes} likes</p>
                <div className="comments">
                    <CommentSection comments={posts.comments}/>                    
                </div>
                <p className="timeStamp">{posts.timestamp}</p>
            </div>
        ))}
        </>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
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
};

PostContainer.defaultProps = {
    posts: [
        {
            id: "a",
            username: "philzcoffee",
            thumbnailUrl:
                "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

            imageUrl:
                "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
            likes: 400,
            timestamp: "July 17th 2017, 12:42:40 pm",
            comments: [
                {
                    id: 1,
                    username: "philzcoffee",
                    text: "We've got more than just delicious coffees to offer at our shops!"
                }
            ]
        }
    ]
};

export default PostContainer; 