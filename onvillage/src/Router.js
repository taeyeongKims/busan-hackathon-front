import { Routes, Route } from 'react-router-dom';
import MissionPage from './pages/MissionPage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignUpPage.js';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MissionPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
