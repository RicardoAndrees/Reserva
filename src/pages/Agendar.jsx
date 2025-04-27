// Agendar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/agendar.css';

export default function Agendar() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sala, setSala] = useState('Sala A');

  const handleConsultar = (e) => {
    e.preventDefault();
    const disponible = Math.random() > 0.5;
    navigate('/disponibilidad', {
      state: {
        estado: disponible ? 'disponible' : 'no-disponible',
        titulo,
        fecha,
        hora,
        sala,
      }
    });
  };

  const handleAgendarOnline = () => {
    navigate('/ReunionOnline'); 
  };

  return (
    <div className="agendar-container">
      {/* Botón Volver */}
      <button className="volver-home-btn" onClick={() => navigate('/panel')}>← Volver al Panel</button>

      <header className="agendar-header">
        <h2>Agendar Nueva Reunión</h2>
      </header>

      <main className="agendar-main">
        <form className="agendar-form" onSubmit={handleConsultar}>
          <label>
            Título de la reunión:
            <input
              type="text"
              placeholder="Ej: Reunión de equipo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </label>

          <label>
            Fecha:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </label>

          <label>
            Hora:
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </label>

          <label>
            Sala:
            <select value={sala} onChange={(e) => setSala(e.target.value)}>
              <option>Sala A</option>
              <option>Sala B</option>
              <option>Sala C</option>
            </select>
          </label>

          <button type="submit" className="agendar-btn">Consultar disponibilidad</button>

          <div className="agendar-online">
            <h3>¿Prefieres una reunión Online?</h3>
            <button className="online-btn" onClick={handleAgendarOnline}>Agendar Online</button>
          </div>
        </form>
      </main>
    </div>
  );
}
