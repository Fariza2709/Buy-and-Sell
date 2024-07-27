import React, { useState } from 'react';

const Register = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          username,
          email,
          password
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка регистрации');
      }

      const data = await response.json();
      setMessage(`Регистрация прошла успешно: ${data.username}`);
      onRegisterSuccess(data.username); // Передача имени пользователя родительскому компоненту
    } catch (error) {
      setMessage(`Ошибка регистрации: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center" id="register">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-5" id="registerForm">
        <label className="mt-2" htmlFor="registerUsername">Имя пользователя</label>
        <input
          className="w-72 border border-solid border-blue rounded-xl mt-3"
          type="text"
          id="registerUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="mt-2" htmlFor="registerEmail">Электронная почта</label>
        <input
          className="w-72 border border-solid border-blue rounded-xl mt-3"
          type="email"
          id="registerEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="mt-2" htmlFor="registerPassword">Пароль</label>
        <input
          className="w-72 border border-solid border-blue rounded-xl mt-3"
          type="password"
          id="registerPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-72 border border-solid border-blue rounded-xl mt-3 bg-green-600 h-8" type="submit">Зарегистрироваться</button>
        <p className="text-xs mt-1">При регистрации вы соглашаетесь с нашими
          <a className="termOfUse" href="/termOfUse">Условия использования</a>
        </p>
      </form>
      <div className='text-sm text-red' id="registerResponseMessage">{message}</div>
    </div>
  );
};

export default Register;
