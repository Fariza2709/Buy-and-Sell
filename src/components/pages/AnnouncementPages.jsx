import React from "react";

const AnnouncementPages = () => {
  return (
  <div className="announcementPages" id="announcementPages">
  <div className="listAnnouncement">
    <p className="listOfConditions" id="yourAdsActivePage">Активные</p>
    <p className="listOfConditions" id="yourAdsNonActivePage">Неактивные</p>
    <p className="listOfConditions" id="yourAdsNonUnpaidPage">Неоплаченные</p>
    <p className="listOfConditions" id="yourAdsNonAwaitingPage">Ожидающие</p>
    <div className="yourAdsPart" id="yourAdsActivePart">
      <div className="yourAds_wrapper">
        <p className="descAds">Активные объявления отображаются здесь до истечения их срока</p>
          <p className="validityPeriod">Эти объявления видны всем. Срок их действия — 30 дней с момента активации.</p>
            <button className="createAdvertBlue" id="createAdvertBlue">Создать объявление</button>
      </div>
    </div>

    <div className="yourAdsPart" id="yourAdsNonActivePart">
      <div className="yourAds_wrapper">
        <p className="descAds">Неактивные объявления отображаются здесь до истечения их срока</p>
          <p className="validityPeriod">Эти объявления видны всем. Срок их действия — 30 дней с момента активации.</p>
          <button className="createAdvertBlue" id="createAdvertBlue">Создать объявление</button>
        </div>
    </div>

    <div className="yourAdsPart" id="yourAdsNonUnpaidPart">
      <div className="yourAds_wrapper">
        <p className="descAds">Неоплаченные объявления остаются здесь пока вы не активируете их</p>
          <p className="validityPeriod">Оплатите публикацию, чтобы активировать объявления в определенных категориях. Объявления останутся здесь, пока вы не сделаете это.</p>
          <button className="createAdvertBlue" id="createAdvertBlue">Создать объявление</button>
      </div>
    </div>
    <div className="yourAdsPart" id="yourAdsNonAwaitingPart">
      <div className="yourAds_wrapper">
        <p className="descAds">Объявления проходят модерацию в течение нескольких минут</p>
          <p className="validityPeriod">Каждое объявление, которое вы созданное или редактируете, проходит быструю модерацию перед активацией.</p>
          <button className="createAdvertBlue" id="createAdvertBlue">Создать объявление</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default AnnouncementPages;