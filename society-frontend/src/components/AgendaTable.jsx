// src/components/AgendaTable.jsx
import React from 'react';

const AgendaTable = ({ agendamentos }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Agenda</h2>
      <div style={styles.table}>
        {/* Cabeçalho */}
        <div style={styles.header}>
          <div style={styles.cell}>Data</div>
          <div style={styles.cell}>Horário</div>
          <div style={styles.cell}>Cliente</div>
        </div>
        
        {/* Linhas */}
        {agendamentos.map((item, index) => (
          <div key={index} style={styles.row}>
            <div style={styles.cell}>{item.data}</div>
            <div style={styles.cell}>{item.horario}</div>
            <div style={styles.cell}>{item.cliente}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '30px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '15px'
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    backgroundColor: '#f5f7fa',
    fontWeight: 'bold',
    borderBottom: '1px solid #e0e0e0'
  },
  row: {
    display: 'flex',
    borderBottom: '1px solid #e0e0e0',
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  cell: {
    flex: 1,
    padding: '12px 15px',
    textAlign: 'left',
    borderRight: '1px solid #e0e0e0',
    '&:last-child': {
      borderRight: 'none'
    }
  }
};

export default AgendaTable;