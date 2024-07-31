import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <div>
      <div className="" id="theTitleOfSection">Название раздела</div>
      <div className="flex justify-around items-center mt-12 bg-gainsboro">
        <Link className="createAdvert" id="createAdvert" to="/create-ad">Создать объявление</Link>
        <Link className="announcement" id="announcement" to="/AnnouncementPages">Объявления</Link>
        <Link className="yourMessages" id="yourMessages" to="/messages">Сообщения</Link>
        <Link className="paymentAndAccount" id="paymentAndAccount" to="/payments">Платежи и счет BAS</Link>
        <Link className="accountSetup" id="accountSetup" to="/settings">Настройки</Link>
        <Link className="editBusinessProfile" id="editBusinessProfile" to="/business-profile">Редактирование бизнес-страницы</Link>
      </div>
    </div>
  );
};

export default Announcement;
