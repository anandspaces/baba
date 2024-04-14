import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Message from './components/Message';
import ProfileSettings from './components/ProfileSettings';
import NewsFeed from './components/NewsFeed';
import MessageApp from './components/MessageApp';
import Comment from './components/Comment'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/message" element={<Message />} />
            <Route path="/todo" element={<MessageApp />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profilesetting" element={<ProfileSettings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
