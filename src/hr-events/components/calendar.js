import React, { useState } from 'react';
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

const YEAR = 2020;

const isLeapYear = YEAR % 4 === 0;

const firstDaysOfMonth = [
  {
    month: 'January',
    length: 31,
    firstDayIndex: 3
  },
  {
    month: 'February',
    length: isLeapYear ? 29: 28,
    firstDayIndex: 6,
  },
  {
    month: 'March',
    length: 31,
    firstDayIndex: 0,
  },
  {
    month: 'April',
    length: 30,
    firstDayIndex: 3
  },
  {
    month: 'May',
    length: 31,
    firstDayIndex: 5
  },
  {
    month: 'June',
    length: 30,
    firstDayIndex: 1
  },
  {
    month: 'July',
    length: 31,
    firstDayIndex: 3
  },
  {
    month: 'August',
    length: 31,
    firstDayIndex: 6
  },
  {
    month: 'September',
    length: 30,
    firstDayIndex: 2
  },
  {
    month: 'October',
    length: 31,
    firstDayIndex: 4
  },
  {
    month: 'November',
    length: 30,
    firstDayIndex: 0
  },
  {
    month: 'December',
    length: 31,
    firstDayIndex: 2
  },
]

function getMonthDates(month){
  const {length, firstDayIndex} = month;

  const monthDates = [];

  if(firstDayIndex > 0 ){
    for(let i = 0; i < firstDayIndex; i++){
      monthDates.push({
        date: 0,
        events: [],
      });
    }
  }

  let weekDay = monthDates.length;

  for( let i = 1; i <= length; i ++){
    monthDates.push({
      date: i,
      day: daysOfWeek[weekDay++ % 7],
      events: []
    })
  }

  if(length + firstDayIndex !== 35 ){
    for(let i = 0; i < (35 - (length + firstDayIndex)); i++){
      monthDates.push({
        date: 0,
        events: [],
      });
    }
  }

  return monthDates;
}

function Calendar() {
  const [monthIndex, setMonthIndex] = useState(9);

  console.log('firstDaysOfMonth:', firstDaysOfMonth);
  console.log('currentMonth:\n', firstDaysOfMonth[monthIndex])
  console.log('current month dates:\n', getMonthDates(firstDaysOfMonth[monthIndex]));
  
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