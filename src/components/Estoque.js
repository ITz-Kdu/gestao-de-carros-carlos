import React, { useState } from 'react';

const Estoque = () => {
  const [estoque, setEstoque] = useState([
  ]);
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [novoItem, setNovoItem] = useState({ nome: '', quantidade: '', garantia: '' });

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setNovoItem((prev) => ({ ...prev, [name]: value }));
  };

  const adicionarItem = () => {
    setEstoque((prev) => [...prev, novoItem]);
    setMovimentacoes((prev) => [...prev, { ...novoItem, tipo: 'Adicionado' }]);
    setNovoItem({ nome: '', quantidade: '', garantia: '' });
  };

  const gerarEtiqueta = (item) => {
    alert(`Etiqueta gerada para: ${item.nome}`);
  };

  return (
    <div className="estoque-container">
      <h1>Estoque</h1>

      {/* Adicionar itens ao estoque */}
      <form className="estoque-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nome">Nome do Item</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={novoItem.nome}
          onChange={handleItemChange}
          placeholder="Nome do item"
        />

        <label htmlFor="quantidade">Quantidade</label>
        <input
          type="number"
          name="quantidade"
          id="quantidade"
          value={novoItem.quantidade}
          onChange={handleItemChange}
          placeholder="Quantidade"
        />

        <label htmlFor="garantia">Garantia</label>
        <input
          type="text"
          name="garantia"
          id="garantia"
          value={novoItem.garantia}
          onChange={handleItemChange}
          placeholder="Garantia"
        />

        <button style={{ margin: "10px" }} type="button" onClick={adicionarItem}>Adicionar ao Estoque</button>
      </form>

      {/* Listagem de itens em estoque */}
      <div className="estoque-list">
        <h3>Itens em Estoque</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Garantia</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {estoque.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.quantidade}</td>
                <td>{item.garantia}</td>
                <td>
                  <button style={{ margin: "10px" }} onClick={() => gerarEtiqueta(item)}>Gerar Etiqueta</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Histórico de movimentações */}
      <div className="movimentacoes-list">
        <h3>Histórico de Movimentações</h3>
        <ul>
          {movimentacoes.map((mov, index) => (
            <li key={index}>
              {mov.tipo}: {mov.nome} - {mov.quantidade} unidades - Garantia: {mov.garantia}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estoque;
