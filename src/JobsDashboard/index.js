import React from 'react';
import ProfilePicture from './img/profile-picture.png'
import './css/reset.css';
import './css/index.css';

const job_data = [
  {
    id: 'front-end-dev-1',
    createDate: 'Feb 23, 2020',
    label: 'Front-end Engineer',
    location: 'Boston, MA',
    candidates: 67,
  },
  {
    id: 'front-end-dev-2',
    createDate: 'March 3, 2020',
    label: 'Senior Front-end Engineer',
    location: 'Boston, MA',
    candidates: 45,
  },
  {
    id: 'ui-ux-designer-1',
    createDate: 'April 17, 2020',
    label: 'UI/UX Designer',
    location: 'Atlanta, GA',
    candidates: 19,
  },
  {
    id: 'back-end-dev-1',
    createDate: '02/23/20',
    label: 'Back-end Engineer',
    location: 'Portland, OR',
    candidates: 3,
  },
  {
    id: 'product-owner-1',
    createDate: '02/23/20',
    label: 'Product Owner',
    location: 'Portland, OR',
    candidates: 57,
  },
  {
    id: 'ui-ux-designer-2',
    createDate: '02/23/20',
    label: 'UI/UX Designer',
    location: 'San Francisco, CA',
    candidates: 87,
  },
];

function JobsDashboard() {
  // update document title
  document.title = 'Jobs List';
  return (
    <div id="site-container">
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
      <main>
        <div id="page-panel">
          <div id='panel-navigation'>
            <ul>
              <li>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </span>
              Dashboard
            </li>
              <li className='active'>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                  </svg>
                </span>
              Jobs
            </li>
              <li>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              Candidates
            </li>
              <li>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Company
            </li>
              <li>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              Settings
            </li>
            </ul>
          </div>
          <div id='support'>
            <span className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
              Support
          </div>
        </div>
        <div id="page-content" >
          <div id='dashboard-container'>
            <div className='card' id='dashboard-filter'>
              <div>All Jobs</div>
              <div>Skills</div>
              <div>Category</div>
              <div>Date Range</div>
            </div>
            {job_data.map(job => {
              const { id, label, location, createDate, candidates } = job;
              return (
                <div key={id} className='card job'>
                  <div className='job-data'>
                    <div className='data-column job-title'>
                      <span className='job-label'>{label}</span>
                      <span className='job-location'>{location}</span>
                    </div>
                    <div className='data-column'>
                      <span>{createDate}</span>
                    </div>
                    <div className='data-column'>
                      <span>{candidates}</span>
                    </div>
                  </div>
                  <div className='actions'>
                    <a href='#' className='link-button primary'>
                      <button tabIndex="-1">
                        <span className='icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </span>
                      Promote
                    </button>
                    </a>
                    <a href='#' className='link-button menu' tabIndex="-1">
                      <button>
                        <span className='icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              )
            })}
            <footer>footer stuff</footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JobsDashboard;
