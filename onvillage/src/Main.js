import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import MissionPage from './pages/MissionPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MissionPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
