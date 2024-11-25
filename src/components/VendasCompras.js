import React, { useState } from 'react';

const VendasCompras = () => {
  const [formData, setFormData] = useState({
    item: '',
    quantidade: '',
    valor: '',
    fornecedor: '',
  });
  const [historicoCompras, setHistoricoCompras] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);
  const [novoFornecedor, setNovoFornecedor] = useState({
    nome: '',
    contato: '',
  });

  // Atualiza os campos do formulário de compras
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Adiciona nova compra ao histórico
  const handleAddCompra = () => {
    setHistoricoCompras((prev) => [...prev, formData]);
    setFormData({ item: '', quantidade: '', valor: '', fornecedor: '' });
  };

  // Atualiza os campos do formulário de cadastro de fornecedores
  const handleFornecedorChange = (e) => {
    const { name, value } = e.target;
    setNovoFornecedor((prevData) => ({ ...prevData, [name]: value }));
  };

  // Adiciona novo fornecedor à lista
  const handleAddFornecedor = () => {
    setFornecedores((prev) => [...prev, novoFornecedor]);
    setNovoFornecedor({ nome: '', contato: '' });
  };

  return (
    <div className="vendas-compras-container">
      <h2>Vendas e Compras</h2>

      {/* Formulário de Compras */}
      <form className="vendas-compras-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Nome do item"
        />

        <label htmlFor="quantidade">Quantidade</label>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          value={formData.quantidade}
          onChange={handleChange}
          placeholder="Quantidade"
        />

        <label htmlFor="valor">Valor</label>
        <input
          type="number"
          id="valor"
          name="valor"
          value={formData.valor}
          onChange={handleChange}
          placeholder="Valor unitário"
        />

        <label htmlFor="fornecedor">Fornecedor</label>
        <select
          id="fornecedor"
          name="fornecedor"
          value={formData.fornecedor}
          onChange={handleChange}
        >
          <option value="">Selecione um fornecedor</option>
          {fornecedores.map((fornecedor, index) => (
            <option key={index} value={fornecedor.nome}>
              {fornecedor.nome}
            </option>
          ))}
        </select>

        <button style={{ margin: "10px" }} type="button" onClick={handleAddCompra}>
          Adicionar Compra
        </button>
      </form>

      {/* Histórico de Compras */}
      <div className="vendas-compras-list">
        <h3>Histórico de Compras</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Fornecedor</th>
            </tr>
          </thead>
          <tbody>
            {historicoCompras.map((compra, index) => (
              <tr key={index}>
                <td>{compra.item}</td>
                <td>{compra.quantidade}</td>
                <td>{compra.valor}</td>
                <td>{compra.fornecedor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cadastro de Fornecedores */}
      <div className="vendas-compras-history">
        <h3>Cadastro de Fornecedores</h3>
        <form className="cadastro-fornecedores-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="nome-fornecedor">Nome do Fornecedor</label>
          <input
            type="text"
            id="nome-fornecedor"
            name="nome"
            value={novoFornecedor.nome}
            onChange={handleFornecedorChange}
            placeholder="Nome do fornecedor"
          />

          <label htmlFor="contato-fornecedor">Contato</label>
          <input
            type="email"
            id="contato-fornecedor"
            name="contato"
            value={novoFornecedor.contato}
            onChange={handleFornecedorChange}
            placeholder="E-mail ou telefone"
          />

          <button style={{ margin: "10px" }} type="button" onClick={handleAddFornecedor}>
            Adicionar Fornecedor
          </button>
        </form>
      </div>

      {/* Lista de Fornecedores */}
      <div className="vendas-compras-history">
        <h3>Lista de Fornecedores</h3>
        <ul>
          {fornecedores.map((fornecedor, index) => (
            <li key={index}>
              {fornecedor.nome} - {fornecedor.contato}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VendasCompras;
