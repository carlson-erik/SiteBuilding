import React, { useState } from 'react';
import styled from 'styled-components';
/* ------------ Static Values & Functions ------------ */
import { getMonthDates } from '../utils';
import { monthFirstDay_2020, daysOfWeek } from '../constants';
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
  flex: 1 0 ${props => props.hasEvents ? '20%' : '5%'};
`;

const Cell = styled.div`
  flex: 1 0 14%;
  display: flex;
`;

const BodyCell = styled(Cell)`
  border: 1px solid #dfe7ee;
  flex-direction: column;
  display: flex;
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

const CellDateRow = styled(Row)`
  padding: 0.25rem 0 0 0.5rem;
`;

const CellBodyRow = styled(Row)`
  display: flex;
  flex-direction: column;
`;

const EventContainer = styled.div`
  width: 100%;
  font-size: 14px;
  background-color: ${props => props.secondaryColor || '#e4e7f4'};
  border-top: 3px solid ${props => props.primeColor || '#5670ee'};
  color: ${props => props.primeColor || '#5670ee'};
  
  ${props => props.multipleEvents
    ? `
    margin-bottom: 0.25rem;
    
    & > * {
      padding: 0.25rem 0 0.25rem 0.5rem;
    }
    `
    : ''
  }
`;

const EventTime = styled.div`
`;

const EventDescription = styled.div`
font-weight: 500;
`;

function CalendarCell(props) {
  const { day, events} = props;
  return (
    <BodyCell>
      {day.date !== 0
        ? <React.Fragment>
          <CellDateRow>{day.date}</CellDateRow>
          <CellBodyRow hasEvents={events && events.length >= 1}>
            { events
              ? events.map( event => {
                const primeColor = event.colors && event.colors.prime ? event.colors.prime : null;
                const secondaryColor = event.colors && event.colors.secondary ? event.colors.secondary : null;
                return(
                  <EventContainer 
                    key={event.id} 
                    multipleEvents={events.length > 1}
                    primeColor={primeColor}
                    secondaryColor={secondaryColor}
                  >
                    <EventTime>{event.time}</EventTime>
                    {events.length <= 2 
                      ? <EventDescription>{event.shortDescription}</EventDescription>
                      : null
                    }
                  </EventContainer>
                )
              })
              : null
            }
          </CellBodyRow>
        </React.Fragment>
        : null
      }
    </BodyCell>
  )
}

/* ------------ Component ------------ */
function Calendar() {
  const [monthIndex, setMonthIndex] = useState(9);
  const { monthWeeks } = getMonthDates(monthFirstDay_2020[monthIndex]);
  const userEvents = {
    '10-4': [{
      id: '18df-99ax-21vk-lmmk',
      time: '17:30 PM',
      shortDescription: 'Meeting with boss',
      colors: {
        prime: '#ea293b', // default: #5670ee
        secondary: '#f3e0e1', // default: #e4e7f4
      }
    }],
    '10-9': [{
      id: '18df-99ax-21vk-lmmk',
      time: '13:30 PM',
      shortDescription: 'Tasking Session',
    },
    {
      id: '18df-99ax-21vk-jjd7',
      time: '15:30 PM',
      shortDescription: 'Code Review',
    }
  ],
  };
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
                lastCell={index === daysOfWeek.length - 1}
              >
                <Label>
                  {day.label}
                </Label>
              </HeaderCell>
            ))}
          </DateRow>
          <CalendarBody>
            {monthWeeks.map((week, weekIndex) => (
              <CalendarRow key={`week-${weekIndex}`}>
                {week.map((day, dayIndex) =>
                  <CalendarCell 
                    key={`week-${weekIndex}-${dayIndex}`}
                    day={day} 
                    dayIndex={dayIndex} 
                    events={userEvents[`${monthIndex + 1}-${day.date}`]}
                  />
                )}
              </CalendarRow>
            ))}
          </CalendarBody>
        </CalendarContainer>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Calendar;