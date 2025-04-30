import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Főoldal</Link>
        <Link to="/books">Könyvek</Link>
        <Link to="/contact">Kapcsolat</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
