import { Routes, Route }  from "react-router-dom";
import Home from './components/home';
import Posts from './components/posts';
import Login from './components/login';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NoMatch from './components/NoMatch';
import Message from './components/messages';

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Message />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
