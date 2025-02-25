import React, { useState } from 'react';
import { useFollowing } from '../context/FollowingContext';

const FollowingList = () => {
  const { following, followUser, unfollowUser } = useFollowing();
  const [newUser, setNewUser] = useState('');

  const handleFollow = () => {
    if (newUser.trim()) {
      followUser({ id: Date.now(), name: newUser });
      setNewUser('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Following</h2>
      <div className="following-list">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button className="button" onClick={handleFollow}>Follow</button>
      </div>

      {following.length > 0 ? (
        <ul>
          {following.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <button className="button" onClick={() => unfollowUser(user.id)}>Unfollow</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You are not following anyone yet.</p>
      )}
    </div>
  );
};

export default FollowingList;