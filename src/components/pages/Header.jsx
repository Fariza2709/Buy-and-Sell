import React from 'react';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <header className="bg-800">
      <nav className="bg-black h-28">
        <div className="flex justify-between items-center h-16 py-2 px-4">
          <p className="text-white font-bold text-3xl pt-6 ml-5">Buy and sell</p>
          <form className="flex items-center pt-8" action="/search" method="GET">
            <input
              className="border border-gray-400 rounded mr-2 pl-12 h-8 pb-2"
              type="text"
              name="query"
              placeholder="Поиск..."
            />
            <img className="w-8 h-8 absolute p-1" src="/icons/search.png" alt="searchPicture" />
          </form>
          <div className="flex space-x-2 pt-7 mr-8">
            <HeaderButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
