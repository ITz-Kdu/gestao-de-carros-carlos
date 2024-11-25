import React, { useState } from 'react';

const ControleFinanceiro = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    type: '',
    amount: '',
    description: '',
    paymentMethod: '',
    dueDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, form]);
    setForm({ type: '', amount: '', description: '', paymentMethod: '', dueDate: '' });
  };

  return (
    <div className="component-container">
      <h1>Controle Financeiro</h1>

      <form className='component-form' onSubmit={handleSubmit}>
        <label>Tipo:
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Receita">Receita</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
        <label>Valor:
          <input type="number" name="amount" value={form.amount} onChange={handleChange} required />
        </label>
        <label>Descrição:
          <input type="text" name="description" value={form.description} onChange={handleChange} required />
        </label>
        <label>Forma de Pagamento:
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Cartão">Cartão</option>
            <option value="Cheque">Cheque</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label>Data de Vencimento:
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} required />
        </label>
        <button type="submit">Registrar</button>
      </form>

      <h2>Transações</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Forma de Pagamento</th>
            <th>Data de Vencimento</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControleFinanceiro;
