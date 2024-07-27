import React from "react";

const MessagesPage = () => {
  return (
  <div className="yourMessagesPage" id="yourMessagesPage">
  <div className="messagesPage_wrapper">
    <div className="firstPart">
      <div className="bookmark">
        <img class="bookmarkPicture" src="../icons/bookmark-thin.svg" alt=""/>
        <p className="firstPartText">Сохраненные</p>
      </div>

      <div className="trash">
        <img className="trashPicture"  src="../icons/trash.svg" alt=""/>
        <p className="firstPartText">Корзина</p>
      </div>
    </div>

    <div className="secondPart">
      <div className="secondPart_wrapper">
        <p className="secondPartText">Покупаю</p>
        <p className="secondPartText">Продаю</p>
      </div>
      <img className="messageImg" src="../icons/messageImg.png" alt="messageImg"/>
      <p className="secondPartMessageOne">Сообщений пока нет</p>
      <p className="secondPartMessageTwo">Как только вы получите сообщение, оно появятся здесь.</p>
      <p className="secondPartMessageThree">Если вы что-то продаете или оказываете услуги, начните с <a href="/">публикации объявления</a></p>
    </div>

    <div className="thirdPart">
      <img className="messageImgThirdPart" src="../icons/messageImg.png" alt="messageImg"/>
      <p className="thirdPartText">Выберите сообщение, чтобы прочитать его</p>
    </div>
  </div>
</div>
  );
};

export default MessagesPage;