import React from 'react';
import Sidebar from '../components/Sidebar';
import { styled } from '@mui/system';

// Componentes estilizados
const DashboardContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f5f7fa'
});

const MainContent = styled('div')({
  marginLeft: '240px',
  padding: '20px',
  width: 'calc(100% - 240px)'
});

const CardsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginBottom: '30px'
});

const Card = styled('div')({
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  textAlign: 'center'
});

const Section = styled('section')({
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
});

const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '15px',
  '& th, & td': {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #eee'
  },
  '& th': {
    backgroundColor: '#f5f7fa',
    fontWeight: '600'
  }
});

const Dashboard = () => {
  // Dados mockados
  const stats = {
    reservasHoje: 5,
    reservasMes: 28,
    totalClientes: 152,
    faturamento: 5600
  };

  const agenda = [
    { data: '24/04/2024', horario: '18:00', cliente: 'Atlético FC' },
    { data: '24/04/2024', horario: '19:00', cliente: 'Bruno Sino' },
    { data: '24/04/2024', horario: '20:00', cliente: 'União' },
    { data: '24/04/2024', horario: '21:00', cliente: 'Paolo Oliveira' },
    { data: '24/04/2024', horario: '22:00', cliente: 'Juventus' }
  ];

  const clientesRecentes = [
    'Gabriel Santos',
    'Larissa Almeida',
    'Rafael Costa'
  ];

  return (
    <DashboardContainer>
      <Sidebar />
      
      <MainContent>
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Dashboard</h1>
        
        {/* Cards de Estatísticas */}
        <CardsContainer>
          <Card>
            <h3>Reservas Hoje</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.reservasHoje}</p>
          </Card>
          <Card>
            <h3>Reservas no Mês</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.reservasMes}</p>
          </Card>
          <Card>
            <h3>Clientes</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.totalClientes}</p>
          </Card>
          <Card>
            <h3>Faturamento</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>R$ {stats.faturamento.toLocaleString()}</p>
          </Card>
        </CardsContainer>
        
        {/* Seção Agenda */}
        <Section>
          <h2>Agenda</h2>
          <Table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {agenda.map((item, index) => (
                <tr key={index}>
                  <td>{item.data}</td>
                  <td>{item.horario}</td>
                  <td>{item.cliente}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
        
        {/* Seção Clientes Recentes */}
        <Section>
          <h2>Clientes Recentes</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {clientesRecentes.map((cliente, index) => (
              <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                {cliente}
              </li>
            ))}
          </ul>
        </Section>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;