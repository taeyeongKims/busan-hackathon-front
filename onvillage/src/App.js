import './App.css';
import { MissionProvider } from './context/MIssionContext';
import { UserProvider } from './context/UserContext';
import Router from './Router';

function App() {
  return (
    <UserProvider>
      <MissionProvider>
        <Router />
      </MissionProvider>
    </UserProvider>
  );
}

export default App;
