import { useContext } from 'react';
import LoginContext from './store/LoginContext';
import './App.css';
import Login from './components/Login/Login';

function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <div className="App">
      {!loginCtx.isLoggedIn && <Login />}
    </div>
  );
}

export default App;
