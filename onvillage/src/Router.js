import { Routes, Route } from 'react-router-dom';
import MissionPage from './pages/MissionPage.js';
import LoginPage from './pages/LoginPage.js';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MissionPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
