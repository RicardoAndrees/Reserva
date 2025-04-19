import { Link } from 'react-router-dom';
import '../styles/registro.css';

export default function Registro() {
  return (
    <div className="registro-container">
      <h2>Crear Cuenta</h2>
      <form className="registro-form">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
      </form>
      <p className="volver-login">
        ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
      </p>
    </div>
  );
}
