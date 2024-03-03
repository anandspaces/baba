import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import Dashboard from './components/Home';
import Profile from './components/Profile';
import Message from './components/Message';
import ProfileSettings from './components/ProfileSettings';
import Post from './components/Home3';
import NewsFeed from './components/Home2';

function App() {
  return (
    <Router>
      <Navigation />
      <Navigation2 />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard2" element={<NewsFeed />} />
        <Route path="/dashboard3" element={<Post />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilesetting" element={<ProfileSettings />} />
      </Routes>
      <NewsFeed />
      <Post />
      <Footer />
    </Router>
  );
}

export default App;
