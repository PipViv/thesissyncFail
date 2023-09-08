import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
// import { Login } from './components/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Bienvenido al sistema</h1>
          <button onClick={() => setIsLoggedIn(false)}>Cerrar sesión</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
