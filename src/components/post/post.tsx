import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostObj } from '../../models/post';
import { HnUrl } from '../../utilities/url';

interface PostProps {
  id: number;
}

const Post: React.FC<PostProps> = (props) => {
  const { id } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<PostObj>();
  const [date, setDate] = useState<Date>();

  /**
   * Fetch Post from Hacker News on component mount
   */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(HnUrl.getUrl(`item/${id}.json`));
      const output = (await response.json()) as PostObj;
      setPost(output);
      setDate(new Date(output.time * 1000));
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && <div className="post-loader">Loading.........</div>}
      {!isLoading && (
        <>
          {post && (
            <li key={id}>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="post-title"
              >
                {post.title}
              </a>
              <span className="post-details">
                {post.score} points by {post.by} {moment(date).fromNow()}
                {post.kids && (
                  <>
                    {' '}
                    |{' '}
                    <Link to={`/comments/${post.id}`}>
                      {post.descendants} Comments
                    </Link>
                  </>
                )}
              </span>
            </li>
          )}
        </>
      )}
    </>
  );
};

export default Post;
