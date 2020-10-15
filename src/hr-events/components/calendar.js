import React from 'react';
import styled from 'styled-components';
/* ------------ Styled Components ------------ */
const ContentHeader = styled.header`
  height: 3rem;
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  background-color: #f5f5f5;
`;

const EventsText = styled.h2`
  font-weight: 600;
`;

function Calendar() {
  return (
    <React.Fragment>
      <ContentHeader>
        <EventsText>
          Events
        </EventsText>
      </ContentHeader>
      <CalendarContainer>
      </CalendarContainer>
    </React.Fragment>
  )
}

export default Calendar;