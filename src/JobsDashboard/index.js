import React from 'react';
import ProfilePicture from './img/profile-picture.png'
import './css/reset.css';
import './css/index.css';

function JobsDashboard() {
  // update document title
  document.title = 'Join | Jobs';
  return (
    <div id="dashboard-container">
      <header>
        <div id="brand">
          <h1 id='logo'>JOIN</h1>
        </div>
        <div id="page-navigation">
          <div id='context-bar'>
            <div id='search-bar'>
              <input type="text" placeholder="Search for jobs, candidates, ..." />
            </div>
            <div id='user-navigation'>
              <div id='user-navigation-links'>
                <a href="#" className='link'>
                  <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </span>
                  Store
                </a>
                <button className='link'>
                  <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                  Create new job
                </button>
                <div id='user-profile'>
                  <img id='profile-icon' src={ProfilePicture} alt='User profile picture' />
                  <span id='user-name'>Erik C.</span>
                  <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li>Candidates</li>
              <li>Pipeline</li>
              <li>Free job boards</li>
              <li className='active'>Premium job boards</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div id="page-panel">
          <ul>
            <li>Dashboard</li>
            <li>Jobs</li>
            <li>Candidates</li>
            <li>Company</li>
            <li>Settings</li>
          </ul>
        </div>
        <div id="page-content">
          page content
        </div>
      </main>
    </div>
  );
}

export default JobsDashboard;
