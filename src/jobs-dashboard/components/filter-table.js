import React from 'react';
import Select from 'react-dropdown-select';
import styled from 'styled-components';
/* ------------ Styled Components ------------ */
import { Link, Icon, Button } from '../../global/styled-components/';
const Card = styled.div`
  background-color: white;
  border: 1px solid #edeff3;
  width: 100%;
  border-radius: 0.5rem;
  -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.1);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
`;

const DashboardFilter = styled(Card)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  & > *:last-child{
    padding: 1rem 1rem 1rem 1rem;
  }
`;

const FilterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
`;

const ShowAllContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 1rem 1rem;
  align-self: flex-end;
`;

const Filter = styled.div`
  flex: 1 0 24%;
  padding: 1rem 0 1rem 1rem;

  &:last-child{
    padding: 1rem 1rem 1rem 1rem;
  }

  & > div > div {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 16px;
  }

  & div > input {
    font-size: 16px;
  }
`;

const SelectItem = styled.div`
  padding: 0.5rem;
  color: #555;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  * > div {
    display: flex;
    align-items: center;
  }

  & input {
    margin-right: 10px;
  }

  &:hover {
    background-color: #f4f9ff;
    color: #1e86ff;
  }
`;

const JobCard = styled(Card)`
  display: flex;
`;

const JobDataContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 1rem;
`;

const DataColumn = styled.div`
  flex: 1 0 33%;
  display: flex;
  align-items: center;
  color: #8f9cb2;

  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;

const JobTitle = styled.div`
  flex: 1 0 33%;
  display: flex;
  flex-direction: column;
  align-items: normal;
`;

const JobLabel = styled.span`
  font-weight: bold;
  color: #303446;
`;

const JobLocation = styled.span`
  color: #bac2d0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #edeff3;
`;

const PrimaryLink = styled(Link)`
  margin: 0 1rem 0 1rem;
`;

const PrimaryButton = styled(Button)`
  background-color: #e8f2ff;
  color: #1e86ff;
`;

const MenuButton = styled(Button)`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem; 
  margin-right: 1rem;
  border: 1px solid #edeff3;
  background-color: white;
  color: #8f9cb2;
`;

/* ------------ Render Data ------------ */
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
      <DashboardFilter>
        <FilterContainer>
          <Filter>
            <Select
              placeholder='All Jobs'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </Filter>
          <Filter>
            <Select
              multi
              placeholder='Skills'
              options={options}
              values={[]}
              onChange={(value) => console.log(value)}
              itemRenderer={({ item, methods }) => {
                return (
                  <SelectItem>
                    {item.disabled ? (
                      <div aria-disabled>{item.label}</div>
                    ) : (
                        <div onClick={() => methods.addItem(item)}>
                          <input onChange={() => methods.addItem(item)} type="checkbox" checked={methods.isSelected(item)} /> {item.label}
                        </div>
                      )}
                  </SelectItem>
                );
              }}
            />
          </Filter>
          <Filter>
            <Select
              placeholder='Category'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </Filter>
          <Filter>
            <Select
              placeholder='Date Range'
              options={[]}
              values={[]}
              onChange={(value) => console.log(value)}
            />
          </Filter>
        </FilterContainer>
        <ShowAllContainer>
          <Link>
            Show all filters
            <Icon color='#9faabd'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Icon>
          </Link>
        </ShowAllContainer>
      </DashboardFilter>
      {job_data.map(job => {
        const { id, label, location, createDate, candidates } = job;
        return (
          <JobCard key={id}>
            <JobDataContainer>
              <JobTitle>
                <JobLabel>{label}</JobLabel>
                <JobLocation>{location}</JobLocation>
              </JobTitle>
              <DataColumn>
                <span>{createDate}</span>
              </DataColumn>
              <DataColumn>
                <span>{candidates} Candidates</span>
              </DataColumn>
            </JobDataContainer>
            <Actions>
              <PrimaryLink href='#'>
                <PrimaryButton tabIndex="-1">
                  <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </Icon>
                  Promote
                </PrimaryButton>
              </PrimaryLink>
              <Link href='#' tabIndex="-1">
                <MenuButton>
                  <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </Icon>
                </MenuButton>
              </Link>
            </Actions>
          </JobCard>
        )
      })}

    </React.Fragment>
  )
}

export default FilterTable;