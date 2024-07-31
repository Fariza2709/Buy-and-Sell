import React from 'react';

const YourAdsActivePage = () => {
  return (
      <div className="flex flex-col p-7 m-5" id="yourAdsActivePart">
      <div className="">
        <p className="text-center text-lg">Активные объявления отображаются здесь до истечения их срока</p>
          <p className="text-center text-lg">Эти объявления видны всем. Срок их действия — 30 дней с момента активации.</p>
            <button className="m-auto border border-solid border-blue bg-green-600 block h-10 w-52 text-lg mx-auto my-16" id="createAdvertBlue">Создать объявление</button>
      </div>
    </div>
  );
};

export default YourAdsActivePage;

