import './App.css';
import { UserProvider } from './context/UserContext';
import Layout from './components/layout/Layout';
import MissionPage from './pages/MissionPage';

function App() {
  return (
    <UserProvider>
      <Layout>
        <MissionPage />
      </Layout>
    </UserProvider>
  );
}

export default App;
