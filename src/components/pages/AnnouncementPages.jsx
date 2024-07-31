import React from "react";
import { Link, Outlet } from 'react-router-dom';

const AnnouncementPages = () => {
  return (
    <div className="m-auto mt-10 border border-gray-300 border-solid w-10/12 h-80 bg-whitesmoke rounded-sm">
      <nav className="flex justify-around items-baseline pt-8">
        <Link className="yourAdsActivePage hover:bg-blue focus:bg-blue" to="active-ads-page" id="yourAdsActivePage">Активные</Link>
        <Link className="yourAdsNonActivePage  hover:bg-blue  focus:bg-blue" to="nonActive-ads-page" id="yourAdsNonActivePage">Неактивные</Link>
        <Link className="yourAdsNonUnpaidPage  hover:bg-blue  focus:bg-blue" to="ads-non-unpaid-page" id="yourAdsNonUnpaidPage">Неоплаченные</Link>
        <Link className="yourAdsNonAwaitingPage  hover:bg-blue  focus:bg-blue" to="ads-non-awaiting-page" id="yourAdsNonAwaitingPage">Ожидающие</Link>
      </nav>
      
      <div className="content">
        <Outlet />
      </div>      
    </div>
  );
};

export default AnnouncementPages;
