const main = () => {
  const oneDay = 24 * 60 * 60 * 1000;

  // Create dates
  // Months are indexed at 0
  const pessimisticDate = new Date(2021, 08, 30);
  const realisticDate = new Date(2021, 08, 15);
  const optimisticDate = new Date(2021, 07, 30);
  const today = new Date();

  const pessimisticDays = Math.round(Math.abs((pessimisticDate - today) / oneDay));
  const realisticDays = Math.round(Math.abs((realisticDate - today) / oneDay));
  const optimisticDays = Math.round(Math.abs((optimisticDate - today) / oneDay));

  // Get elements for date display
  document.getElementById('pessimistic').innerHTML = pessimisticDays;
  document.getElementById('realistic').innerHTML = realisticDays;
  document.getElementById('optimistic').innerHTML = optimisticDays;
}
