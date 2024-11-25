import React, { useState } from 'react';

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [form, setForm] = useState({
    owner: '',
    plate: '',
    model: '',
    year: '',
    checklist: '',
    laudoEntrada: '',
    laudoSaida: '',
    history: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVeiculos([...veiculos, form]);
    setForm({ owner: '', plate: '', model: '', year: '', checklist: '', laudoEntrada: '', laudoSaida: '', history: '' });
  };

  return (
    <div className="component-container">
      <h1>Gestão de Veículos</h1>
      <div className='form-cadastro'>
      <form className='veiculos-form' onSubmit={handleSubmit}>
        <label>Nome do Proprietário:
          <input type="text" name="owner" value={form.owner} onChange={handleChange} required />
        </label>
        <label>Placa do Veículo:
          <input type="text" name="plate" value={form.plate} onChange={handleChange} required />
        </label>
        <label>Modelo:
          <input type="text" name="model" value={form.model} onChange={handleChange} required />
        </label>
        <label>Ano:
          <input type="text" name="year" value={form.year} onChange={handleChange} required />
        </label>
        <label>Checklist:
          <textarea name="checklist" value={form.checklist} onChange={handleChange} required />
        </label>
        <label>Laudo de Entrada:
          <textarea name="laudoEntrada" value={form.laudoEntrada} onChange={handleChange} required />
        </label>
        <label>Laudo de Saída:
          <textarea name="laudoSaida" value={form.laudoSaida} onChange={handleChange} required />
        </label>
        <label>Histórico:
          <textarea name="history" value={form.history} onChange={handleChange} required />
        </label>
        <button type="submit">Cadastrar Veículo</button>
      </form>
      </div>
      <h2>Lista de Veículos</h2>
      <ul>
        {veiculos.map((veiculo, index) => (
          <li key={index}>
            <strong>{veiculo.owner}</strong> - {veiculo.plate} ({veiculo.model}, {veiculo.year})
            <p><strong>Checklist:</strong> {veiculo.checklist}</p>
            <p><strong>Laudo Entrada:</strong> {veiculo.laudoEntrada}</p>
            <p><strong>Laudo Saída:</strong> {veiculo.laudoSaida}</p>
            <p><strong>Histórico:</strong> {veiculo.history}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Veiculos;
