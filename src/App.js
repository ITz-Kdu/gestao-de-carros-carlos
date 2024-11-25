import React, { useState, useEffect } from 'react';
import './App.css';
import Veiculos from './components/Veiculos';
import ControleFinanceiro from './components/ControleFinanceiro';
import Relatorios from './components/Relatorios';
import VendasCompras from './components/VendasCompras';
import Estoque from './components/Estoque';
import Cadastros from './components/Cadastros';

const App = () => {
  const [currentPage, setCurrentPage] = useState('veiculos');

  // Estado para dados das abas
  const [tabData, setTabData] = useState({
    veiculos: '',
    financeiro: '',
    relatorios: '',
    'vendas-compras': '',
    estoque: '',
    cadastros: ''
  });

  // Carregar dados do localStorage ao inicializar
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('tabData'));
    if (storedData) {
      setTabData(storedData);
    }
  }, []);

  // Salvar dados no localStorage quando tabData mudar
  useEffect(() => {
    localStorage.setItem('tabData', JSON.stringify(tabData));
  }, [tabData]);

  // Atualizar dados da aba atual
  const handleDataChange = (data) => {
    setTabData((prevData) => ({
      ...prevData,
      [currentPage]: data
    }));
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="tab-list">
            <li
              className={`tab-item ${currentPage === 'veiculos' ? 'active' : ''}`}
              onClick={() => setCurrentPage('veiculos')}
            >
              Gestão de Veículos
            </li>
            <li
              className={`tab-item ${currentPage === 'financeiro' ? 'active' : ''}`}
              onClick={() => setCurrentPage('financeiro')}
            >
              Controle Financeiro
            </li>
            <li
              className={`tab-item ${currentPage === 'relatorios' ? 'active' : ''}`}
              onClick={() => setCurrentPage('relatorios')}
            >
              Relatórios
            </li>
            <li
              className={`tab-item ${currentPage === 'vendas-compras' ? 'active' : ''}`}
              onClick={() => setCurrentPage('vendas-compras')}
            >
              Vendas e Compras
            </li>
            <li
              className={`tab-item ${currentPage === 'estoque' ? 'active' : ''}`}
              onClick={() => setCurrentPage('estoque')}
            >
              Estoque
            </li>
            <li
              className={`tab-item ${currentPage === 'cadastros' ? 'active' : ''}`}
              onClick={() => setCurrentPage('cadastros')}
            >
              Cadastros
            </li>
          </ul>
        </nav>
      </header>

      <main className="tab-content">
        {currentPage === 'veiculos' && (
          <Veiculos data={tabData.veiculos} onDataChange={handleDataChange} />
        )}
        {currentPage === 'financeiro' && (
          <ControleFinanceiro data={tabData.financeiro} onDataChange={handleDataChange} />
        )}
        {currentPage === 'relatorios' && (
          <Relatorios data={tabData.relatorios} onDataChange={handleDataChange} />
        )}
        {currentPage === 'vendas-compras' && (
          <VendasCompras data={tabData['vendas-compras']} onDataChange={handleDataChange} />
        )}
        {currentPage === 'estoque' && (
          <Estoque data={tabData.estoque} onDataChange={handleDataChange} />
        )}
        {currentPage === 'cadastros' && (
          <Cadastros data={tabData.cadastros} onDataChange={handleDataChange} />
        )}
      </main>
    </div>
  );
};

export default App;
