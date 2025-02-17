import { Routes, Route } from 'react-router-dom';
import MissionPage from './pages/MissionPage';
import LoginPage from './pages/LoginPage.js';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<MissionPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Main;
