import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/blogPage';
import BlogDetailPage from './pages/blogDetail';
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<BlogPage />} />
              <Route path="/blog" element={<BlogDetailPage />} />
          </Routes>
      </Router>
  );
}

export default App;
