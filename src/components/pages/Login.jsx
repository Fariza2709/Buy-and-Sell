import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      if (response.data.success) {
        navigate('/profile');
      } else {
        setErrorMessage(response.data.message || 'Неизвестная ошибка');
      }
    } catch (error) {
      console.error('Ошибка входа:', error);
      setErrorMessage('Ошибка сервера. Попробуйте снова позже.');
    }
  };

  return (
    <div className="flex justify-center items-center" id="login">
      <form onSubmit={handleLogin} className="flex flex-col justify-center items-center mt-5" id="loginForm" method="POST">
        <label className="mt-2" htmlFor="loginEmail">Электронная почта</label>
        <input
          className="w-72 border border-solid border-blue-500 rounded-xl mt-3" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="loginEmail"
        />
        <label className="mt-2" htmlFor="loginPassword">Пароль</label>
        <input
          className="w-72 border border-solid border-blue-500 rounded-xl mt-3" name="password" type="password" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} required
        />
        <a className="mt-2 text-blue-500" href="/forgotPassword">Забыли пароль?</a>
        <button
          className="w-72 border border-solid border-blue-500 rounded-xl mt-3 bg-green-600 text-white h-8"
          type="submit"
        >
          Войти
        </button>
        <p className="text-xs mt-1">При входе вы соглашаетесь с нашими
          <a className="text-blue-500" href="/termOfUse"> Условия использования</a>
        </p>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;