
import React from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom';

function Sidebar({ isVisible, toggleSidebar }) {
  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        <SwapHorizIcon /> Side Bar
      </button>
      <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
        <div className="sidebar-content" style={{ marginTop: '50px' }}>
          <ul>
            <li>
              <Link to="/">Home cnbuddy 主页</Link>
            </li>
            <li>
              <Link to="/cnbuddy-delegator">cnbuddy-Delagator 代理名单查询</Link>
            </li>
            <li>
              <Link to="/buddy-forever-intro">buddy-forever Introduction 介绍</Link>
            </li>
            <li>
              <Link to="/buddy-forever-voting">buddy-forever voting list 点赞名单</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
