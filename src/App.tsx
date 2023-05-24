import { useContext } from 'react';
import LoginContext from './store/LoginContext';
import './App.css';

function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <div className="App">
      {loginCtx.isLoggedIn && <p>Logged in.</p>}
    </div>
  );
}

export default App;
