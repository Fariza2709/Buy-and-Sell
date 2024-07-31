import React from 'react';

const yourAdsNonAwaitingPage = () => {
  return (
    <div className="flex flex-col p-7 m-5" id="yourAdsNonAwaitingPart">
      <div className="">
        <p className="text-center text-lg">Объявления проходят модерацию в течение нескольких минут</p>
          <p className="text-center text-lg">Каждое объявление, которое вы созданное или редактируете, проходит быструю модерацию перед активацией.</p>
          <button className="m-auto border border-solid border-blue bg-green-600 block h-10 w-52 text-lg mx-auto my-16" id="createAdvertBlue">Создать объявление</button>
      </div>
    </div>
  );
};

export default yourAdsNonAwaitingPage;