import React from 'react';

interface PostProps {
  id: number;
}

const Post: React.FC<PostProps> = (props) => {
  const { id } = props;
  return <li key={id}>{id}</li>;
};

export default Post;
