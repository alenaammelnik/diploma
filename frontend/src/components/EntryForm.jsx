import React from 'react';

const EntryForm = ({ form, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input name="name" placeholder="Продукт" value={form.name} onChange={onChange} required />
      <input name="weight" placeholder="Вес (г)" type="number" value={form.weight} onChange={onChange} required />
      <input name="calories_per_100g" placeholder="Ккал на 100г" type="number" value={form.calories_per_100g} onChange={onChange} required />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default EntryForm;