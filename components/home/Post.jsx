import React from "react";
import '../../styles/post.css';
import { obj as postObject } from '../../data/postData';

const Post = () => {
  return (
    <div className="postContainer">
      {postObject.map(postData => (
        <div key={postData.id} className="post">
          <div className="postHeader">
            <img src={postData.profilePic} width='30px' height='30px' alt="ProfilePic" />
            <span>{postData.username}</span>
          </div>

          <div className="postMain">
            <img width='100%' src={postData.postPic} alt="PostPic" />
            <span>{postData.likes} Likes</span>
            <span style={{color:'grey', fontSize:'20px', marginBottom:'20px'}}>{postData.aboutPost}</span>
          </div>

          <div className="comments">
            {postData.comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="commentContent">
                  <img src={comment.profilePic} width='20px' height='20px' alt="" />
                  <span>{comment.username} </span>
                  <span>{comment.comment}</span>
                </div>
                <span style={{color:'grey', fontSize:'12px', marginLeft:'20px', marginTop:'10px'}}>{comment.likes} Likes</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
