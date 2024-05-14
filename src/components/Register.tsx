import React, { useState } from 'react';

interface RegisterProps {
  onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logica per la gestione della registrazione
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    onRegister();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrazione</h2>
      <div className='inputWrapper'>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className='inputWrapper'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='inputWrapper'>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Registrati</button>
    </form>
  );
};

export default Register;
