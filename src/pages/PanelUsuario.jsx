import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/panelusuario.css'; // si estás usando CSS aparte

export default function PanelUsuario() {
  return (
    <div className="panel-container">
      <div className="panel-header">
        <h2>Hola Usuario, bienvenido al espacio de salas</h2>
        <Link to="/" className="cerrar-sesion">Cerrar sesión</Link>
      </div>

      <div className="panel-content">
        <div className="panel-card">
          <h3>Mis reuniones</h3>
          <p>Aquí aparecerán tus reuniones programadas.</p>
        </div>

        <div className="panel-card">
          <h3>Agendar nueva reunión</h3>
          <p>Programa una nueva reunión en una sala disponible.</p>
          <Link to="/agendar" className="agendar-btn">Agendar reunión</Link>
        </div>
      </div>
    </div>
  );
}
