import React from 'react';

const EntryForm = ({ form, onChange, onSubmit, errors = {} }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        name="name"
        placeholder="Продукт"
        value={form.name}
        onChange={onChange}
        required
      />
      {errors.name && <div className="error">{errors.name[0]}</div>}

      <input
        name="weight"
        placeholder="Вес (г)"
        type="number"
        value={form.weight}
        onChange={onChange}
        required
      />
      {errors.weight && <div className="error">{errors.weight[0]}</div>}

      <input
        name="calories_per_100g"
        placeholder="Ккал на 100г"
        type="number"
        value={form.calories_per_100g}
        onChange={onChange}
        required
      />
      {errors.calories_per_100g && (
        <div className="error">{errors.calories_per_100g[0]}</div>
      )}

      <button type="submit">Добавить</button>
    </form>
  );
};

export default EntryForm;