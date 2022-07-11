import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommentsPage from './pages/comments';
import Home from './pages/home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments/:id" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
