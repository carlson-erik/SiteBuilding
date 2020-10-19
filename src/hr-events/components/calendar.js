import React, { useState } from 'react';
import styled from 'styled-components';
/* ------------ Static Values & Functions ------------ */
import { getMonthDates } from '../utils';
import { monthFirstDay_2020, daysOfWeek, YEAR } from '../constants';
/* ------------ Styled Components ------------ */
import { Button, Icon, Link } from '../../global/styled-components';
const ContentHeader = styled.header`
  height: 3rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  background-color: #ffffff;
  max-width: 1260px;
  display: flex;
  flex-direction: column;
`;

const PageHeaderText = styled.h2`
font-weight: 600;
`;

const CalendarContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  color: #7d9eb5;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const DateRow = styled(Row)`
  height: 3rem;
  border-top: 1px solid #dfe7ee;
`;

const CalendarRow = styled(Row)`
  border-top: 1px solid #dfe7ee;
  flex: 1 0 ${props => props.hasEvents ? '20%' : '5%'};
  ${props => !props.hasEvents ? 'max-height: 8rem;' : ''}
  ${props => props.lastRow ? `
  border-bottom: 1px solid #dfe7ee;
  `: ''}
`;

const Cell = styled.div`
  flex: 1 0 14%;
  display: flex;
`;

const BodyCell = styled(Cell)`
  border-right: 1px solid #dfe7ee;
  flex-direction: column;
  display: flex;
  height: 100%;

  ${props => props.firstCell ? `
    border-left: 1px solid #dfe7ee;
  `: ''}
`;

const HeaderCell = styled(Cell)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dfe7ee;

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
  height: 2rem;
`;

const CellBodyRow = styled(Row)`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

const EventsList = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction:column;
  height: 100%;
  color:red;
`;

const EventContainer = styled.div`
  width: 100%;
  font-size: 14px;
  min-height: 1.25rem;
  background-color: ${props => props.secondaryColor || '#e4e7f4'};
  border-top: 3px solid ${props => props.primeColor || '#5670ee'};
  color: ${props => props.primeColor || '#5670ee'};

  ${props => props.multipleEvents
    ? `margin-bottom: 0.25rem;`
    : `flex-grow: 1;`
  }
`;

const EventTime = styled.div`
  padding: 0.25rem 0 0.25rem 0.5rem;
`;

const EventDescription = styled.div`
  font-weight: 500;
  padding: 0 0 0 0.5rem;
`;

const CalendarControls = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
`;

const MonthLabel = styled.h3`
  padding: 1rem 1rem 1rem 1rem;
  min-width: 12rem;
`;

const CalendarButton = styled(Button)`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem; 
  border: 1px solid #4a7189;
  background-color: white;
  color: #4a7189;
  font-weight: 500;
  font-size: 14px;

  &:focus {
    outline-color: #8f9cb2;
  }
`;

const ArrowButton = styled(CalendarButton)`
padding: 0.25rem 0 0.25rem 0; ; 
`;

const MonthSelectors = styled.div`
  display: flex;
  padding-right: 1rem;
`;

function CalendarCell(props) {
  const { day, dayIndex, events } = props;
  return (
    <BodyCell
      firstCell={dayIndex === 0}
    >
      {day.date !== 0
        ? <React.Fragment>
          <CellDateRow>{day.date}</CellDateRow>
          <CellBodyRow hasEvents={events && events.length >= 1}>
            <EventsList>
              {events
                ? events.map((event, index) => {
                  const primeColor = event.colors && event.colors.prime ? event.colors.prime : null;
                  const secondaryColor = event.colors && event.colors.secondary ? event.colors.secondary : null;

                  // Only really need to show a couple of events to draw a click
                  if (events.length > 4 && index > 4) {
                    return null;
                  }

                  return (
                    <EventContainer
                      key={event.id}
                      multipleEvents={events.length > 1}
                      primeColor={primeColor}
                      secondaryColor={secondaryColor}
                    >
                      {events.length <= 2
                        ? <EventTime>{event.time}</EventTime>
                        : null
                      }
                      {events.length < 2
                        ? <EventDescription>{event.shortDescription}</EventDescription>
                        : null
                      }
                    </EventContainer>
                  )
                })
                : null
              }
            </EventsList>
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
  const month = monthFirstDay_2020[monthIndex];
  const { monthWeeks } = getMonthDates(month);
  const userEvents = {
    '10-4': [
      {
        id: '18df-99ax-21vk-lmmk',
        time: '17:30 PM',
        shortDescription: '1-on-1 with Manager',
        colors: {
          prime: '#ea293b',
          secondary: '#f3e0e1',
        }
      }
    ],
    '10-9': [
      {
        id: '18df-99ax-21vk-lmmk',
        time: '11:00 AM',
        shortDescription: 'Performance Review',
        colors: {
          prime: '#ea293b', // red
          secondary: '#f3e0e1', // red
        }
      },
      {
        id: '18df-99ax-21vk-jjd7',
        time: '16:00 PM',
        shortDescription: 'Client Meeting',
        colors: {
          prime: '#ff9931', // orange
          secondary: '#fff4ea', // orange
        }
      },
      {
        id: '18df-99ax-21vk-jjd7',
        time: '16:00 PM',
        shortDescription: 'Code Review',
      },
      {
        id: '18df-99ax-21vk-jjd7',
        time: '16:00 PM',
        shortDescription: 'DevOps Meeting',
        colors: {
          prime: '#07c180', // green
          secondary: '#e6f8f2', // green
        }
      }
    ],
    '10-16': [
      {
        id: '18df-99ax-21vk-lmmk',
        time: '11:00 AM',
        shortDescription: 'Tasking Session',
      },
      {
        id: '18df-99ax-21vk-jjd7',
        time: '16:00 PM',
        shortDescription: 'Code Review',
      }
    ],
    '10-20': [
      {
        id: '18df-99ax-28kk-ksdm',
        time: '10:15 AM',
        shortDescription: 'Client Meeting',
        colors: {
          prime: '#ff9931', // orange
          secondary: '#fff4ea', // orange
        }
      }
    ],
    '10-29': [{
      id: '18df-99ax-92ks-jdas',
      time: '13:30 PM',
      shortDescription: 'Project Release Meeting',
      colors: {
        prime: '#07c180', // green
        secondary: '#e6f8f2', // green
      }
    }],
  };

  const decreaseMonth = () => {
    if(!(monthIndex - 1 < 0) ){
      setMonthIndex(monthIndex - 1);
    }
  };

  const increaseMonth = () => {
    if(!(monthIndex + 1 > 11) ){
      setMonthIndex(monthIndex + 1);
    }
  };

  return (
    <React.Fragment>
      <ContentHeader>
        <PageHeaderText>
          Events
        </PageHeaderText>
      </ContentHeader>
      <ContentContainer>
        <CalendarControls>
          <MonthLabel>{month.label} {YEAR}</MonthLabel>
          <MonthSelectors>
            <Link>
              <ArrowButton onClick={() => decreaseMonth()}>
                <Icon color='#4a7189'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Icon>
              </ArrowButton>
            </Link>
            <Link>
              <ArrowButton onClick={() => increaseMonth()}>
                <Icon color='#4a7189'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Icon>
              </ArrowButton>
            </Link>
          </MonthSelectors>
          <Link>
            <CalendarButton>
              Today
            </CalendarButton>
          </Link>

        </CalendarControls>
        <CalendarContainer>
          <DateRow>
            {daysOfWeek.map((day, index) => (
              <HeaderCell
                key={day.key}
                firstCell={index === 0}
                lastCell={index === daysOfWeek.length - 1}>
                <Label>
                  {day.label}
                </Label>
              </HeaderCell>
            ))}
          </DateRow>
          <CalendarBody>
            {monthWeeks.map((week, weekIndex) => (
              <CalendarRow
                key={`week-${weekIndex}`}
                lastRow={weekIndex === monthWeeks.length - 1} >
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