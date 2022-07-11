import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { PostObj } from '../../models/post';
import { HnUrl } from '../../utilities/url';
import Comment from '../comment/comment';
import './comments.css';

const Comments = () => {
  const { id: parentId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<PostObj>();
  const [comments, setComments] = useState<number[]>([]);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(HnUrl.getUrl(`item/${parentId}.json`));
      const output = (await response.json()) as PostObj;
      setPost(output);
      setDate(new Date(output.time * 1000));
      if (output && output.kids) {
        setComments(output.kids);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [parentId]);

  return (
    <>
      {isLoading && (
        <div className="posts-loader">
          <SyncLoader />
        </div>
      )}
      {!isLoading && (
        <>
          <h3 className="post-heading">{post?.title}</h3>
          <span className="post-heading-details post-details">
            {post?.score} points by {post?.by} {moment(date).fromNow()}
            {post?.kids && (
              <>
                {' '}
                |{' '}
                <Link to={`/comments/${post.id}`}>
                  {post.descendants} Comments
                </Link>
              </>
            )}
          </span>
          <ul className="post-list list-style-none">
            {comments &&
              comments.length > 0 &&
              comments.map((c) => <Comment key={c} id={c} />)}
          </ul>
        </>
      )}
    </>
  );
};

export default Comments;
