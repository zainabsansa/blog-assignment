import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Blog from '../src/pages/Blogs/Blog'
import Article from '../src/pages/Article/Article'
import './App.css'
// import About from './About/About'
// import Blogs from './Blogs/Blog'
// import Article from './Article/Article'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
      </Routes>
  );
}

export default App;
