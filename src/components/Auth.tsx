import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username: string) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard username={username} />
      ) : (
        isLogin ? (
          <>
            <Login onLogin={handleLogin} />
            <button onClick={() => setIsLogin(false)}>Vai a Registrazione</button>
          </>
        ) : (
          <>
            <Register onRegister={handleRegister} />
            <button onClick={() => setIsLogin(true)}>Vai a Login</button>
          </>
        )
      )}
    </div>
  );
};

export default Auth;
