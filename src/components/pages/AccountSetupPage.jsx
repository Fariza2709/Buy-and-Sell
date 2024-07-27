import React from "react";

const AccountSetupPage = () => {
  return (
  <div className="accountSetupPage" id="accountSetupPage">
    <div className="setup_wrapper">
      <div className="changeContactDetails item" id="changeContactDetails">
        <div className="header">
          Изменить контактные данные
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>

        <div className="content" id="changeContactDetailsPage">
          <form action="" className="formContactDetails">
            <br />
            <hr className="formContactDetailsHr" />
            <br />
            <label className="labelContactDetails" htmlFor="inputLocation">
              Выбрать город
            </label>
            <input type="text" className="inputContactDetails" placeholder="Местоположение" id="inputLocation" name="location" required />
            <hr className="formContactDetailsHr" />
            <br />
            <label className="labelContactDetails" htmlFor="contactPerson">
              Контактное лицо
            </label>
            <input className="inputContactDetails" type="text" placeholder="Контактное лицо" id="contactPerson" required />
            <br />
            <label className="labelContactDetails" htmlFor="phone">
              Номер телефона
            </label>
            <input className="inputContactDetails" type="tel" placeholder="Номер телефона" id="phone" required />
            <br />
            <label className="checkboxText">
              Отключить предзаполнение
              <input type="checkbox" className="inputCheckbox" />
            </label>
            <br />
            <label className="checkboxText">
              Отображать фото профиля Facebook
              <input type="checkbox" className="inputCheckbox" />
            </label>
            <button className="btnContactDetails">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="changePassword item" id="changePassword">
        <div className="header">
          Изменить пароль
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content">
          <form action="" className="formContactDetails">
            <br />
            <hr className="formContactDetailsHr" />
            <br />
            <label className="labelContactDetails" htmlFor="currentPassword">
              Текущий пароль *
            </label>
            <input className="inputChangePassword" type="password" id="currentPassword" required />
            <br />
            <label className="labelContactDetails" htmlFor="newPassword">
              Новый пароль *
            </label>
            <input className="inputChangePassword" type="password" id="newPassword" required />
            <br />
            <button className="btnContactDetails">Изменить пароль</button>
          </form>
        </div>
      </div>

      <div className="changeEmail item" id="changeEmail">
        <div className="header">
          Изменить email-адрес
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content">
          <form action="" className="formContactDetails">
            <br />
            <hr className="formContactDetailsHr" />
            <br />
            <label className="labelContactDetails" htmlFor="newEmail">
              Новый email-адрес
            </label>
            <input className="inputChangePassword" type="email" id="newEmail" required />
            <br />
            <button className="btnContactDetails">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="warning item" id="warning">
        <div className="header">
          Уведомления
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content warning_wrapper">
          <br />
          <hr className="formContactDetailsHr" />
          <div className="tipsFromBas">
            <div className="warningPart">
              <p>Советы от BAS.</p>
              <div className="textFromBas">Полезные советы, интересные предложения, рекомендации и новинки на BAS</div>
            </div>
            <div className="warningCheckboxEmail">
              <form className="formWarning">
                <label className="checkboxWarningText">
                  E-mail
                  <input type="checkbox" className="checkboxWarning" />
                </label>
              </form>
            </div>
            <br />
            <div className="warningCheckboxTel">
              <form className="formWarning">
                <label className="checkboxWarningText" htmlFor="phoneNotification">
                  Телефон
                  <input type="checkbox" className="checkboxWarning" id="phoneNotification" />
                </label>
              </form>
            </div>
          </div>
          <hr className="formContactDetailsHr" />
        </div>

        <div className="content warning_wrapper">
          <br />
          <hr className="formContactDetailsHr" />
          <div className="tipsFromBas">
            <div className="warningPart">
              <p>Акции.</p>
              <div className="textFromBas">Персональные скидки и специальные предложения</div>
            </div>
            <div className="warningCheckboxEmail">
              <form className="formWarning">
                <label className="checkboxWarningText">
                  E-mail
                  <input type="checkbox" className="checkboxWarning" />
                </label>
              </form>
            </div>
            <br />
            <div className="warningCheckboxTel">
              <form className="formWarning">
                <label className="checkboxWarningText" htmlFor="phonePromotions">
                  Телефон
                  <input type="checkbox" className="checkboxWarning" id="phonePromotions" />
                </label>
              </form>
            </div>
          </div>
          <hr className="formContactDetailsHr" />
        </div>
      </div>

      <div className="logoBanner item" id="logoBanner">
        <div className="header">
          Логотип и баннер
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content"></div>
      </div>

      <div className="myCV item" id="myCV">
        <div className="header">
          Мое резюме
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content"></div>
      </div>

      <div className="deleteAccount item" id="deleteAccount">
        <div className="header">
          Удалить учетную запись
          <img className="accountSetupPicture" src="../icons/chevron-down-solid.svg" alt="" />
        </div>
        <div className="content"></div>
      </div>
    </div>
  </div>
  );
};

export default AccountSetupPage;
