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

    // Simulación aleatoria
    const disponible = Math.random() > 0.5;

    // Enviar al componente de Disponibilidad con estado
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

  return (
    <div className="agendar-container">
      <header className="agendar-header">
        <h2>Agendar Nueva Reunión</h2>
        <button className="volver-panel" onClick={() => navigate('/panel')}>← Volver al panel</button>
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
        </form>
      </main>
    </div>
  );
}
