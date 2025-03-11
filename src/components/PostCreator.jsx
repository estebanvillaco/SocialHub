import React, { useState } from "react";
import { useFeed } from "../context/FeedContext";

const PostCreator = () => {
  const { addPost } = useFeed();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || image) {
      const newPost = {
        id: Date.now(),
        user: "Current User",
        caption: content,
        image: image ? URL.createObjectURL(image) : null,
        likes: 0,
        comments: [],
      };
      addPost(newPost);
      setContent("");
      setImage(null);
    }
  };

  return (
    <div className="post-creator">
      <textarea
        placeholder="Write a caption..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleSubmit} className="button">Post</button>
    </div>
  );
};

export default PostCreator;