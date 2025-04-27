import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/MeetingInProgress.css";

export default function MeetingInProgress() {
  const navigate = useNavigate();
  const [participantes, setParticipantes] = useState(['Ana Torres', 'Luis Pérez', 'Camila Soto', 'Carlos Ruiz']);
  
  useEffect(() => {
    setTimeout(() => setParticipantes(prev => [...prev, 'Marta Gómez']), 5000);
    setTimeout(() => setParticipantes(prev => [...prev, 'Juan Pérez']), 10000);
  }, []);

  const totalParticipantes = participantes.length;
  const gridSize = totalParticipantes <= 4 ? 'auto' : `${100 / Math.ceil(Math.sqrt(totalParticipantes))}%`;

  return (
    <div className="meet-container">
      {/* Botón Volver */}
      <button className="volver-home-btn" onClick={() => navigate('/panel')}>← Volver al Home</button>

      <div className="video-section">
        <h2>Reunión en progreso</h2>
        <div className="participants-grid" style={{ gridTemplateColumns: `repeat(auto-fill, ${gridSize})` }}>
          {participantes.map((nombre, i) => (
            <div key={i} className="participant-box">
              <div className="participant-video">
                {/* Simulación de video o avatar */}
                <div className="participant-avatar">{nombre[0]}</div>
              </div>
              <span>{nombre}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-section">
        <h3>Chat de la reunión</h3>
        <div className="chat-messages">
          <p><strong>Ana:</strong> ¡Hola equipo!</p>
          <p><strong>Luis:</strong> Ya estoy listo</p>
        </div>
        <form className="chat-input">
          <input type="text" placeholder="Escribe un mensaje..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
