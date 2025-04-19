import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // evita recarga de página
    setIsLoggedIn(true);
    navigate("/panel");
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
      <p className="registro-link">
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
}
