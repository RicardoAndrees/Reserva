import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PanelUsuario from './pages/PanelUsuario';
import Agendar from './pages/Agendar'; 
import Disponibilidad from './pages/Disponibilidad';
import ReunionOnline from './pages/ReunionOnline';
import MeetingInProgress from './pages/MeetingInProgress';
import ConfirmacionOnline from './pages/ConfirmacionOnline';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/panel" element={<PanelUsuario />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/disponibilidad" element={<Disponibilidad />} />
        <Route path="/reuniononline" element={<ReunionOnline />} />
        <Route path="/meetinginprogress" element={<MeetingInProgress />} />
        <Route path="/confirmacion-online" element={<ConfirmacionOnline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;