// Disponibilidad.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/disponibilidad.css';

export default function Disponibilidad() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [agendado, setAgendado] = useState(false);

  if (!state) {
    return (
      <div className="disponibilidad-container">
        <h2>No se han recibido datos de la consulta</h2>
        <button onClick={() => navigate('/agendar')}>Volver a Agendar</button>
      </div>
    );
  }

  const { estado, titulo, fecha, hora, sala, tipo } = state;

  const sugerencias = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
  const horaActual = parseInt(hora?.split(':')[0]);
  const alternativas = sugerencias.filter(h => parseInt(h.split(':')[0]) > horaActual);

  const handleAgendar = () => {
    const nuevaReunion = { titulo, fecha, hora, sala, tipo };
    const reunionesPrevias = JSON.parse(localStorage.getItem('reuniones')) || [];
    reunionesPrevias.push(nuevaReunion);
    localStorage.setItem('reuniones', JSON.stringify(reunionesPrevias));

    setAgendado(true);
    setTimeout(() => {
      navigate('/panel');
    }, 4000); // redirige después de 4 segundos
  };

  return (
    <div className="disponibilidad-container">
      <h2>Resultado de Disponibilidad</h2>
      <div className="info-resumen">
        <p><strong>Título:</strong> {titulo}</p>
        <p><strong>Fecha:</strong> {fecha}</p>
        <p><strong>Hora solicitada:</strong> {hora} hrs</p>
        <p><strong>Sala:</strong> {sala}</p>
      </div>

      {estado === 'disponible' ? (
        <div className="disponible-box">
          ✅ La sala está disponible en la hora solicitada.
          {!agendado ? (
            <button className="agendar-ahora-btn" onClick={handleAgendar}>
              Agendar ahora
            </button>
          ) : (
            <p className="mensaje-exito">✅ Hora agendada con éxito. Redirigiendo...</p>
          )}
        </div>
      ) : (
        <div className="no-disponible-box">
          ❌ La sala no está disponible en ese horario.
          <p>Horas alternativas disponibles:</p>
          <ul>
            {alternativas.length > 0 ? (
              alternativas.map((h, index) => <li key={index}>{h}:00 hrs</li>)
            ) : (
              <li>No hay horas disponibles más tarde</li>
            )}
          </ul>
        </div>
      )}

      {!agendado && (
        <button onClick={() => navigate('/agendar')} className="volver-btn">
          ← Volver atrás
        </button>
      )}
    </div>
  );
}
