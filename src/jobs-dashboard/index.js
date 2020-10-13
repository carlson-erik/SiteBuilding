import React from 'react';
import styled from 'styled-components';
/* ------------ Components ------------ */
import Header from './components/header';
import PagePanel from './components/page-panel';
import FilterTable from './components/filter-table';
/* ------------ Styled Components ------------ */
const SiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  font-family: Helvetica;
  display: flex;
  flex-direction: column;

  & *:focus {
    outline-color: #1e86ff;
  }
`;

const Main = styled.main`
  height: calc(100% - 8rem);
  width: 100%;
  display: flex;
`;

const PanelContainer = styled.div`
  min-width: 14rem;
  background-color: white;
  border-right: 1px solid #edeff3;
  display: flex;
  flex-direction: column;

  * .icon {
    padding: 0 0 0 2rem;
    margin: 0 0.25rem 0 0; 
  }
`;

const PageContent = styled.div`
  width: 100%;
  background-color: #fafbfd;
  padding: 20px;
  display: flex;
  overflow-y: auto;
`;

const DashboardContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 100%;
`;

function JobsDashboard() {
  // update document title
  document.title = 'Jobs List';
  return (
    <SiteContainer>
      <Header />
      <Main>
        <PanelContainer>
          <PagePanel />
        </PanelContainer>
        <PageContent>
          <DashboardContainer>
            <FilterTable />
          </DashboardContainer>
        </PageContent>
      </Main>
    </SiteContainer>
  );
}

export default JobsDashboard;
