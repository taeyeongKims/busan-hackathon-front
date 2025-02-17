import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';

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
