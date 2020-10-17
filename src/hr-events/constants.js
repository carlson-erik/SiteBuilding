const YEAR = 2020;

const isLeapYear = YEAR % 4 === 0;

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


const monthFirstDay_2020 = [
  {
    month: 'January',
    length: 31,
    firstDayIndex: 3
  },
  {
    month: 'February',
    length: isLeapYear ? 29 : 28,
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


export {
  YEAR,
  isLeapYear,
  daysOfWeek,
  monthFirstDay_2020
};