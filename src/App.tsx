import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/First');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Bem Vindo a Lista de desafios</h1>
        <button className="First" onClick={navigateHome}>1° Desafio</button>
      </header>
    </div>
  );
}

export default App;
