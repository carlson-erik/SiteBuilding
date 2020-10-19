import { daysOfWeek } from './constants';

function getMonthDates(month) {
  const { length, firstDayIndex } = month;
  const monthDates = [];
  const monthWeeks = [[]];
  let weekCounter = 0;
  let weekDay = firstDayIndex;

  if (firstDayIndex > 0) {
    for (let i = 0; i < firstDayIndex; i++) {
      monthDates.push({
        date: 0,
      });
      monthWeeks[weekCounter].push({
        date: 0,
      });
    }
  }

  for (let i = 0; i <= length - 1; i++) {
    if ((weekDay % 7 === 0) && i !== 0) {
      monthWeeks.push([]);
      if (i !== 0) {
        weekCounter++;
      }
    }
    monthDates.push({
      date: i + 1,
      day: daysOfWeek[weekDay % 7],
    });

    monthWeeks[weekCounter].push({
      date: i + 1,
      day: daysOfWeek[weekDay % 7],
    });

    weekDay++;
  }

  if (monthWeeks[weekCounter].length < 7) {
    for (let i = monthWeeks[weekCounter].length; i < 7; i++) {
      monthDates.push({date: 0});

      monthWeeks[weekCounter].push({date: 0});
    }
  }

  return {
    monthDates,
    monthWeeks
  };
}


export {
  getMonthDates
}