import React from 'react';
/* ------------ Media Assets ------------ */
import ProfilePicture from '../img/profile-picture.png'

function Header() {
  return (
    <header>
      <div id="brand">
        <h1 id='logo'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          jobs
        </h1>
      </div>
      <div id="page-navigation">
        <div id='context-bar'>
          <div id='search-bar-container'>
            <div id='search-bar'>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input type="text" placeholder="Search for jobs, candidates,.." />
            </div>
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
              <a href="#" className='link-button'>
                <button className='link' tabIndex="-1">
                  <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                Create job
              </button>
              </a>
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
  )
};

export default Header;