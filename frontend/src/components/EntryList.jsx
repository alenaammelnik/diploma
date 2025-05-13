import React from 'react';

const EntryList = ({ entries }) => (
  <ul className="list">
    {entries.map((entry) => (
      <li key={entry.id}>
        {entry.name} — {entry.weight} г — {entry.total_calories.toFixed(1)} ккал
      </li>
    ))}
  </ul>
);

export default EntryList;
