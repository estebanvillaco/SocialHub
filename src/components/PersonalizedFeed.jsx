import React from 'react';
import { useFeed } from '../context/FeedContext';
import Likebutton from './Likebutton';
import CommentSection from './CommentSection';
import ShareButton from './ShareButton';

const PersonalizedFeed = () => {
  const { posts } = useFeed();

  return (
    <div className="personalized-feed">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.topic}</h2>
            <p>{post.content}</p>

            {/* Interaction Options */}
            <div className="interaction-section">
              <Likebutton />
              <CommentSection />
              <ShareButton postUrl={`https://socialhub.com/post/${post.id}`} />
            </div>
          </div>
        ))
      ) : (
        <p>No posts available. Create one!</p>
      )}
    </div>
  );
};

export default PersonalizedFeed;
