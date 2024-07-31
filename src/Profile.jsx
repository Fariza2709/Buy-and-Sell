import React from "react";
import { Link, Outlet } from 'react-router-dom';
import PersonalData from "./components/pages/PersonalData";

const Profile = () => {
  return (
    <div>
      <PersonalData />
      <nav className="flex justify-around items-center mt-12 bg-gainsboro">
        <Link className="createAdvert" to="create-ad" id="createAdvert">Создать объявление</Link>
        <Link className="announcementPages" to="announcement-pages" id="announcementPages">Объявления</Link>
        <Link className="yourMessages" to="messages" id="yourMessages">Сообщения</Link>
        <Link className="paymentAndAccount" to="payments" id="paymentAndAccount">Платежи и счет BAS</Link>
        <Link className="accountSetup" to="settings" id="accountSetup">Настройки</Link>
        <Link className="editBusinessProfile" to="business-profile" id="editBusinessProfile">Редактирование бизнес-страницы</Link>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
