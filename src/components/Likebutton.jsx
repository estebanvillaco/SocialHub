import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    setLikes(hasLiked ? likes - 1 : likes + 1);
    setHasLiked(!hasLiked);
  };

  return (
    <div className="like-button-container">
      <button className="like-button" onClick={handleLike}>
        {hasLiked ? 'Unlike' : 'Like'} ({likes})
      </button>
    </div>
  );
};

export default LikeButton;