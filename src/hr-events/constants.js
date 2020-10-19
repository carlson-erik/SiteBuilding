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
    label: 'January',
    length: 31,
    firstDayIndex: 3
  },
  {
    label: 'February',
    length: isLeapYear ? 29 : 28,
    firstDayIndex: 6,
  },
  {
    label: 'March',
    length: 31,
    firstDayIndex: 0,
  },
  {
    label: 'April',
    length: 30,
    firstDayIndex: 3
  },
  {
    label: 'May',
    length: 31,
    firstDayIndex: 5
  },
  {
    label: 'June',
    length: 30,
    firstDayIndex: 1
  },
  {
    label: 'July',
    length: 31,
    firstDayIndex: 3
  },
  {
    label: 'August',
    length: 31,
    firstDayIndex: 6
  },
  {
    label: 'September',
    length: 30,
    firstDayIndex: 2
  },
  {
    label: 'October',
    length: 31,
    firstDayIndex: 4
  },
  {
    label: 'November',
    length: 30,
    firstDayIndex: 0
  },
  {
    label: 'December',
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