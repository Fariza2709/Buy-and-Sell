import React from "react";

const WelcomeBlock = () => {
  return (
    <div className="h-100 my-8 flex justify-center items-center">
          <p className=" text-black ml-4 text-center font-roboto">Крупнейший онлайн-сервис объявлений Казахстана.<br />
            Все онлайн-объявления Казахстана на BAS. <br /> Здесь вы найдете то, что искали!
          </p>
          <img className="w-23 h-23 relative left-0"  src="/img/design.png" alt="clock" />
        </div> 
  );
};

export default WelcomeBlock;