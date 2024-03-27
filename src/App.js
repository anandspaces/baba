import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Message from './components/Message';
import ProfileSettings from './components/ProfileSettings';
import NewsFeed from './components/NewsFeed';
import MessageApp from './components/MessageApp';

function App() {
  return (
    <Router>
      <Navigation />
      <Navigation2 />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/message" element={<Message />} />
        <Route path="/todo" element={<MessageApp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilesetting" element={<ProfileSettings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
