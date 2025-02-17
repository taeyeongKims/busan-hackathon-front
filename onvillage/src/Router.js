import { Routes, Route } from 'react-router-dom';
import MissionPage from './pages/MissionPage.js';
import LoginPage from './pages/LoginPage.js';
import MisstionDetailPage from './pages/MissionDetailPage.jsx';
import MissionWritePage from './pages/MissionWritePage.jsx';
import SignUpPage from './pages/SignUpPage.js';
import MissionCertifiedPage from './pages/MissionCertifiedPage.jsx';
import RankingPage from './pages/RankingPage.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MissionPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mission-detail" element={<MisstionDetailPage />} />
      <Route path="/mission-write" element={<MissionWritePage />} />
      <Route path="/mission-certified" element={<MissionCertifiedPage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  );
}

export default Router;
