// ReunionOnline.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/reunionOnline.css';

export default function ReunionOnline() {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [correoInput, setCorreoInput] = useState('');
  const [correos, setCorreos] = useState([]);

  const agregarCorreo = () => {
    const correoLimpio = correoInput.trim();
    if (correoLimpio && !correos.includes(correoLimpio)) {
      setCorreos([...correos, correoLimpio]);
      setCorreoInput('');
    }
  };

  const eliminarCorreo = (correo) => {
    setCorreos(correos.filter(c => c !== correo));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      agregarCorreo();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correoInput.trim()) agregarCorreo(); // Agregar último si no se ha pulsado enter
    navigate('/confirmacion-online', { state: { motivo, fecha, hora, correos } });
  };

  return (
    <div className="online-container">
      {/* Botón Volver */}
      <button className="volver-home-btn" onClick={() => navigate('/Agendar')}>← Volver atrás</button>

      <h2>Agendar Reunión Online</h2>
      <form className="online-form" onSubmit={handleSubmit}>
        <label>
          Motivo de la reunión:
          <input
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
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
          Personas que participarán:
          <div className="correo-input-wrapper">
            <input
              type="email"
              placeholder="ejemplo@mail.com"
              value={correoInput}
              onChange={(e) => setCorreoInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={agregarCorreo}>Agregar</button>
          </div>
          <div className="correo-lista">
            {correos.map((correo, idx) => (
              <span key={idx} className="correo-chip">
                {correo}
                <button type="button" onClick={() => eliminarCorreo(correo)}>×</button>
              </span>
            ))}
          </div>
        </label>

        <button type="submit">Confirmar Reunión Online</button>
      </form>
    </div>
  );
}
