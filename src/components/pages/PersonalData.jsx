import React from "react";

const PersonalData = ({ username }) => {
  return (
    <div className="bg-black h-16 flex justify-around items-center">
      <div className="text-white text-lg">Личный кабинет</div>
      <img id="profileImage" src="./icons/user.png" alt="user" />
      <div className="text-lg text-white" id="displayName">{username}</div>
      <button className="getOut bg-gainsboro w-28 h-7 rounded-lg ">Выйти</button>
    </div>
  );
};

export default PersonalData;
