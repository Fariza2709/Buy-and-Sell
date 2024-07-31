import React from 'react';

const yourAdsNonUnpaidPage = () => {
  return (
    <div className="flex flex-col p-7 m-5" id="yourAdsNonUnpaidPart">
    <div className="">
      <p className="text-center text-lg">Неоплаченные объявления остаются здесь пока вы не активируете их</p>
        <p className="text-center text-lg">Оплатите публикацию, чтобы активировать объявления в определенных категориях. Объявления останутся здесь, пока вы не сделаете это.</p>
        <button className="m-auto border border-solid border-blue bg-green-600 block h-10 w-52 text-lg mx-auto my-16" id="createAdvertBlue">Создать объявление</button>
    </div>
  </div>
  );
};

export default yourAdsNonUnpaidPage;