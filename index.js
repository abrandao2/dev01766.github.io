const sunsets = {
  8: {
    27: '20:16',
    28: '20:13',
    29: '20:10',
    30: '20:07',
    31: '20:04'
  },
  9: {
    1: '20:01',
    2: '19:58',
    3: '19:55',
    4: '19:52',
    5: '19:49'
  }
};

const main = () => {
  const oneDay = 24 * 60 * 60 * 1000;

  // Create dates
  // Months are indexed at 0
  const novemberFifteenth = new Date(2021, 10, 15);
  const decemberFifteenth = new Date(2021, 11, 15);
  const today = new Date();

  const sunset = sunsets[today.getMonth() + 1][today.getDate()];
  const daysToNovemberFifteenth = Math.round(Math.abs((novemberFifteenth - today) / oneDay));
  const daysToDecemberFifteenth = Math.round(Math.abs((decemberFifteenth - today) / oneDay));

  // Get elements for date display
  document.getElementById('days-to-november-fifteenth').innerHTML = daysToNovemberFifteenth > 0 ? daysToNovemberFifteenth : '-';
  document.getElementById('days-to-december-fifteenth').innerHTML = daysToDecemberFifteenth > 0 ? daysToDecemberFifteenth : '-';
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});