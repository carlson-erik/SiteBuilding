import React from 'react';
import Select from 'react-dropdown-select';

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
    createDate: 'Mar 3, 2020',
    label: 'Senior Front-end Engineer',
    location: 'Boston, MA',
    candidates: 45,
  },
  {
    id: 'ui-ux-designer-1',
    createDate: 'Apr 17, 2020',
    label: 'UI/UX Designer',
    location: 'Atlanta, GA',
    candidates: 19,
  },
  {
    id: 'back-end-dev-1',
    createDate: 'Jul 5, 2020',
    label: 'Back-end Engineer',
    location: 'Portland, OR',
    candidates: 3,
  },
  {
    id: 'product-owner-1',
    createDate: 'Jul 13, 2020',
    label: 'Product Owner',
    location: 'Portland, OR',
    candidates: 57,
  },
  {
    id: 'ui-ux-designer-2',
    createDate: 'Oct 31, 2020',
    label: 'UI/UX Designer',
    location: 'San Francisco, CA',
    candidates: 87,
  },
  {
    id: 'back-end-dev-2',
    createDate: 'Feb 14, 2020',
    label: 'Back-end Engineer',
    location: 'Seattle, WA',
    candidates: 14,
  },
  {
    id: 'front-end-dev-3',
    createDate: 'Mar 3, 2020',
    label: 'Front-end Engineer',
    location: 'Houston, TX',
    candidates: 22,
  },
  {
    id: 'ui-ux-designer-3',
    createDate: 'Nov 11, 2020',
    label: 'UI/UX Designer',
    location: 'New York, NY',
    candidates: 1,
  },
];

const options = [
  {
    "id": "c8bd0fc1-e522-4d51-a1c8-66c2ab973df7",
    "label": "German",
    "value": "german",
  },
  {
    "id": "ce54a958-9dd6-4ec6-a0a8-07651e3319ef",
    "label": "English",
    "value": "english",
  },
  {
    "id": "aa30c740-98cb-4225-8dc6-58c56181ad01",
    "label": "Italian",
    "value": "italian",
  },
  {
    "id": "a48sda34sd-98kh-4225-8yt6-58ggqd5ad01",
    "label": "French",
    "value": "french",
  },
];

function FilterTable() {
  return (
    <React.Fragment>
      <div className='card' id='dashboard-filter'>
        <div id='filter-container'>
          <div className='filter'>
            <Select
              placeholder='All Jobs'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </div>
          <div className='filter'>
            <Select
              multi
              placeholder='Skills'
              options={options}
              values={[]}
              onChange={(value) => console.log(value)}
              itemRenderer={({ item, methods }) => {
                return (
                  <div className='select-item'>
                    {item.disabled ? (
                      <div aria-disabled>{item.label}</div>
                    ) : (
                        <div onClick={() => methods.addItem(item)}>
                          <input onChange={() => methods.addItem(item)} type="checkbox" checked={methods.isSelected(item)} /> {item.label}
                        </div>
                      )}
                  </div>
                );
              }}
            />
          </div>
          <div className='filter'>
            <Select
              placeholder='Category'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </div>
          <div className='filter'>
            <Select
              placeholder='Date Range'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </div>

        </div>
        <div id='show-all-filters'>
          <a href="#" className='link'>
            Show all filters
                  <span className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>
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
                <span>{candidates} Candidates</span>
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

    </React.Fragment>
  )
}

export default FilterTable;