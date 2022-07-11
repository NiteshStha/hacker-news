import Comments from '../components/comments/comments';
import Navbar from '../components/navbar/navbar';

const CommentsPage = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Comments />
      </div>
    </>
  );
};

export default CommentsPage;
