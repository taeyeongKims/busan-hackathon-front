import { Routes, Route } from 'react-router-dom';
import MissionPage from './pages/MissionPage.js';
import LoginPage from './pages/LoginPage.js';
import MisstionDetailPage from './pages/MissionDetailPage.jsx';
import MissionWritePage from './pages/MissionWritePage.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MissionPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mission-detail" element={<MisstionDetailPage />} />
      <Route path="/mission-write" element={<MissionWritePage />} />
    </Routes>
  );
}

export default Router;
