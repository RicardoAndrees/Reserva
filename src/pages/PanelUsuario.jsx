import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/panelusuario.css';

export default function PanelUsuario() {
  const navigate = useNavigate(); // Define el hook navigate

  return (
    <div className="panel-container">
      <div className="panel-header">
        <h2>Hola Usuario, bienvenido al espacio de salas</h2>
        <Link to="/" className="cerrar-sesion">Cerrar sesión</Link>
      </div>

      <div className="panel-content">

        {/* Reunión Online Activa */}
        <div className="panel-card online">
          <h3>Reunión Online - Equipo de Desarrollo</h3>
          <p>Fecha: Hoy</p>
          <p>La reunión ha comenzado</p>
          <button className="unirme-btn" onClick={() => navigate("/meetinginprogress")}>Unirme ahora</button>
        </div>

        {/* Reunión Online Futura */}
        <div className="panel-card online">
          <h3>Reunión Online - Revisión de Proyectos</h3>
          <p>Fecha: Miércoles 30 de abril</p>
          <p>Hora: 16:00</p>
          <button className="unirme-btn" disabled>Unirme ahora</button>
        </div>

        {/* Reunión Presencial */}
        <div className="panel-card presencial">
          <h3>Reunión Presencial - Planificación Semanal</h3>
          <p>Motivo: Coordinación de tareas semanales</p>
          <p>Fecha: Viernes 26 de abril</p>
          <p>Hora: 09:30</p>
          <p>Sala: Sala B</p>
        </div>

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
