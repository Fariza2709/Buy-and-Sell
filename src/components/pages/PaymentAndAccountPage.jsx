import React from "react";

const PaymentAndAccountPage = () => {
  return (
  <div className="paymentAndAccountPage" id="paymentAndAccountPage">
    <div className="paymentParts">
      <p className="historyOfPayments" id="historyOfPayments">История платежей</p>
      <p className="bonusesReturns" id="bonusesReturns">Бонусы и Возвраты</p>
    </div>
    <div className="paymentPart" id="paymentPart">
      <form className="paymentSearch" action="/search" method="GET">
        <input className="paymentSearch" type="text" name="query" placeholder="Поиск платежей..." />
        <img className="paymentSearchPicture" src="../icons/search.png" alt="searchPicture" />
      </form>
      <table className="paymentTable">
        <thead>
          <tr>
            <th className="paymentDate">
              Дата
              <img className="downPicture" src="../icons/chevron-down-solid.svg" alt="" style={{ display: "none" }} />
              <img className="upPicture" src="../icons/chevron-up-solid.svg" alt="" />
            </th>
            <th>Номер операции</th>
            <th>Заголовок</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <table className="returnsPart" id="returnsPart" style={{ display: "none" }}>
      <thead>
        <tr>
          <th>Название</th>
          <th>Сумма</th>
          <th>Срок действия</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default PaymentAndAccountPage;
