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
  const [error, setError] = useState('');

  const validarFecha = (fecha) => {
    const diaSemana = new Date(fecha + 'T00:00').getDay(); // Sunday = 0, Monday = 1, ...
    return diaSemana !== 0; // No domingos
  };

  const validarHora = (hora) => {
    const [hh, mm] = hora.split(':');
    const horaInt = parseInt(hh, 10);
    const minutoInt = parseInt(mm, 10);
    return (
      horaInt >= 9 &&
      horaInt <= 19 &&
      (minutoInt === 0 || minutoInt === 30)
    );
  };

  const handleConsultar = (e) => {
    e.preventDefault();

    if (!validarFecha(fecha)) {
      setError('No se puede agendar reuniones los domingos.');
      return;
    }

    if (!validarHora(hora)) {
      setError('La hora debe estar entre las 9:00 y las 19:00, en bloques de 30 minutos.');
      return;
    }

    setError('');
    const disponible = Math.random() > 0.5;

    navigate('/disponibilidad', {
      state: {
        estado: disponible ? 'disponible' : 'no-disponible',
        titulo,
        fecha,
        hora,
        sala,
        tipo: 'presencial'
      }
    });
  };

  const handleAgendarOnline = () => {
    navigate('/ReunionOnline');
  };

  return (
    <div className="agendar-container">
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

          {error && <div className="error">{error}</div>}

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
            <button className="online-btn" type="button" onClick={handleAgendarOnline}>Agendar Online</button>
          </div>
        </form>
      </main>
    </div>
  );
}
