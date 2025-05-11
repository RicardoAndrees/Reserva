// PanelUsuario.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/panelusuario.css';

export default function PanelUsuario() {
  const navigate = useNavigate();
  const [reuniones, setReuniones] = useState([]);

  useEffect(() => {
    const reunionesGuardadas = JSON.parse(localStorage.getItem('reuniones')) || [];
    setReuniones(reunionesGuardadas);
  }, []);

  const eliminarReunion = (index) => {
    const confirmar = window.confirm("⚠️ ¿Estás seguro que deseas eliminar esta reunión?");
    if (!confirmar) return;

    const nuevasReuniones = [...reuniones];
    nuevasReuniones.splice(index, 1);
    setReuniones(nuevasReuniones);
    localStorage.setItem('reuniones', JSON.stringify(nuevasReuniones));
  };

  return (
    <div className="panel-container">
      <div className="panel-header">
        <h2>Hola Usuario, bienvenido al espacio de salas</h2>
        <Link to="/" className="cerrar-sesion">Cerrar sesión</Link>
      </div>

      <div className="panel-content">

        {/* Mostrar reuniones dinámicas */}
        {reuniones.length === 0 ? (
          <p>No hay reuniones agendadas.</p>
        ) : (
          reuniones.map((reunion, index) => (
            <div
              key={index}
              className={`panel-card ${reunion.tipo === 'online' ? 'online' : 'presencial'}`}
            >
              <h3>Reunión - {reunion.tipo === 'online' ? 'Online' : (reunion.titulo || 'Presencial')}</h3>
              <p><strong>Fecha:</strong> {reunion.fecha}</p>
              <p><strong>Hora:</strong> {reunion.hora}</p>
              <p><strong>Motivo:</strong> {reunion.motivo}</p>

              {reunion.tipo === 'presencial' && (
                <p><strong>Sala:</strong> {reunion.sala}</p>
              )}

              {reunion.tipo === 'online' && (
                <>
                  <p><strong>Participantes:</strong></p>
                  <ul>
                    {reunion.correos && reunion.correos.map((correo, i) => (
                      <li key={i}>{correo}</li>
                    ))}
                  </ul>
                </>
              )}

              <button className="eliminar-btn" onClick={() => eliminarReunion(index)}>
                🗑️ Eliminar
              </button>
            </div>
          ))
        )}

        {/* Botón para agendar nueva reunión */}
        <div className="panel-card">
          <h3>Agendar nueva reunión</h3>
          <p>Programa una nueva reunión en una sala disponible o en línea.</p>
          <Link to="/agendar" className="agendar-btn">Agendar reunión</Link>
        </div>

      </div>
    </div>
  );
}
