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
        {reuniones.map((reunion, index) => (
          <div key={index} className="panel-card presencial">
            <h3>Reunión - {reunion.titulo}</h3>
            <p>Fecha: {reunion.fecha}</p>
            <p>Hora: {reunion.hora}</p>
            <p>Sala: {reunion.sala}</p>

            <button className="eliminar-btn" onClick={() => eliminarReunion(index)}>
              🗑️ Eliminar
            </button>
          </div>
        ))}

        {/* Botón para agendar nueva reunión */}
        <div className="panel-card">
          <h3>Agendar nueva reunión</h3>
          <p>Programa una nueva reunión en una sala disponible.</p>
          <Link to="/agendar" className="agendar-btn">Agendar reunión</Link>
        </div>

      </div>
    </div>
  );
}
