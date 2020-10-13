import React from 'react';
import styled from 'styled-components';
/* ------------ Styled Components ------------ */
import { Icon } from '../../global/styled-components/';
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  background-color: white;
  border: 1px solid #e7eaee;
  border-radius: 0.5rem;
`;

const SearchIcon = styled(Icon)`
  padding-left: 1rem;
  color: #9faabd;

  & > svg {
    height: 20px
  }
`;

const SearchInput = styled.input`
  line-height: 1.5;
  width: 100%;
  border: none;
  color: #a7b0bc;
  padding: 0.5rem;
  
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 1175px) {
    width: 300px;
  }
`;

function Search() {
  return (
    <SearchBar>
      <SearchIcon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </SearchIcon>
      <SearchInput type="text" placeholder="Search for jobs, candidates,.." />
    </SearchBar>
  );
};

export default Search;