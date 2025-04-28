# Reserva de Salas (PMN)

Esta es una aplicación web desarrollada con **React** cuyo propósito es permitir a los usuarios **agendar reuniones** en salas disponibles de forma sencilla y organizada.  
El proyecto incluye funcionalidades de registro, inicio de sesión, gestión de reservas y soporte para reuniones online.

## Tecnologías utilizadas
- **React** (Create React App)
- **React Router DOM** (navegación entre páginas)
- **CSS personalizado** para los estilos
- **Vercel** para el despliegue final

## Funcionalidades principales

### 1. Login
- Permite que los usuarios ingresen al sistema mediante sus credenciales.
- Validación de campos para asegurar un inicio de sesión correcto.

### 2. Registro
- Permite registrar un nuevo usuario en el sistema.
- Campos como nombre, correo electrónico y contraseña deben ser completados correctamente.

### 3. Panel de Usuario
- Página principal después de iniciar sesión.
- Desde aquí el usuario puede navegar hacia las opciones de agendar una reunión presencial o en línea.
- Incluye botones de navegación clara para facilitar el movimiento dentro de la plataforma.

### 4. Agendar Salas
- Formulario para reservar una sala presencial.
- Permite seleccionar:
  - Título de la reunión
  - Fecha
  - Hora
  - Sala (Sala A, Sala B, Sala C)
- Botón para **Consultar disponibilidad** de la sala seleccionada.
- Opción adicional para **Agendar una reunión online**.

### 5. Agendar Online (ReunionOnline)
- Formulario simplificado para reservar una reunión online.
- Redirige al usuario para completar la configuración de la reunión virtual.

### 6. MeetingInProcess
- Página que simula una reunión en curso.
- Pantalla que confirma que la reunión está activa, mejorando la experiencia de usuario.

## Navegación entre páginas
La navegación se implementa mediante **botones** bien ubicados, con opciones como:
- **Volver al panel** desde cualquier subpágina.
- **Confirmar reunión** o **Cancelar y regresar**.
- **Agendar online** directamente si el usuario prefiere una opción virtual.

Este sistema de navegación asegura que el usuario siempre pueda volver fácilmente atrás o continuar su flujo de trabajo sin perderse.


