import React, { useState, useEffect } from 'react';

const Cadastros = () => {
  const [contatos, setContatos] = useState(() => JSON.parse(localStorage.getItem('contatos')) || []);
  const [historicoServicos, setHistoricoServicos] = useState(() => JSON.parse(localStorage.getItem('historicoServicos')) || []);
  const [estoque, setEstoque] = useState(() => JSON.parse(localStorage.getItem('estoque')) || []);
  const [alertas, setAlertas] = useState([]);
  const [novoContato, setNovoContato] = useState({ nome: '', telefone: '', email: '' });
  const [novoServico, setNovoServico] = useState({ veiculo: '', descricao: '', data: '' });

  useEffect(() => {
    const itensComBaixaQuantidade = estoque.filter(item => item.quantidade < 5);
    setAlertas(itensComBaixaQuantidade);
  }, [estoque]);

  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos));
  }, [contatos]);

  useEffect(() => {
    localStorage.setItem('historicoServicos', JSON.stringify(historicoServicos));
  }, [historicoServicos]);

  useEffect(() => {
    localStorage.setItem('estoque', JSON.stringify(estoque));
  }, [estoque]);

  const handleContatoChange = (e) => {
    const { name, value } = e.target;
    setNovoContato((prev) => ({ ...prev, [name]: value }));
  };

  const handleServicoChange = (e) => {
    const { name, value } = e.target;
    setNovoServico((prev) => ({ ...prev, [name]: value }));
  };

  const adicionarContato = () => {
    setContatos((prev) => [...prev, novoContato]);
    setNovoContato({ nome: '', telefone: '', email: '' });
  };

  const adicionarServico = () => {
    setHistoricoServicos((prev) => [...prev, novoServico]);
    setNovoServico({ veiculo: '', descricao: '', data: '' });
  };

  return (
    <div className="cadastros-container">
      <h1>Cadastros</h1>

      {/* Cadastro de contatos */}
      <div className="cadastro-contatos">
        <h3>Cadastro de Contatos</h3>
        <form className='cadastro-form' onSubmit={(e) => e.preventDefault()}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={novoContato.nome}
            onChange={handleContatoChange}
            placeholder="Nome"
          />
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={novoContato.telefone}
            onChange={handleContatoChange}
            placeholder="Telefone"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={novoContato.email}
            onChange={handleContatoChange}
            placeholder="Email"
          />
          <button style={{ margin: "10px" }} type="button" onClick={adicionarContato}>Adicionar Contato</button>
        </form>
        <ul>
          {contatos.map((contato, index) => (
            <li key={index}>{contato.nome} - {contato.telefone} - {contato.email}</li>
          ))}
        </ul>
      </div>

      {/* Histórico de serviços */}
      <div className="historico-servicos">
        <h3>Histórico de Serviços</h3>
        <form className='historico-form' onSubmit={(e) => e.preventDefault()}>
          <label>Veículo:</label>
          <input
            type="text"
            name="veiculo"
            value={novoServico.veiculo}
            onChange={handleServicoChange}
            placeholder="Veículo"
          />
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={novoServico.descricao}
            onChange={handleServicoChange}
            placeholder="Descrição do serviço"
          />
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={novoServico.data}
            onChange={handleServicoChange}
          />
          <button style={{ margin: "10px" }} type="button" onClick={adicionarServico}>Adicionar Serviço</button>
        </form>
        <ul>
          {historicoServicos.map((servico, index) => (
            <li key={index}>{servico.data} - {servico.veiculo} - {servico.descricao}</li>
          ))}
        </ul>
      </div>

      {/* Estoque com alertas */}
      <div className="estoque-alertas">
        <h3>Estoque</h3>
        <ul>
          {estoque.map((item, index) => (
            <li key={index}>{item.nome} - {item.quantidade} unidades - Garantia: {item.garantia}</li>
          ))}
        </ul>
        <h4>Alertas de Reposição</h4>
        {alertas.length > 0 ? (
          <ul>
            {alertas.map((item, index) => (
              <li key={index}>{item.nome} está com baixa quantidade ({item.quantidade})</li>
            ))}
          </ul>
        ) : (
          <p>Todos os itens estão em níveis satisfatórios.</p>
        )}
      </div>
    </div>
  );
};

export default Cadastros;
