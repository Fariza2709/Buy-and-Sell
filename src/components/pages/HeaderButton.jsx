import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderButton = () => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/login');
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 rounded h-8"
        id="btnAccount"
        type="button"
        onClick={handleAccountClick}
      >
        Войти
      </button>
      <button className="bg-green-500 text-white px-4 rounded h-8" id="btnAddAdvertisement" type="button">
        Создать объявление
      </button>
    </>
  );
};

export default HeaderButton;
