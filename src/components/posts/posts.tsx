import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { slicePostsIntoChunks } from '../../utilities/slice-posts-into-chunks';
import { HnUrl } from '../../utilities/url';
import Post from '../post/post';
import './posts.css';

const Posts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<number[]>([]);
  const [displayPosts, setDisplayPosts] = useState<number[]>([]);
  const [postsChunks, setPostsChunks] = useState<number[][]>([]);
  const [displaySize, setDisplaySize] = useState<number>(0);

  /**
   * Fetch Posts from Hacker News on component mount
   */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(HnUrl.topStories);
      const output = (await response.json()) as number[];
      setPosts(output);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  /**
   * Convert fetched posts into chunks of 30
   */
  useEffect(() => {
    const chunks = slicePostsIntoChunks(posts, 30);
    setPostsChunks(chunks);

    let showPosts: number[] = [];
    if (chunks && chunks[displaySize]) {
      for (let i = 0; i <= displaySize; i++) {
        showPosts = [...showPosts, ...chunks[i]];
      }
    }

    setDisplayPosts(showPosts);
  }, [posts, displaySize]);

  const showMore = () => {
    if (displaySize < postsChunks.length - 1) {
      setDisplaySize(displaySize + 1);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="posts-loader">
          <SyncLoader />
        </div>
      )}
      {!isLoading && (
        <>
          <ol className="post-list">
            {displayPosts &&
              displayPosts.map((post) => <Post key={post} id={post} />)}
          </ol>
          {displaySize < postsChunks.length - 1 && (
            <button className="show-more-btn" onClick={showMore}>
              More
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Posts;
