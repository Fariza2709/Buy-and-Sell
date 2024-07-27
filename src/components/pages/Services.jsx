import React from "react";
import Category from "./Category";

const Services = () => {
  return (
  <div className="categoryItem flex items-center">
    <div className="services_column w-4/12 ml-16">
      <ul>
        <li>
          <Category imgSrc="./icons/roller.svg" altText="Услуги" descText="Услуги" />
        </li>
        <li>
          <Category imgSrc="./icons/key.png" altText="Недвижимость" descText="Недвижимость" />
        </li>
        <li>
          <Category imgSrc="./icons/work.png" altText="Работа" descText="Работа" />
        </li>
      </ul>
    </div>
    <div className="services_column w-4/12 m-3">
      <ul>
        <li>
          <Category imgSrc="./icons/ball.png" altText="Хобби, отдых и спорт" descText="Хобби, отдых и спорт" />
        </li>
        <li>
          <Category imgSrc="./icons/developer.png" altText="Строительство и ремонт" descText="Строительство и ремонт" />
        </li>
        <li>
          <Category imgSrc="./icons/phone.png" altText="Электроника" descText="Электроника" />
        </li>
      </ul>
    </div>
    <div className="services_column w-4/12 m-3">
      <ul>
        <li>
          <Category imgSrc="./icons/dress.png" altText="Мода и стиль" descText="Мода и стиль" />
        </li>
        <li>
          <Category imgSrc="./icons/bmw.png" altText="Транспорт" descText="Транспорт" />
        </li>
        <li>
          <Category imgSrc="./icons/calendar.png" altText="Аренда и прокат товаров" descText="Аренда и прокат товаров" />
        </li>
      </ul>
    </div>
    <div className="services_column w-4/12 m-3">
      <ul>
        <li>
          <Category imgSrc="./icons/chair.png" altText="Дом и сад" descText="Дом и сад" />
        </li>
        <li>
          <Category imgSrc="./icons/baby.svg" altText="Детский мир" descText="Детский мир" />
        </li>
        <li>
          <Category imgSrc="./icons/cat.png" altText="Животные" descText="Животные" />
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Services;
