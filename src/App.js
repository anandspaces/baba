import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import Dashboard from './components/Home';
import Dashboard2 from './components/Home2';
import Dashboard3 from './components/Home3';
import Profile from './components/Profile';
import Message from './components/Message';

function App() {
  return (
    <Router>
      <Navigation />
      <Navigation2 />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
