import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { PostObj } from '../../models/post';
import { HnUrl } from '../../utilities/url';
import './comment.css';

interface CommentProps {
  id: number;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { id } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [comment, setComment] = useState<PostObj>();
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(HnUrl.getUrl(`item/${id}.json`));
      const output = (await response.json()) as PostObj;
      setComment(output);
      setDate(new Date(output.time * 1000));
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && (
        <div className="post-loader">
          <BarLoader width={500} />
        </div>
      )}
      {!isLoading && comment?.text && (
        <li className="comment-li">
          <span className="comment-by">
            &Delta; {comment.by} {moment(date).fromNow()}
          </span>
          <span
            className="comment-text"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          ></span>
        </li>
      )}

      {comment?.kids && comment.kids.length > 0 && (
        <li>
          <ul className="post-list list-style-none">
            {comment.kids.map((c) => (
              <Comment key={c} id={c} />
            ))}
          </ul>
        </li>
      )}
    </>
  );
};

export default Comment;
