import React from 'react';

const TotalCalories = ({ entries }) => {
  const total = entries.reduce((sum, entry) => sum + entry.total_calories, 0);
  return <h4>Итого: {total.toFixed(1)} ккал</h4>;
};

export default TotalCalories;