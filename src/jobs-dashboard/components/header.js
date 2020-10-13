import React from 'react';
import styled from 'styled-components';
/* ------------ Components ------------ */
import Search from './search';
/* ------------ Media Assets ------------ */
import ProfilePicture from '../img/profile-picture.png'
/* ------------ Styled Components ------------ */
import { Link } from '../../global/styled-components/'; 
const Container = styled.header`
  width: 100%;
  display: flex;
  background-color: white;
  border-bottom: 1px solid #edeff3;
  height: 8rem;
`;

const Brand = styled.div`
  min-width: 14rem;
  display: flex;
  align-items: center;
  border-right: 1px solid #edeff3;
`;

const Logo = styled.h1`
  color: #1e86ff;
  padding: 0 0 0 2rem;
  font-size: 40px;
  text-transform: uppercase;

  & > svg {
    height: 32px;
  }
`;

const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavigationList = styled.ul`
  display: flex;
  margin: 0 0 0 2rem;
  padding: 0 0 0 2rem !important;
`;

const NavigationItem = styled.li`
  padding: 1rem 0 1rem 0;
  margin: 0 1rem 0 1rem;
  color: #7285a6;
  border-bottom: 2px solid transparent;
  list-style: none;

  &:hover {
    border-color: #1e86ff;
    color: #444758;
  }

  ${props => props.active ? `
    border-color: #1e86ff;
    color: #444758;
    font-weight: bold;
    ` : ''
  }
`;

const ContextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem 0 0 0;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;

const UserNavigation = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
`;

const UserLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 0;

  & > * {
    margin: 0 0 0 2rem;
  }
`;

const LinkButton = styled.button`
  width: fit-content;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
  background-color: #1e86ff;
`;


const UserProfile = styled.div`
  display: flex;
  align-items: center;

  & > .icon {
    color: #9faabd;
  }
`;

const ProfileIcon = styled.img`
  margin-right: 0.25rem;
  height: 2.5rem;
  border-radius: 2rem;
  border: 1px solid #edeff3;
`;

const UserName = styled.span`
  margin-right: 0.25rem;
  font-weight: bold;
  color: #213b61;

  @media only screen and (max-width: 1175px) {
    display: none;
  }
`;

// const 

function Header() {
  return (
    <Container>
      <Brand>
        <Logo>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          jobs
        </Logo>
      </Brand>
      <NavigationContainer>
        <ContextContainer>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <UserNavigation>
            <UserLinks>
              <Link href="#">
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                Store
              </Link>
              <Link href="#">
                <LinkButton tabIndex="-1">
                    <span className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  Create job
                </LinkButton>
              </Link>
              <UserProfile>
                <ProfileIcon src={ProfilePicture} alt='User profile picture' />
                <UserName>Erik C.</UserName>
                <span className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </UserProfile>
            </UserLinks>
          </UserNavigation>
        </ContextContainer>
        <nav>
          <NavigationList>
            <NavigationItem>Candidates</NavigationItem>
            <NavigationItem>Pipeline</NavigationItem>
            <NavigationItem>Free job boards</NavigationItem>
            <NavigationItem active >Premium job boards</NavigationItem>
          </NavigationList>
        </nav>
      </NavigationContainer>
    </Container>
  )
};

export default Header;