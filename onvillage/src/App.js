import './App.css';
import { UserProvider } from './context/UserContext';
import Layout from './components/layout/Layout';
import Main from './Main';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Main />
      </Layout>
    </UserProvider>
  );
}

export default App;
