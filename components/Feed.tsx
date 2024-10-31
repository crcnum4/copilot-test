import React from 'react';
import Tweet from './Tweet';

const Feed: React.FC = () => {
  const tweets = [
    { username: 'user1', content: 'Hello World!' },
    { username: 'user2', content: 'Next.js is awesome!' },
  ];

  return (
    <div className="feed">
      {tweets.map((tweet, index) => (
        <Tweet key={index} username={tweet.username} content={tweet.content} />
      ))}
    </div>
  );
};

export default Feed;