import React from "react";

const MessagesPage = () => {
  return (
    <div className="" id="yourMessagesPage">
      <div className="m-auto mt-10 mb-10 border border-gray-300 border-solid w-10/12 h-393 bg-whitesmoke rounded-sm">
        <div className="flex justify-end w-5/12 h-8">
          <div className="flex flex-col items-center mt-4 mb-3 mr-2">
            <img class="w-3 h-3 cursor-pointer" src="../icons/bookmark-thin.svg" alt=""/>
            <p className="text-sm cursor-pointer">Сохраненные</p>
          </div>

      <div className="flex flex-col items-center mt-4 mb-3">
        <img className="w-3 h-3 cursor-pointer"  src="../icons/trash.svg" alt=""/>
        <p className="text-sm cursor-pointer">Корзина</p>
      </div>
    </div>

    <div className="border border-solid border-gray-300 h-80 w-5/12 ml-3">
      <div className="flex justify-end">
        <p className="m-2 hover:bg-green-300 focus:bg-green-300 text-sm cursor-pointer">Покупаю</p>
        <p className="m-2  hover:bg-green-300 focus:bg-green-300 text-sm cursor-pointer">Продаю</p>
      </div>
      <img className="w-24 h-24 m-auto block mb-10 mt-7" src="../icons/messageImg.png" alt="messageImg"/>
      <p className="text-sm text-center mb-2">Сообщений пока нет</p>
      <p className="text-sm text-center mb-2">Как только вы получите сообщение, оно появятся здесь.</p>
      <p className="text-sm text-center">Если вы что-то продаете или оказываете услуги, начните с <a href="/">публикации объявления</a></p>
    </div>
    <p className="absolute top-96 right-64">Выберите сообщение, чтобы прочитать его</p>
  </div>
  </div>
  );
};

export default MessagesPage;