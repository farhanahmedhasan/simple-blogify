import Home from './pages/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Create } from './components/Create';
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
