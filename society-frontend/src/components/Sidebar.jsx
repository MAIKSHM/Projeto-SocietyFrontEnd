import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Importando ícone de logout
import '../styles/sidebar.css'; // Criaremos este arquivo depois


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove os dados do usuário do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    
    // 2. Redireciona para a página de login
    navigate('/login');
    
    // 3. (Opcional) Recarrega a página para limpar qualquer estado
    window.location.reload();
  };

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/' },
    { name: 'Agenda', icon: '📅', path: '/agenda' },
    { name: 'Clientes', icon: '👥', path: '/clientes' },
    { name: 'Reservas', icon: '⚽', path: '/reservas' },
    { name: 'Relatórios', icon: '📋', path: '/relatorios' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>⚽ Society Manager</h2>
      </div>
      
      <nav className="nav">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={item.path} className="menu-link">
                <span className="icon">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          
          {/* Botão de Logout */}
          <li className="menu-item">
            <button onClick={handleLogout} className="logout-btn">
              <FiLogOut className="icon" />
              <span>Sair</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;