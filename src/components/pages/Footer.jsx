import React, { useState } from 'react';

const AppStoreGooglePlay = () => {
  const [hovered, setHovered] = useState('');

  const handleMouseEnter = (store) => {
    setHovered(store);
  };

  const handleMouseLeave = () => {
    setHovered('');
  };

  return (
    <div className="differentServices_third_column w-1/3">
      <div className="socialMediaPictures flex">
        <img
                className="googlePlayPicture w-32"
                id="googlePlayPicture"
                src="./img/Google_Playsvg.webp"
                alt="Google_play"
                onMouseEnter={() => handleMouseEnter('googlePlay')}
                onMouseLeave={handleMouseLeave}
              />
            <img
                    className="appStorePicture w-32"
                    id="appStorePicture"
                    src="./img/App_Store.svg.png"
                    alt="App_Store"
                    onMouseEnter={() => handleMouseEnter('appStore')}
                    onMouseLeave={handleMouseLeave}
                  />
          </div>
      
      
      <p id="free_app" className= {`free_app text-xs ${hovered ? 'hidden' : ''}`}>
        Бесплатное приложение для твоего телефона
      </p>
      <div id="googlePlayText" className={`googlePlayText ${hovered === 'googlePlay' ? '' : 'hidden'}`}>
        <p className="appText text-xs text-start w-72 m-auto">
          <b>Google Play Download</b>
          </p>
      </div>
      <div id="appStoreText" className={`appStoreText ${hovered === 'appStore' ? '' : 'hidden'}`}>
        <p className="appText text-xs w-72 m-auto">
          <b>App Store Download</b>
          </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <hr className="bg-black" />
      <div className="footer_wrapper flex items-start mt-14">
        <div className="differentServices_column w-1/4 ml-14">
          <ul>
            <li><a href="/mobile-apps">Мобильные приложения</a></li>
            <li><a href="/help-feedback">Помощь и Обратная связь</a></li>
            <li><a href="/advertising">Рекламные услуги</a></li>
            <li><a href="/business-on-bas">Бизнес на BAS</a></li>
            <li><a href="/blog">Блог BAS</a></li>
            <li><a href="/terms">Условия использования</a></li>
            <li><a href="/privacy">Политика конфиденциальности</a></li>
            <li><a href="/banner-ads">Баннерная реклама</a></li>
          </ul>
        </div>
        <div className="differentServices_second_column w-1/4">
          <ul>
            <li><a href="/safety-rules">Правила безопасности</a></li>
            <li><a href="/regions-map">Карта регионов</a></li>
            <li><a href="/popular-queries">Популярные запросы</a></li>
            <li><a href="/careers">Работа в BAS</a></li>
          </ul>
        </div>
        <AppStoreGooglePlay />
      </div>
    </footer>
  );
};

export default Footer;
