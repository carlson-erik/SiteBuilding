import React from 'react';
import styled from 'styled-components';
import PagePanel from './components/page-panel'; 
import Calendar from './components/calendar';
/* ------------ Styled Components ------------ */
const SiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  font-family: 'Poppins', sans-serif;
`;

const PanelContainer = styled.div`
  min-width: 16rem;
  height: 100%;
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #eeeff1;
`;

function HREvents() {
  // update document title
  document.title = 'Events Calendar';
  return (
    <SiteContainer>
      <PanelContainer>
        <PagePanel />
      </PanelContainer>
      <Main>
        <Calendar />
      </Main>
    </SiteContainer>
  )
}

export default HREvents;