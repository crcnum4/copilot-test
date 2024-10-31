import React from 'react';

interface TweetProps {
  username: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content }) => (
  <div className="tweet">
    <h3>{username}</h3>
    <p>{content}</p>
  </div>
);

export default Tweet;