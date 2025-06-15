import React, { useState, useEffect } from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import TotalCalories from './components/TotalCalories';
import { getEntries, createEntry } from './api/entries';
import './styles.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    name: '',
    weight: '',
    calories_per_100g: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await getEntries();
      setEntries(res.data);
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null }); // очищаем ошибку при вводе
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEntry(form);
      setForm({ name: '', weight: '', calories_per_100g: '' });
      setErrors({});
      fetchEntries();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else {
        console.error('Ошибка при добавлении:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Подсчёт калорий</h2>
      <EntryForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
      <EntryList entries={entries} setEntries={setEntries} />
      <TotalCalories entries={entries} />
    </div>
  );
}

export default App;