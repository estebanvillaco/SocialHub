import React, { useState } from 'react';
import { useFeed } from '../context/FeedContext';

const PostCreator = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useFeed();

  const handlePost = () => {
    if (topic.trim() && content.trim()) {
      addPost({ topic, content, id: Date.now() });
      setTopic('');
      setContent('');
    }
  };

  return (
    <div className="post-creator">
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button" onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostCreator;