// ConfirmacionOnline.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/confirmaciononline.css';

export default function ConfirmacionOnline() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No hay datos de reunión para mostrar.</p>;
  }

  return (
    <div className="confirmacion-container">
      <h2>✅ Reunión Online Confirmada</h2>
      <p><strong>Motivo:</strong> {state.motivo}</p>
      <p><strong>Fecha:</strong> {state.fecha}</p>
      <p><strong>Hora:</strong> {state.hora}</p>

      <p><strong>Participantes invitados:</strong></p>
      <ul>
        {state.correos.map((correo, index) => (
          <li key={index}>{correo}</li>
        ))}
      </ul>

      <button onClick={() => navigate('/panel')}>Ir al Panel de Usuario</button>
    </div>
  );
}
