import React from 'react';
/* ------------ Styles ------------ */
import './index.css';
/* ------------ Components ------------ */
import Header from './components/header';
import PagePanel from './components/page-panel';
import FilterTable from './components/filter-table';

function JobsDashboard() {
  // update document title
  document.title = 'Jobs List';
  return (
    <div id="site-container">
      <Header />
      <main>
        <div id="page-panel">
          <PagePanel />
        </div>
        <div id="page-content" >
          <div id='dashboard-container'>
            <FilterTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default JobsDashboard;
