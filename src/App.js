import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import CnbuddyDelegator from './CnbuddyDelegator';
import BuddyForeverIntro from './BuddyForeverIntro';
import BuddyForeverVoting from './BuddyForeverVoting';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div className={`content ${sidebarVisible ? '' : 'expanded'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cnbuddy-delegator" element={<CnbuddyDelegator />} />
            <Route path="/buddy-forever-intro" element={<BuddyForeverIntro />} />
            <Route path="/buddy-forever-voting" element={<BuddyForeverVoting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
