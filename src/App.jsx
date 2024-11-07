import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
// import About from './About/About'
// import Blogs from './Blogs/Blog'
// import Article from './Article/Article'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/article" element={<Article />} /> */}
      </Routes>
  );
}

export default App;
