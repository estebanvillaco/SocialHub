import React, { createContext, useState, useContext } from 'react';

const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <FeedContext.Provider value={{ posts, addPost }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
};
export default FeedContext;