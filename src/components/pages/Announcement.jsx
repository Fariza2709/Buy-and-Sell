import React from "react";

const Announcement = () => {
  return (
  <div>
    <div className="" id="theTitleOfSection">Название раздела</div>
    <div className="flex justify-around items-center mt-12 bg-gainsboro">
      <button className="createAdvert" id="createAdvert">Создать объявление</button>
      <button className="announcement" id="announcement">Объявления</button>
      <button className="yourMessages" id="yourMessages">Сообщения</button>
      <button className="paymentAndAccount" id="paymentAndAccount">Платежи и счет BAS</button>
      <button className="accountSetup" id="accountSetup">Настройки</button>
      <button className="editBusinessProfile" id="editBusinessProfile">Редактирование бизнес-страницы</button>
    </div>
  </div>
  );
};

export default Announcement;
