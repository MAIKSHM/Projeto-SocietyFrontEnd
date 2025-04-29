// src/components/RecentClients.jsx
import React from 'react';

const RecentClients = ({ clientes }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Clientes Recentes</h2>
      <ul style={styles.list}>
        {clientes.map((cliente, index) => (
          <li key={index} style={styles.item}>
            {cliente}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  }
};

export default RecentClients;