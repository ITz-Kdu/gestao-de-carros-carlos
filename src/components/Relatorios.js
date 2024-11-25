import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../dist/Calendar.css';

const Relatorios = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    reportType: '',
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reports, setReports] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const generateReport = () => {
    // Simulação de geração de relatório
    const newReport = {
      id: reports.length + 1,
      type: filters.reportType,
      period: `${filters.startDate} a ${filters.endDate}`,
      generatedAt: new Date().toLocaleString(),
    };
    setReports([...reports, newReport]);
  };

  return (
    <div className="component-container">
      <h1>Relatórios Personalizáveis</h1>

      <form className='relatorio-form' onSubmit={(e) => e.preventDefault()}>
        <label>Tipo de Relatório:
          <select name="reportType" value={filters.reportType} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Serviços">Serviços</option>
            <option value="Estoque">Estoque</option>
          </select>
        </label>
        <label>Data Inicial:
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>Data Final:
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="button" onClick={generateReport}>Gerar Relatório</button>
      </form>

      <h2>Agendamento de Serviços</h2>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <p>Data Selecionada: {selectedDate.toLocaleDateString()}</p>

      <h2>Relatórios Gerados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Período</th>
            <th>Data de Geração</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.type}</td>
              <td>{report.period}</td>
              <td>{report.generatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorios;