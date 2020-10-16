import React from 'react';
import styled from 'styled-components';
/* ------------ Styled Components ------------ */
const ContentHeader = styled.header`
  height: 3rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  background-color: #f5f5f5;
  max-width: 1260px;
`;

const EventsText = styled.h2`
  font-weight: 600;
`;

const CalendarContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const DateRow = styled(Row)`
  height: 3rem;
`;

const CalendarRow = styled(Row)`
  flex-grow: 1;
`;

const Cell = styled.div`
  flex: 1 0 14%;
  height: 100%;
`;

const HeaderCell = styled(Cell)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dfe7ee;
  border-top: 1px solid #dfe7ee;

  ${props => props.firstCell ? `
    border-left: 1px solid #dfe7ee;
    border-radius: 4px 0 0 0;
  `: ''}

  ${props => props.lastCell ? `
    border-left: 1px solid #dfe7ee;
    border-radius: 0 4px 0 0;
  `: ''}
`;

const Label = styled.span`
  height: fit-content;
  width: fit-content;
`;

const CalendarBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const daysOfWeek = [
  {
    label: 'Sun',
    key: 'sunday'
  },
  {
    label: 'Mon',
    key: 'monday'
  },
  {
    label: 'Tues',
    key: 'tuesday'
  },
  {
    label: 'Wed',
    key: 'wednesday'
  },
  {
    label: 'Thu',
    key: 'thursday'
  },
  {
    label: 'Fri',
    key: 'friday'
  },
  {
    label: 'Sat',
    key: 'saturday'
  }
];

function Calendar() {
  return (
    <React.Fragment>
      <ContentHeader>
        <EventsText>
          Events
        </EventsText>
      </ContentHeader>
      <ContentContainer>
        <CalendarContainer>
          <DateRow>
            {daysOfWeek.map((day, index) => (
              <HeaderCell 
                key={day.key} 
                firstCell={index === 0}
                lastCell={index === daysOfWeek.length-1}
              >
                <Label>
                  {day.label}
                </Label>
              </HeaderCell>
            ))}
          </DateRow>
          <CalendarBody>
            <CalendarRow>Week Data Here</CalendarRow>
            <CalendarRow>Week Data Here</CalendarRow>
            <CalendarRow>Week Data Here</CalendarRow>
            <CalendarRow>Week Data Here</CalendarRow>
            <CalendarRow>Week Data Here</CalendarRow>
          </CalendarBody>
        </CalendarContainer>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Calendar;