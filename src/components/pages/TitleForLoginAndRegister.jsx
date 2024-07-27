import React from 'react';

const TitleForLoginAndRegister = ({ setActiveTab }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <h2
        className="text-2xl mr-2 cursor-pointer"
        onClick={() => setActiveTab('login')}
      >
        Войти
      </h2>
      <h2
        className="text-2xl ml-2 cursor-pointer"
        onClick={() => setActiveTab('register')}
      >
        Зарегистрироваться
      </h2>
    </div>
  );
};

export default TitleForLoginAndRegister;
