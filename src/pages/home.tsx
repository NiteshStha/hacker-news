import Navbar from '../components/navbar/navbar';
import Posts from '../components/posts/posts';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Posts />
      </div>
    </>
  );
};

export default Home;
