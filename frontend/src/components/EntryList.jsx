import React, { useState } from 'react';
import { getEntries } from '../api/entries';

const EntryList = ({ entries, setEntries }) => {
  const [filterDate, setFilterDate] = useState('');

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value; 
    setFilterDate(selectedDate);
  
    try {
      const isoDate = new Date(selectedDate).toISOString().slice(0, 10); 
      const res = await getEntries(isoDate);
      setEntries(res.data);
    } catch (error) {
      console.error('Ошибка при фильтрации:', error);
    }
  };

  return (
    <div>
      <label>
        Фильтровать по дате:{' '}
        <input
          type="date"
          value={filterDate}
          onChange={handleDateChange}
        />
      </label>
      <ul className="list">
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.name} — {entry.weight} г — {entry.total_calories.toFixed(1)} ккал
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
