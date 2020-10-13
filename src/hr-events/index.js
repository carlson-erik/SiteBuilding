import React from 'react';
import styled from 'styled-components';
/* ------------ Styled Components ------------ */
const SiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const PanelContainer = styled.div`
  min-width: 16rem;
  background-color: white;
  border-right: 1px solid #edeff3;
`;

const Main = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

const ContentHeader = styled.header`
  height: 3rem;
  margin: 0 0 1rem 0;
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: calc(100% - 4rem);
  background-color: lightgreen;
`;

function HREvents() {
  // update document title
  document.title = 'Events Calendar';
  return (
    <SiteContainer>
      <PanelContainer>
        Page Panel
      </PanelContainer>
      <Main>
        <ContentHeader>
          <h1>Events</h1>
        </ContentHeader>
        <CalendarContainer>
          Events Calendar Content
        </CalendarContainer>
      </Main>
    </SiteContainer>
  )
}

export default HREvents;