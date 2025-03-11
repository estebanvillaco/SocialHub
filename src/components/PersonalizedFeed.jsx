import React, { useState } from "react";
import { useFeed } from "../context/FeedContext";
import LikeButton from "./Likebutton";
import CommentSection from "./CommentSection";

const PersonalizedFeed = () => {
  const { posts } = useFeed();
  const [showCommentSection, setShowCommentSection] = useState({});

  const toggleCommentSection = (postId) => {
    setShowCommentSection((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="feed">
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post-card">
            {/* User Info */}
            <div className="post-header">
              <strong className="post-username">{post.user || "test"}</strong>
              <p className="post-caption">{post.caption}</p>
            </div>
            {/* Post Image */}
            {post.image && <img src={post.image} alt="Post" className="post-image" />}

            {/* Like & Comment Buttons */}
            <div className="post-actions">
              <LikeButton initialLikes={post.likes} />
              <button
                className="comment-button"
                onClick={() => toggleCommentSection(post.id)}
              >
                💬 Comment
              </button>
            </div>

            {/* Comment Section */}
            {showCommentSection[post.id] && <CommentSection postId={post.id} />}
          </div>
        ))
      )}
    </div>
  );
};

export default PersonalizedFeed;