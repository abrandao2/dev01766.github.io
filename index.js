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
  const pessimisticDate = new Date(2021, 08, 30);
  const realisticDate = new Date(2021, 08, 15);
  const optimisticDate = new Date(2021, 08, 01);
  const today = new Date();

  const sunset = sunsets[today.getMonth() + 1][today.getDate()];
  const pessimisticDays = Math.round(Math.abs((pessimisticDate - today) / oneDay));
  const realisticDays = Math.round(Math.abs((realisticDate - today) / oneDay));
  const optimisticDays = Math.round(Math.abs((optimisticDate - today) / oneDay));

  // Get elements for date display
  document.getElementById('sunset').innerHTML = sunset;
  document.getElementById('pessimistic').innerHTML = pessimisticDays;
  document.getElementById('realistic').innerHTML = realisticDays;
  document.getElementById('optimistic').innerHTML = optimisticDays;
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});