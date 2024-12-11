import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import WorkSamples from './pages/WorkSamples';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Haqqında</Link></li>
            <li><Link to="/work-samples">Iş nümunələri</Link></li>
            <li><Link to="/contact">Əlaqə</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work-samples" element={<WorkSamples />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;








