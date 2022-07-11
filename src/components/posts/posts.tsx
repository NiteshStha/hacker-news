import { useEffect, useState } from 'react';
import { slicePostsIntoChunks } from '../../utilities/slice-posts-into-chunks';
import { url } from '../../utilities/url';
import Post from '../post/post';

const Posts = () => {
  const [posts, setPosts] = useState<number[]>([]);
  const [displayPosts, setDisplayPosts] = useState<number[]>([]);
  const [postsChunks, setPostsChunks] = useState<number[][]>([]);
  const [displaySize, setDisplaySize] = useState<number>(0);

  /**
   * Fetch Posts from Hacker News on component mount
   */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url.topStories);
      const output = (await response.json()) as number[];
      setPosts(output);
    }

    fetchData();
  }, []);

  /**
   * Convert fetched posts into chunks of 30
   */
  useEffect(() => {
    const chunks = slicePostsIntoChunks(posts, 100);
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
    <div>
      <ul>
        {displayPosts &&
          displayPosts.map((post) => <Post key={post} id={post} />)}
      </ul>
      {displaySize < postsChunks.length - 1 && (
        <button onClick={showMore}>More</button>
      )}
    </div>
  );
};

export default Posts;
