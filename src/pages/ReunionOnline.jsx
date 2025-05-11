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
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

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

  const validarFecha = (fecha) => {
    const fechaObj = new Date(fecha);

    // Validar si la fecha es válida
    if (isNaN(fechaObj)) {
      return false;
    }

    const dia = fechaObj.getUTCDay(); // Usamos getUTCDay() para obtener el día en UTC
    return dia !== 0; // Validar que no sea domingo (0 es domingo)
  };

  const validarHora = (hora) => {
    const [hh, mm] = hora.split(':'); // Separa la hora y los minutos
    const horaInt = parseInt(hh, 10);
    const minutos = parseInt(mm, 10);

    // Validar que esté entre 9 AM y 7 PM
    if (horaInt < 9 || horaInt > 19) {
      return false;
    }

    // Validar que la hora sea en intervalos de 30 minutos
    if (minutos !== 0 && minutos !== 30) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enviando) return; // Evitar envío si ya se está enviando
    setEnviando(true);

    // Validaciones
    if (!validarFecha(fecha)) {
      setError('La fecha debe ser de lunes a sábado.');
      setEnviando(false);
      return;
    }

    if (!validarHora(hora)) {
      setError('La hora debe estar entre las 9:00 AM y las 7:00 PM, y en intervalos de 30 minutos.');
      setEnviando(false);
      return;
    }

    setError(''); // Limpiar el mensaje de error

    let participantesFinales = [...correos];
    const correoLimpio = correoInput.trim();
    if (correoLimpio && !participantesFinales.includes(correoLimpio)) {
      participantesFinales.push(correoLimpio);
    }

    const nuevaReunionOnline = {
      tipo: 'online',
      motivo,
      fecha,
      hora,
      correos: participantesFinales,
    };

    // Verificar si la reunión ya existe en localStorage
    const reunionesGuardadas = JSON.parse(localStorage.getItem('reuniones')) || [];
    const reunionExistente = reunionesGuardadas.some(reunion =>
      reunion.motivo === nuevaReunionOnline.motivo &&
      reunion.fecha === nuevaReunionOnline.fecha &&
      reunion.hora === nuevaReunionOnline.hora &&
      JSON.stringify(reunion.correos) === JSON.stringify(nuevaReunionOnline.correos)
    );

    if (!reunionExistente) {
      reunionesGuardadas.push(nuevaReunionOnline);
      localStorage.setItem('reuniones', JSON.stringify(reunionesGuardadas));
    }

    navigate('/confirmacion-online', { state: nuevaReunionOnline });
  };

  return (
    <div className="online-container">
      <button className="volver-home-btn" onClick={() => navigate('/Agendar')}>← Volver atrás</button>
      <h2>Agendar Reunión Online</h2>
      <form className="online-form" onSubmit={handleSubmit}>
        <label>
          Motivo de la reunión:
          <input type="text" value={motivo} onChange={(e) => setMotivo(e.target.value)} required />
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

        {error && <div className="error">{error}</div>}

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

        <button type="submit" disabled={enviando}>
          {enviando ? "Agendando..." : "Confirmar Reunión Online"}
        </button>
      </form>
    </div>
  );
}
