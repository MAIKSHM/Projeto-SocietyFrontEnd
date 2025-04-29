// Erro ocorre porque você está tentando chamar toLocaleString() em undefined
// Corrigindo o componente StatsCard:

// src/components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ titulo, valor }) => {
  // Adicione verificação para valor undefined
  const valorFormatado = valor ? 
    (typeof valor === 'number' ? valor.toLocaleString() : valor) 
    : '0';

  return (
    <div className="stats-card">
      <h3>{titulo}</h3>
      <p>{valorFormatado}</p>
    </div>
  );
};

export default StatsCard;