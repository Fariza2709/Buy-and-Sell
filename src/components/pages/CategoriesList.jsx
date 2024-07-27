import React, { useState } from 'react';
import categories from '../../categoriesData';

const CategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

    return (
      <>
    <div className="categoryBas_wrapper">
      <div className="titleCategoryList">Выберите категорию</div>
      <div className="categoryList" id="categoryList">
      <ul>
        <li id="servicesCategory">Услуги<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="constructionCategory">Строительство и ремонт<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="rentCategory">Аренда и прокат товаров<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="propertyCategory">Недвижимость<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="electronicsCategory">Электроника<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="gardenCategory">Дом и сад<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="workCategory">Работа<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="modaCategory">Мода и стиль<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="childrenCategory">Детский мир<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="sportsCategory">Хобби, отдых и спорт<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="transportCategory">Транспорт<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        <li id="animalsCategory">Животные<img className="rightPicture" src="./icons/right.png" alt="right"/></li>
        </ul>
      </div>
    </div>
    <div id="servicesCategoryList" className="subCategoryList">
      <ul>
        <li id="entertainment">Развлечения<img className="rightPicture" src="./icons/right.png" alt="right" /></li>
        <li id="healthBeauty">Красота и здоровье<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="forEnterprises">Для бизнеса<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="carService">Авто услуги<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="domesticServices" >Бытовые услуги<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="transportationWarehousingServices" >Перевозки и складские услуги<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="repairMaintenanceOfEquipment" >Ремонт и обслуживание техники<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="repairBuild" >Ремонт и строительство<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="cleaning" >Уборка<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="safetySecurity" >Охрана/ безопасность<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="businessServices" >Деловые услуги<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="trainingCourses" >Обучение/ курсы/ репетиторство<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="recordingStudio" >Студии звукозаписи</li> 
        <li id="photo">Фото и видеосъемка</li> 
        <li id="immigration" >Туризм/иммиграция</li> 
        <li id="marketing" >Сетевой маркетинг</li> 
        <li id="animalService" >Услуги для животных</li> 
        <li id="otherServices" >Прочие услуги</li> 
      </ul>
    </div>
      <div id="entertainmentList" className="subSubCaregoryList">
          <ul>
            <li className="subSubCategory">Активный отдых</li> 
            <li className="subSubCategory">Бары/ кафе/ рестораны</li> 
            <li className="subSubCategory">Развлечение для детей</li> 
            <li className="subSubCategory">Квесты</li> 
            <li className="subSubCategory">Ночные клубы</li> 
            <li className="subSubCategory">Кинотеатры</li> 
            <li className="subSubCategory">Театры</li> 
            <li className="subSubCategory">Концерты и события</li> 
            <li className="subSubCategory">Караоке</li> 
            <li className="subSubCategory">Путешествия</li> 
            <li className="subSubCategory">Гостиницы/ отели/ хостелы</li> 
            <li className="subSubCategory">Организация мераприятий</li> 
            <li className="subSubCategory">Другие развлечения</li> 
        </ul>
    </div>
    <div id="healthBeautyList" className="subSubCaregoryList">
      <ul>
        <li className="subSubCategory">Наращивание ресниц</li> 
        <li className="subSubCategory">Косметология</li> 
        <li className="subSubCategory">Коррекция бровей </li>  
        <li className="subSubCategory">Перманентный макияж/ татуаж </li> 
        <li className="subSubCategory">Услуги стилиста</li> 
        <li className="subSubCategory">Эпиляция/ депиляция</li> 
        <li className="subSubCategory">Тату/ пирсинг/ боди-арт</li>   
        <li className="subSubCategory">SPA-процедуры/ солярий </li> 
        <li className="subSubCategory">Стоматология </li>  
        <li className="subSubCategory">Парикмахерские услуги  </li> 
        <li className="subSubCategory">Маникюр/ педикюр</li> 
        <li className="subSubCategory">Макияж/ визаж</li> 
        <li className="subSubCategory">Медицинские услуги</li> 
        <li className="subSubCategory">Пластическая хирургия</li>        
        <li className="subSubCategory">Врачи</li> 
        <li className="subSubCategory">Психология</li> 
        <li className="subSubCategory">Массаж</li> 
        <li className="subSubCategory">Другие услуги для красоты и здоровья</li> 
      </ul>
    </div>
    <div  id="forEnterprisesList" className="subSubCaregoryList" >
      <ul>
        <li className="subSubCategory"> Продажа бизнеса </li> 
        <li className="subSubCategory"> Оборудование </li> 
        <li className="subSubCategory"> Сырье/ материалы</li> 
      </ul>
    </div>
    <div id="carServiceList" className="subSubCaregoryList">
      <ul>
        <li className="subSubCategory" >Автоиойки/ химчистки</li> 
        <li className="subSubCategory" >Автострахование</li> 
        <li className="subSubCategory" >Автошколы/ автоинструкторы</li> 
        <li className="subSubCategory" >Диагностика и ремонт автокондиционеров</li> 
        <li className="subSubCategory" >Компьютерная диагностика автотранспорта</li> 
        <li className="subSubCategory" >Кузовной ремонт и ремонт</li> 
        <li className="subSubCategory" >Ремонт автоэлектрики и автоэлектроники</li> 
        <li className="subSubCategory" >Ремонт двигателя</li> 
        <li className="subSubCategory" >СТО</li> 
        <li className="subSubCategory" >Тюнинг</li>  
        <li className="subSubCategory" >Установка автосигнализаций</li> 
        <li className="subSubCategory" >Установка аудио и видеосистем</li> 
        <li className="subSubCategory" >Шиномонтаж и балансировка</li> 
        <li className="subSubCategory" >Услуги трезвого водителя</li> 
        <li  className="subSubCategory" >Услуги эвакуатора</li> 
      </ul>
    </div>
    <div id="domesticServicesList"  className="subSubCaregoryList">
      <ul>
       <li className="subSubCategory" >Няни/ сиделки</li> 
       <li className="subSubCategory" >Изготовление ключей</li> 
       <li className="subSubCategory" >Пошив и ремонт одежды</li> 
       <li className="subSubCategory" >Ремонт обуви</li> 
       <li className="subSubCategory" >Ремонт часов</li> 
       <li className="subSubCategory" >Ремонт ювелирных изделий</li> 
       <li className="subSubCategory" >Химчистка</li> 
     </ul>
   </div>   
   <div id="transportationWarehousingServicesList" className="subSubCaregoryList" >
     <ul>
       <li className="subSubCategory" >Междугородние перевозки</li> 
       <li className="subSubCategory" >Междунородные перевозки</li> 
       <li className="subSubCategory" >Такси</li> 
       <li className="subSubCategory" >Таможенное оформление</li> 
       <li className="subSubCategory" >Услуги склада</li> 
       <li className="subSubCategory" >Услуги грузчика</li>  
       <li className="subSubCategory" >Курьерские услуги</li> 
     </ul>
   </div>
   <div id="repairMaintenanceOfEquipmentList" className="subSubCaregoryList">
     <ul>
       <li className="subSubCategory" >Аудиотехника</li>  
       <li className="subSubCategory" >Бытовая техника</li> 
       <li className="subSubCategory" >Игровые приставки</li> 
       <li className="subSubCategory" >Климатическая техника</li> 
       <li className="subSubCategory" >Компьютеры</li> 
       <li className="subSubCategory" >Прочая техника</li> 
       <li className="subSubCategory" >Тв и видеотехника</li> 
       <li className="subSubCategory" >Мобильные телефоны/ планшеты</li> 
       <li className="subSubCategory" >Фото и видео аппаратура</li> 
       <li className="subSubCategory" >Музыкальные инструменты</li> 
       </ul>
   </div> 
   <div id="repairBuildList" className="subSubCaregoryList">
     <ul>
       <li className="subSubCategory" >Строительные услуги</li> 
       <li className="subSubCategory" >Вентиляция/ кондиционирование</li> 
       <li className="subSubCategory" >Готовые конструкции</li> 
       <li className="subSubCategory" >Окна/ двери/ балконы</li> 
       <li className="subSubCategory" >Дизайн/ архитектура</li> 
       <li className="subSubCategory" >Отделка/ ремонт</li> 
       <li className="subSubCategory" >Сантехника/ коммуникации</li> 
       <li className="subSubCategory" >Электрика</li> 
       <li className="subSubCategory" >Сварочные работы</li> 
       <li className="subSubCategory" >Ландшафтные работы</li> 
       <li className="subSubCategory" >Напольные работы</li> 
       <li className="subSubCategory" >Кровельные работы</li> 
       <li className="subSubCategory" >Гипсокартонные работы</li> 
       <li className="subSubCategory" >Молярные работы</li> 
       <li className="subSubCategory" >Столярные работы</li> 
       <li className="subSubCategory" >Изготовление мебели на заказ</li> 
       <li className="subSubCategory" >Строительство домов/ коттеджей</li> 
     </ul>
   </div>
   <div id="cleaningList" className="subSubCaregoryList">
    <ul>
      <li className="subSubCategory">Вывоз мусора/ снега</li> 
      <li className="subSubCategory">Дезинфекция помещений</li> 
      <li className="subSubCategory">Мойка окон</li> 
      <li className="subSubCategory">Мойка фасадов</li> 
      <li className="subSubCategory">Промышленный альпинизм</li> 
      <li className="subSubCategory">Уборка домов и коттеджей </li> 
      <li className="subSubCategory">Уборка офисов и магазинов </li> 
      <li className="subSubCategory">Уборка после ремонта</li> 
      <li className="subSubCategory">Уборка прилегающих территорий</li> 
      <li className="subSubCategory">Услуги ассенизатора </li> 
      <li className="subSubCategory">Чистка ковров </li> 
      <li className="subSubCategory">Чистка мягкой мебели</li> 
      </ul>
    </div>     
  <div id="safetySecurityList" className="subSubCaregoryList" >
    <ul>
      <li className="subSubCategory">Система безопасности и охраны </li> 
      <li className="subSubCategory"> Услуги охраны </li> 
      <li className="subSubCategory"> Монтаж охранно-пожарных систем </li> 
      <li className="subSubCategory">Установка домофонов</li>  
    </ul>
  </div>   
  <div id="businessServicesList" className="subSubCaregoryList" >
    <ul >
      <li className="subSubCategory">Финаннсовые услуги</li> 
      <li className="subSubCategory">Дизайн полиграфия</li> 
      <li className="subSubCategory">IT/ интернет/ телеком</li> 
      <li className="subSubCategory">Исследовательские услуги</li> 
      <li className="subSubCategory">Кадровые услуги</li> 
      <li className="subSubCategory">Консалтинговые услуги</li> 
      <li className="subSubCategory"> Набор и коррекция текста</li> 
      <li className="subSubCategory"> Продвижение в социальных сетях</li> 
      <li className="subSubCategory"> Распространение рекламы </li> 
      <li className="subSubCategory"> Риелторские услуги</li> 
      <li className="subSubCategory">Создание и продвижение сайтов/ приложений</li> 
      <li className="subSubCategory">Услуги колл-центра</li> 
      <li className="subSubCategory"> Услуги переводчика</li> 
      <li className="subSubCategory"> Юридические услуги</li> 
    </ul>
  </div> 
  <div id="trainingCoursesList" className="subSubCaregoryList" >
    <ul>
      <li className="subSubCategory">Иностранные языки</li> 
      <li className="subSubCategory">Дошкольное обучение</li> 
      <li className="subSubCategory">Репетиторы по предметам</li> 
      <li className="subSubCategory">Уроки музыки</li> 
      <li className="subSubCategory">Колледжи</li>  
      <li className="subSubCategory">Высшие учебные заведения</li> 
      <li className="subSubCategory">Обучение за рубежом</li> 
      <li className="subSubCategory">Написание / подготовка курсовых и дипломных работ</li> 
      <li className="subSubCategory">Семинары / тренинги / конференции</li> 
      <li className="subSubCategory">Курсы</li> 
   </ul>
  </div>
 <div id="constructionCategoryList" className="subCategoryList">
  <ul>        
    <li id="plumbing" >Сантехника<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="toolsEquipment" >Инструменты и оборудование<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="finishingFacingMaterials" >Отделочные и облицовочные материалы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="mirrorBalconyWindow" >Окна/ двери/ балконы/ зеркала<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="lumber" >Пиломатериалы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="otherElectrics" >Электрика<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="heating" >Отопление<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="constructionMixtures" >Строительные смеси<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="roofing" >Кровля<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="masonry" >Кладочные материалы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="constructionEquipment" >Строительное оборудование<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="fasteners" >Элементы крепежа<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="reinforcedMetalRolling" >Металлопрокат/ арматура<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="meters" >Счетчики<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="constructionChemistry" >Строительная химия<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="precastProducts"  >Железобетонные изделия<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="roadMaterial" >Дорожные материалы</li> 
    <li id="coatingMaterials" >Лакокрасочные материалы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="sandCuttingAway" >Песок, щебень, отсев</li> 
    <li id="ventilation" >Вентиляция<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="otherConstructionRepair" ></li> 
    </ul>
  </div>
    <div className="subSubCaregoryList" id="plumbingList">
    <ul>
      <li className="subSubCategory">Канализация и водопровод</li> 
      <li className="subSubCategory">Насосное оборудование</li> 
      <li className="subSubCategory">Раковины и мойки</li> 
      <li className="subSubCategory">Нагрев воды</li> 
      <li className="subSubCategory">Смесители</li> 
      <li className="subSubCategory">Унитазы, биде и писсуары</li> 
      <li className="subSubCategory">Ванны</li> 
      <li className="subSubCategory">Душевое оборудование</li> 
      <li className="subSubCategory">Магистральные фильтры для воды</li> 
      <li className="subSubCategory">Полотенцесушители</li> 
      <li className="subSubCategory">Прочая сантехника</li> 
    </ul>
    </div>   
    <div className="subSubCaregoryList" id="toolsEquipmentList">
      <ul>
        <li className="subSubCategory">Измерительные инструменты</li> 
        <li className="subSubCategory">Электроинструменты</li> 
        <li className="subSubCategory">Ручные инструменты</li> 
        <li className="subSubCategory">Расходные материалы</li> 
        <li className="subSubCategory">Сварочное оборудование</li> 
        <li className="subSubCategory">Паяльное оборудование</li> 
        <li className="subSubCategory">Генераторы</li> 
        <li className="subSubCategory">Цепные пилы</li> 
        <li className="subSubCategory">Мотокосы и триммеры</li> 
        <li className="subSubCategory">Пневмоинструменты</li> 
        <li className="subSubCategory">Малярные инструменты</li> 
        <li className="subSubCategory">Прочие инструменты и оборудование</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="finishingFacingMaterialsList">
    <ul>
      <li className="subSubCategory">Напольные покрытия</li> 
      <li className="subSubCategory">Фасадные материалы</li> 
      <li className="subSubCategory">Декоративные элементы</li> 
      <li className="subSubCategory">Гипсокартон</li> 
      <li className="subSubCategory">Плитка</li> 
      <li className="subSubCategory">Обои</li> 
      <li className="subSubCategory">Прочие отделочные и облицовочные материалы</li> 
    </ul>
    </div>
    <div className="subSubCaregoryList"  id="mirrorBalconyWindowList">
      <ul>
        <li className="subSubCategory">Окна и комплектующие</li> 
        <li className="subSubCategory">Двери и комплектующие</li> 
        <li className="subSubCategory">Фурнитура для окон и дверей</li> 
        <li className="subSubCategory">Зеркала</li> 
        <li className="subSubCategory">Решетки на окна и двери</li> 
        <li className="subSubCategory">Балконы</li> 
        <li className="subSubCategory">Ролеты, ставни для окон и дверей</li> 
        <li className="subSubCategory">Прочие окна, двери, балконы, зеркала</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="lumberList">
      <ul>
        <li className="subSubCategory">Древесные плиты</li> 
        <li className="subSubCategory">Доски</li> 
        <li className="subSubCategory">Вагонка</li> 
        <li className="subSubCategory">Брус, рейки</li> 
        <li className="subSubCategory">Бревна</li> 
        <li className="subSubCategory">Прочие пиломатериалы</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList"  id="otherElectricsList">
      <ul>
        <li className="subSubCategory">Кабель и комплектующие</li> 
        <li className="subSubCategory">Защита электросети</li> 
        <li className="subSubCategory">Коммутация и управление</li> 
        <li className="subSubCategory">Розетки и выключатели</li> 
        <li className="subSubCategory">Щиты распределительные</li> 
        <li className="subSubCategory">Прочая электрика</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="heatingList">
      <ul>
        <li className="subSubCategory">Печи для бани</li> 
        <li className="subSubCategory">Буржуйки</li> 
        <li className="subSubCategory">Комплектующие и аксессуары для печей</li> 
        <li className="subSubCategory">Прочие печи</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="constructionMixturesList" >
      <ul>
        <li className="subSubCategory">Наливные полы</li> 
        <li className="subSubCategory">Затирочные смеси</li> 
        <li className="subSubCategory">Гидроизоляция</li> 
        <li className="subSubCategory">Цемент</li> 
        <li className="subSubCategory">Шпаклевка</li> 
        <li className="subSubCategory">Штукатурка</li> 
        <li className="subSubCategory">Клей</li> 
        <li className="subSubCategory">Прочие строительные смеси</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="roofingList">
      <ul>
        <li className="subSubCategory">Металлочерепица</li> 
        <li className="subSubCategory">Профнастил</li> 
        <li className="subSubCategory">Гибкая черепица</li> 
        <li className="subSubCategory">Поликарбонат</li> 
        <li className="subSubCategory">Шифер</li> 
        <li className="subSubCategory">Водосток</li> 
        <li className="subSubCategory">Рубероид</li> 
        <li className="subSubCategory">Волнистый лист(ондулин)</li> 
        <li className="subSubCategory">Прочая кровля</li> 
      </ul> 
    </div>
    <div className="subSubCaregoryList" id="masonryList">
      <ul>
        <li className="subSubCategory">Строительные блоки</li> 
        <li className="subSubCategory">Кирпичи</li> 
        <li className="subSubCategory">Прочие кладочные материалы</li> 
      </ul>   
    </div>
    <div className="subSubCaregoryList" id="masonryList">
      <ul>
        <li className="subSubCategory">Строительные тачки</li> 
        <li className="subSubCategory">Строительные леса, стремянки, вышки туры</li> 
        <li className="subSubCategory">Бетономешалки</li> 
        <li className="subSubCategory">Стропы</li> 
        <li className="subSubCategory">Лебедки</li> 
        <li className="subSubCategory">Тали</li> 
        <li className="subSubCategory">Опалубка</li> 
        <li className="subSubCategory">Плиткорезы</li> 
        <li className="subSubCategory">Виброплиты</li> 
        <li className="subSubCategory">Мотобуры</li> 
        <li className="subSubCategory">Прочее строительное оборудование</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="constructionEquipmentList">
      <ul>
        <li className="subSubCategory">Строительные тачки</li> 
        <li className="subSubCategory">Строительные леса, стремянки, <br/> вышки туры</li> 
        <li className="subSubCategory">Бетономешалки</li> 
        <li className="subSubCategory">Стропы</li> 
        <li className="subSubCategory">Лебедки</li> 
        <li className="subSubCategory">Тали</li> 
        <li className="subSubCategory">Опалубка</li> 
        <li className="subSubCategory">Плиткорезы</li> 
        <li className="subSubCategory">Виброплиты</li> 
        <li className="subSubCategory">Мотобуры</li> 
        <li className="subSubCategory">Прочее строительное оборудование</li> 
      </ul>

    </div>
    <div className="subSubCaregoryList" id="fastenersList">
      <ul>
        <li className="subSubCategory">Шайбы</li> 
        <li className="subSubCategory">Хомуты, зажимы</li> 
        <li className="subSubCategory">Болты</li> 
        <li className="subSubCategory">Гайки</li> 
        <li className="subSubCategory">Саморезы</li> 
        <li className="subSubCategory">Дюбели</li> 
        <li className="subSubCategory">Шурупы</li> 
        <li className="subSubCategory">Анкеры</li> 
        <li className="subSubCategory">Гвозди</li> 
        <li className="subSubCategory">Кронштейны</li> 
        <li className="subSubCategory">Скобы</li> 
        <li className="subSubCategory">Шпильки резьбовые</li> 
        <li className="subSubCategory">Прочие элементы крепежа</li> 
      </ul> 
    </div>
    <div className="subSubCaregoryList" id="reinforcedMetalRollingList">
      <ul>
        <li className="subSubCategory">Сортовой и фасонный прокат</li> 
        <li className="subSubCategory">Трубный прокат</li> 
        <li className="subSubCategory">Листовой прокат</li> 
        <li className="subSubCategory">Прочий металлопрокат, арматура</li> 
      </ul>
    </div>    
    <div className="subSubCaregoryList" id="metersList">
      <ul>
        <li className="subSubCategory">Газа</li> 
        <li className="subSubCategory">Электричества</li> 
        <li className="subSubCategory">Тепла</li> 
        <li className="subSubCategory">Воды</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="constructionChemistryList">
      <ul>
        <li className="subSubCategory">Герметики</li> 
        <li className="subSubCategory">Мастика</li> 
        <li className="subSubCategory">Грунтовка</li> 
        <li className="subSubCategory">Монтажная пена</li> 
        <li className="subSubCategory">Прочая строительная химия</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="precastProductsList">
      <ul>
        <li className="subSubCategory">Плиты перекрытия</li> 
        <li className="subSubCategory">Фундаментные блоки</li> 
        <li className="subSubCategory">Сваи</li> 
        <li className="subSubCategory">Бетонные кольца</li> 
        <li className="subSubCategory">Асбестоцементные трубы</li> 
        <li className="subSubCategory">Прогоны</li> 
        <li className="subSubCategory">Прочие железобетонные изделия</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="coatingMaterialsList">
    <ul>
      <li className="subSubCategory">Лаки</li> 
      <li className="subSubCategory">Растворители</li> 
      <li className="subSubCategory">Краска</li> 
      <li className="subSubCategory">Эмаль</li> 
      <li className="subSubCategory">Прочие лакокрасочные материалы</li> 
    </ul>
    </div>
    <div className="subSubCaregoryList" id="ventilationList">
      <ul>
        <li className="subSubCategory">Вытяжные вентиляторы</li> 
        <li className="subSubCategory">Воздуховоды</li> 
        <li className="subSubCategory">Комплектующие для вентиляции</li> 
        <li className="subSubCategory">Вентиляционные решетки</li> 
        <li className="subSubCategory">Прочая вентиляция</li> 
      </ul>
    </div>
  <div id="rentCategoryList" className="subCategoryList">
        <ul>
          <li id="rentalServicesOfSpecialEquipment" className="subcategory" >Аренда и услуги спецтехники<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
          <li id="rentalOfTools" className="subcategory" >Аренда инструментов и оборудования<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
          <li id="rentalVehicles" className="subcategory" >Аренда транспортных средств<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
          <li id="rentCar" className="subcategory" >Аренда авто</li> 
          <li id="rentalGoodsEvents" className="subcategory" >Аренда товаров для мероприятий и отдыха<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
          <li id="electronicRental" className="subcategory" >Прокат электроники<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
          <li className="subcategory" >Аренда детских товаров</li> 
          <li id="leaseOtherGoods" className="subcategory" >Аренда прочих товаров</li> 
        </ul>
  </div>
    <div  className="subSubCaregoryList" id="rentalServicesOfSpecialEquipmentList">
      <ul>
        <li className="subSubCategory">Аренда кранов и автокранов</li> 
        <li className="subSubCategory">Аренда экскаваторов, тракторов</li> 
        <li className="subSubCategory">Аренда погрузчиков</li> 
        <li className="subSubCategory">Аренда автовышек</li> 
        <li className="subSubCategory">Аренда манипуляторов</li> 
        <li className="subSubCategory">Аренда катков и асфальтоукладчиков</li> 
        <li className="subSubCategory">Аренда другой спецтехники</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="rentalOfToolsList">
      <ul>
        <li className="subSubCategory">Аренда компрессоров</li> 
        <li className="subSubCategory">Аренда генераторов</li> 
        <li className="subSubCategory">Аренда строительных лесов, <br/> люлек и вышек-тур</li> 
        <li className="subSubCategory">Аренда инструмента</li> 
        <li className="subSubCategory">Аренда бетономешалок</li> 
        <li className="subSubCategory">Аренда опалубки</li> 
        <li className="subSubCategory">Аренда тепловых пушек</li> 
        <li className="subSubCategory">Аренда виброплит</li> 
        <li className="subSubCategory">Аренда прочего инструмента <br/> и оборудования</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="rentalVehiclesList">
      <ul>
        <li className="subSubCategory">Аренда грузовых авто</li> 
        <li className="subSubCategory">Аренда автобусов и микроавтобусов</li> 
        <li className="subSubCategory">Аренда мототранспорта</li> 
        <li className="subSubCategory">Прокат велосипедов</li> 
        <li className="subSubCategory">Аренда других видов транспорта</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="rentalGoodsEventsList">
      <ul>
        <li className="subSubCategory">Аренда мебели</li> 
        <li className="subSubCategory">Аренда палаток, шатров и юрт</li> 
        <li className="subSubCategory">Прокат посуды</li> 
        <li className="subSubCategory">Аренда звукового оборудования</li> 
        <li className="subSubCategory">Аренда фото и видео оборудования</li> 
        <li className="subSubCategory">Аренда прочих товаров для <br/> мероприятий и отдыха</li> 
      </ul>
    </div>  
    <div className="subSubCaregoryList" id="electronicRentalList">
      <ul>
        <li className="subSubCategory">Аренда телевизоров, <br/> проекторов и LED-экранов</li> 
        <li className="subSubCategory">Аренда Playstation</li> 
        <li className="subSubCategory">Аренда других товаров <br/> электроники</li> 
      </ul>
    </div>
    
  
 <div id="propertyCategoryList" className="subCategoryList">
      <ul>
        <li id="dailyRent" className="subcategory" >Посуточная аренда жилья<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Аренда квартир долгосрочно</li> 
        <li className="subcategory" >Аренда домов долгосрочно</li> 
        <li className="subcategory" >Аренда комнат долгосрочно</li> 
        <li className="subcategory" >Продажа квартир</li> 
        <li id="landForSaleAndRent" className="subcategory" >Земля<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Продажа домов</li> 
        <li id="commercialPremises" className="subcategory" >Коммерческие помещения<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Продажа комнат</li> 
        <li id="parkingGarages" className="subcategory" >Гаражи/ стоянки<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="exchange" className="subcategory" >Обмен<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="internationalRealEstate" className="subcategory" >Зарубежная недвижимость<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      </ul>
  </div>
  <div className="subSubCaregoryList" id="dailyRentList">
    <ul>
      <li className="subSubCategory">Аренда квартир посуточно / почасово</li> 
      <li className="subSubCategory">Аренда домов посуточно / почасово</li> 
      <li className="subSubCategory">Аренда комнат посуточно / почасово</li> 
      <li className="subSubCategory">Отели и базы отдыха</li> 
      <li className="subSubCategory">Хостелы и койко-места</li> 
    </ul>   
  </div> 
  <div className="subSubCaregoryList" id="landForSaleAndRentList">
    <ul >
      <li className="subSubCategory">Аренда</li> 
      <li className="subSubCategory">Продажа</li> 
    </ul>
  </div>
   <div className="subSubCaregoryList" id="commercialPremisesList">
    <ul>
      <li className="subSubCategory">Аренда</li> 
      <li className="subSubCategory">Продажа</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="parkingGaragesList">
    <ul>
      <li className="subSubCategory">Аренда</li> 
      <li className="subSubCategory">Продажа</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="exchangeList">
    <ul>
      <li className="subSubCategory">Квартиры</li> 
      <li className="subSubCategory">Дома</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="internationalRealEstateList">
    <ul>
      <li className="subSubCategory">Аренда</li> 
      <li className="subSubCategory">Продажа</li> 
    </ul>
  </div>
  <div className="subCategoryList" id="electronicsCategoryList">
    <ul>
      <li id="phonesAccessories" className="subcategory" >Телефоны и аксессуары<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="computersAccessories" className="subcategory" >Компьютеры и комплектующие<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="photoVideo" className="subcategory" >Фото/ видео<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="tvEquipment" className="subcategory" >Тв/ видеотехника<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="audioDevices" className="subcategory" >Аудиотехника<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="gamesBoxes" className="subcategory" >Игры и игровые приставки<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="tabletsEbooks"  className="subcategory" >Планшеты/ эл. книги и аксессуары<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="laptopsAccessories" className="subcategory" >Ноутбуки и аксессуары<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="appliancesForTheHome" className="subcategory" >Техника для дома<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="kitchenAppliances" className="subcategory" >Техника для кухни<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="climaticEquipment" className="subcategory" >Климатическое оборудование<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="individualCare" className="subcategory" >Индивидуальный уход<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Аксессуары и комплектующие</li> 
      <li className="subcategory" >Прочая электроника</li>   
    </ul>
  </div>
  <div className="subSubCaregoryList" id="phonesAccessoriesList">
    <ul>
      <li className="subSubCategory">Мобильные телефоны / смартфоны</li> 
      <li className="subSubCategory">Запчасти для телефонов</li> 
      <li className="subSubCategory">Аксессуары для телефонов</li> 
      <li className="subSubCategory">Сим-карты / тарифы / номера</li> 
      <li className="subSubCategory">Стационарные телефоны</li> 
      <li className="subSubCategory">Рации и прочие телефоны</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="computersAccessoriesList">
    <ul>
      <li className="subSubCategory">Настольные компьютеры</li> 
      <li className="subSubCategory">Серверы</li> 
      <li className="subSubCategory">Комплектующие и аксессуары</li> 
      <li className="subSubCategory">Периферийные устройства</li> 
      <li className="subSubCategory">Мониторы</li> 
      <li className="subSubCategory">Внешние накопители</li> 
      <li className="subSubCategory">Расходные материалы</li> 
      <li className="subSubCategory">Другое</li> 
    </ul>
  </div> 
  <div className="subSubCaregoryList" id="photoVideoList">
    <ul>
      <li className="subSubCategory">Пленочные фотоаппараты</li> 
      <li className="subSubCategory">Цифровые фотоаппараты</li> 
      <li className="subSubCategory">Видеокамеры</li> 
      <li className="subSubCategory">Экшн-камеры</li> 
      <li className="subSubCategory">Объективы</li> 
      <li className="subSubCategory">Штативы / моноподы</li> 
      <li className="subSubCategory">Фотовспышки</li> 
      <li className="subSubCategory">Аксессуары для фото / видеокамер</li> 
      <li className="subSubCategory">Телескопы / бинокли</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="tvEquipmentList">
    <ul>
      <li className="subSubCategory">Dvd плееры</li> 
      <li className="subSubCategory">Телевизоры</li> 
      <li className="subSubCategory">Проекторы</li> 
      <li className="subSubCategory">Аксессуары для ТВ/Видеотехники</li> 
      <li className="subSubCategory">Спутниковое тв</li> 
      <li className="subSubCategory">Прочая тв / видеотехника</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="audioDevicesList">
    <ul>
      <li className="subSubCategory">Mp3 плееры</li> 
      <li className="subSubCategory">Магнитолы</li> 
      <li className="subSubCategory">Музыкальные центры</li> 
      <li className="subSubCategory">Акустические системы</li> 
      <li className="subSubCategory">Наушники</li> 
      <li className="subSubCategory">Радиоприемники</li> 
      <li className="subSubCategory">Портативная акустика</li> 
      <li className="subSubCategory">Усилители / ресиверы</li> 
      <li className="subSubCategory">Cd / md / виниловые проигрыватели</li> 
      <li className="subSubCategory">Прочая аудиотехника</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="gamesBoxesList">
    <ul>
      <li className="subSubCategory">Игры для приставок</li> 
      <li className="subSubCategory">Приставки</li> 
      <li className="subSubCategory">Игры для PC</li> 
      <li className="subSubCategory">Аксессуары</li> 
      <li className="subSubCategory">Герои игр</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="tabletsEbooksList">
    <ul>
      <li className="subSubCategory">Планшетные компьютеры</li> 
      <li className="subSubCategory">Электронные книги</li> 
      <li className="subSubCategory">Графические планшеты</li> 
      <li className="subSubCategory">Запчасти для планшетов / эл. книг</li> 
      <li className="subSubCategory">Аксессуары для планшетов / эл. книг</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="laptopsAccessoriesList">
    <ul>
      <li className="subSubCategory">Ноутбуки</li> 
      <li className="subSubCategory">Запчасти для ноутбуков</li> 
      <li className="subSubCategory">Аксессуары для ноутбуков</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="appliancesForTheHomeList">
    <ul>
      <li className="subSubCategory">Пылесосы</li> 
      <li className="subSubCategory">Утюги</li> 
      <li className="subSubCategory">Стиральные машины</li> 
      <li className="subSubCategory">Швейные машины и оверлоки</li> 
      <li className="subSubCategory">Вязальные машины</li> 
      <li className="subSubCategory">Фильтры для воды</li> 
      <li className="subSubCategory">Прочая техника для дома</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="kitchenAppliancesList">
    <ul>
      <li className="subSubCategory">Холодильники</li> 
      <li className="subSubCategory">Микроволновые печи</li> 
      <li className="subSubCategory">Плиты / печи</li> 
      <li className="subSubCategory">Электрочайники</li> 
      <li className="subSubCategory">Кофеварки / кофемолки</li> 
      <li className="subSubCategory">Кухонные комбайны и измельчители</li> 
      <li className="subSubCategory">Пароварки, мультиварки</li> 
      <li className="subSubCategory">Хлебопечки</li> 
      <li className="subSubCategory">Посудомоечные машины</li> 
      <li className="subSubCategory">Вытяжки</li> 
      <li className="subSubCategory">Прочая техника для кухни</li> 
    </ul>
  </div>
  <div  className="subSubCaregoryList" id="climaticEquipmentList">
    <ul>
      <li className="subSubCategory">Вентиляторы</li> 
      <li className="subSubCategory">Кондиционеры</li> 
      <li className="subSubCategory">Обогреватели</li> 
      <li className="subSubCategory">Очистители воздуха и озонаторы</li> 
      <li className="subSubCategory">Увлажнители воздуха</li> 
      <li className="subSubCategory">Термометры и гигрометры</li> 
      <li className="subSubCategory">Запчасти и аксессуары для климатического оборудования</li> 
      <li className="subSubCategory">Другое климатическое оборудование</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="individualCareList">
    <ul>
      <li className="subSubCategory">Бритвы, эпиляторы, машинки для стрижки</li> 
      <li className="subSubCategory">Фены, укладка волос</li> 
      <li className="subSubCategory">Весы</li> 
      <li className="subSubCategory">Прочая техника для индивидуального ухода</li> 
    </ul>
  </div>


  <div id="gardenCategoryList" className="subCategoryList">
    <ul >
        <li className="subcategory" >Канцтовары/ расходные материалы</li> 
        <li id="furniture" className="subcategory" >Мебель<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Продукты питания/ напитки</li> 
        <li id="interiorItems" className="subcategory" >Предметы интерьера<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Комнатные растения</li> 
        <li className="subcategory" >Посуда/ кухонная утварь</li> 
        <li className="subcategory" >Садовый инвентарь</li> 
        <li className="subcategory" >Сад/ огород</li> 
        <li className="subcategory" >Хозяйственный инвентарь/ <br/> бытовая химия</li> 
        <li className="subcategory" >Прочие товары для дома</li> 
      </ul>
  </div>

  <div className="subSubCaregoryList" id="furnitureList">
    <ul>
      <li className="subSubCategory">Мебель для гостиной</li> 
      <li className="subSubCategory">Мебель для спальни</li> 
      <li className="subSubCategory">Мебель для прихожей</li> 
      <li className="subSubCategory">Кухонная мебель</li> 
      <li className="subSubCategory">Мебель для ванной комнаты</li> 
      <li className="subSubCategory">Офисная мебель</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="interiorItemsList">
    <ul>
      <li className="subSubCategory">Светильники</li> 
      <li className="subSubCategory" >Текстиль</li> 
      <li className="subSubCategory">Декор окон</li> 
    </ul>
  </div>


  <div id="workCategoryList" className="subCategoryList">
      <ul>
        <li id="retailing" className="subcategory" >Розничная торговля/ продажи/ закупки<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="logistics" className="subcategory" >Транспорт/ Логистика/ Склад<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="architecture" className="subcategory" >Строительство/ Отделочные работы/ Архитектура<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="realEstateWork" className="subcategory" >Недвижимость<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="coverage" className="subcategory" >Банки/ Финансы/ Страхование<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="economics" className="subcategory" >Финансы/ бухгалтерия/ экономика<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li className="subcategory" >Юристы/ адвокаты/ нотариусы</li> 
        <li id="securityProtection" className="subcategory" >Охрана/ безопасность<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="domesticStaff" className="subcategory" >Домашний персонал/ Сервис и быт<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="beautyFitnessSports"  className="subcategory" >Красота/ фитнес/ спорт<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="hotelTourismHoliday" className="subcategory" >Гостиницы/ туризм/ отдых<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="barsCafeRestaurants" className="subcategory" >Бары/ рестораны/ кафе<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="educationScienceTranslation" className="subcategory" >Образование/ Наука/ Перевод<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="entertainmentCulture" className="subcategory" >Культура/ исскуство/ развлечения<img className="rightPicture" src="./icons/right.png"  alt="right"/> </li> 
        <li id="pharmacyMedicine" className="subcategory" >Медицина/ фармацевтика<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="internetComputersTelecom" className="subcategory" >Интернет/ IT/ компьютеры/ телеком<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="marketingAdvertising" className="subcategory" >Маркетинг/ Реклама/ PR<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="productionWorkingSpecialties" className="subcategory" >Производство/ Рабочие специальности<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="administrativePersonnel" className="subcategory" >Административный персонал<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="personnelManagement" className="subcategory" >HR/ Управление персоналом</li> 
        <li id="beginningCareer" className="subcategory" >Начало карьеры/ стажировка/ практика</li> 
        <li id="carWash" className="subcategory" >СТО/ автомойка<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="topManagement" className="subcategory" >Топ-менеджмент/ руководство высшего звена</li> 
        <li id="agricultureForestry" className="subcategory" >Сельское и лесное хозяйство/ Агробизнес/ Животноводство<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="workAbroad" className="subcategory" >Работа за рубежем<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="engineers" className="subcategory" >Инженеры<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="customerService" className="subcategory" >Клиентский сервис<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
        <li id="otherFieldsActivity" className="subcategory" >Другие сферы деятельности</li> 
      </ul>
  </div>
    <div className="subSubCaregoryList" id="retailingList">
        <ul>
          <li className="subSubCategory">Продавец</li> 
          <li className="subSubCategory">Продавец консультант</li> 
          <li className="subSubCategory">Торговый представитель</li> 
          <li className="subSubCategory">Менеджер по продажам</li> 
          <li className="subSubCategory">Мерчендайзер</li> 
          <li className="subSubCategory">Кассир</li> 
          <li className="subSubCategory">Флорист</li> 
          <li className="subSubCategory">Администратор магазина / торгового зала</li> 
          <li className="subSubCategory">Менеджер по снабжению</li> 
          <li className="subSubCategory">Менеджер интернет-магазина</li> 
          <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="logisticsList" >
      <ul>
        <li className="subSubCategory">Водитель</li> 
        <li className="subSubCategory">Курьер</li> 
        <li className="subSubCategory">Грузчик</li> 
        <li className="subSubCategory">Экспедитор</li> 
        <li className="subSubCategory">Машинист</li> 
        <li className="subSubCategory">Дальнобойщик</li> 
        <li className="subSubCategory">Кладовщик</li> 
        <li className="subSubCategory">Карщик</li> 
        <li className="subSubCategory">Логист</li> 
        <li className="subSubCategory">Комплектовщик</li> 
        <li className="subSubCategory">Диспетчер</li> 
        <li className="subSubCategory">Работа в такси</li> 
        <li className="subSubCategory">Другое</li> 
    </ul>
    </div>
    <div className="subSubCaregoryList" id="architectureList" >
      <ul>
        <li className="subSubCategory">Разнорабочий</li> 
        <li className="subSubCategory">Сварщик</li> 
        <li className="subSubCategory">Монтажник / Установщик</li> 
        <li className="subSubCategory">Электромонтажник</li> 
        <li className="subSubCategory">Сантехник</li> 
        <li className="subSubCategory">Электрик</li> 
        <li className="subSubCategory">Каменщик</li> 
        <li className="subSubCategory">Слесарь</li> 
        <li className="subSubCategory">Плотник</li> 
        <li className="subSubCategory">Маляр</li> 
        <li className="subSubCategory">Прораб</li> 
        <li className="subSubCategory">Бетонщик</li> 
        <li className="subSubCategory">Арматурщик</li> 
        <li className="subSubCategory">Машинист</li> 
        <li className="subSubCategory">Штукатур</li> 
        <li className="subSubCategory">Геодезист</li> 
        <li className="subSubCategory">Дизайнер интерьера</li> 
        <li className="subSubCategory">Машинист крана</li> 
        <li className="subSubCategory">Проектировщик</li> 
        <li className="subSubCategory">Промышленный альпинист</li> 
        <li className="subSubCategory">Сметчик</li> 
        <li className="subSubCategory">Архитектор</li> 
        <li className="subSubCategory">Строительство дорог</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="realEstateWorkList">
      <ul>
        <li className="subSubCategory">Риэлтор</li> 
        <li className="subSubCategory">Менеджер по продажам недвижимости</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
  </div>
  <div className="subSubCaregoryList" id="coverageList">
    <ul>
        <li className="subSubCategory">Менеджер по работе с клиентами банка</li> 
        <li className="subSubCategory">Экономист</li> 
        <li className="subSubCategory">Инкассатор</li> 
        <li className="subSubCategory">Другое</li> 
        <li className="subSubCategory">Оценщик</li> 
      </ul>
  </div>
  <div className="subSubCaregoryList" id="economicsList" >
    <ul>
      <li className="subSubCategory">Бухгалтер</li> 
      <li className="subSubCategory">Кассир в бухгалтерию</li> 
      <li className="subSubCategory">Экономист</li> 
      <li className="subSubCategory"> Аудитор</li> 
      <li className="subSubCategory"> Другое</li> 
    </ul>
    </div>
  <div className="subSubCaregoryList" id="securityProtectionList">
    <ul >
      <li className="subSubCategory">Охранник</li> 
      <li className="subSubCategory">Сторож</li> 
      <li className="subSubCategory">Водитель охранник</li> 
      <li className="subSubCategory">Вахтер</li> 
      <li className="subSubCategory">Сотрудник службы безопасности</li> 
      <li className="subSubCategory">Начальник охраны</li> 
      <li className="subSubCategory">Телохранитель</li> 
      <li className="subSubCategory">Пожарный</li> 
      <li className="subSubCategory">Другое</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="domesticStaffList">
    <ul >
        <li className="subSubCategory">Няня</li> 
        <li className="subSubCategory">Домработница</li> 
        <li className="subSubCategory">Сиделка</li> 
        <li className="subSubCategory">Уборщица / Техничка</li> 
        <li className="subSubCategory">Повар</li> 
        <li className="subSubCategory">Дворник</li> 
        <li className="subSubCategory">Садовник</li> 
        <li className="subSubCategory">Другое</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="beautyFitnessSportList">
        <ul>
          <li className="subSubCategory">Мастер маникюра и педикюра</li> 
          <li className="subSubCategory">Парикмахер</li> 
          <li className="subSubCategory">Администратор в сфере красоты и спорта</li> 
          <li className="subSubCategory">Тренер</li> 
          <li className="subSubCategory">Стилист</li> 
          <li className="subSubCategory">Косметолог</li> 
          <li className="subSubCategory">Массажист</li> 
          <li className="subSubCategory">Визажист</li> 
          <li className="subSubCategory">Другое</li> 
        </ul>
      </div>
    <div className="subSubCaregoryList" id="hotelTourismHolidayList">
      <ul>
        <li className="subSubCategory">Администратор отеля/гостинницы</li> 
        <li className="subSubCategory">Горничная</li> 
        <li className="subSubCategory">Консьерж</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
  <div className="subSubCaregoryList" id="barsCafeRestaurantsList">
    <ul >
        <li className="subSubCategory">Повар</li> 
        <li className="subSubCategory">Официант</li> 
        <li className="subSubCategory">Пекарь / Кондитер</li> 
        <li className="subSubCategory">Сушист</li> 
        <li className="subSubCategory">Бармен</li> 
        <li className="subSubCategory">Посудомойщица</li> 
        <li className="subSubCategory">Администратор ресторана / кафе</li> 
        <li className="subSubCategory">Бариста</li> 
        <li className="subSubCategory">Шашлычник</li> 
        <li className="subSubCategory">Хостес</li> 
        <li className="subSubCategory">Мясник</li> 
        <li className="subSubCategory">Кальянщик</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="educationScienceTranslationList">
      <ul>
        <li className="subSubCategory">Преподаватель / учитель / педагог</li> 
        <li className="subSubCategory">Репетитор</li> 
        <li className="subSubCategory">Воспитатель детского сада</li> 
        <li className="subSubCategory">Переводчики</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="entertainmentCultureList" >
      <ul>
        <li className="subSubCategory">Фотограф</li> 
        <li className="subSubCategory">Художник</li> 
        <li className="subSubCategory">Модель</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
  <div className="subSubCaregoryList" id="pharmacyMedicineList" >
      <ul>
        <li className="subSubCategory">Медсестра / Медбрат</li> 
        <li className="subSubCategory">Стоматолог</li> 
        <li className="subSubCategory">Ассистент стоматолога</li> 
        <li className="subSubCategory">Фармацевт / Провизор</li> 
        <li className="subSubCategory">Санитарка / санитар</li> 
        <li className="subSubCategory">Врач</li> 
        <li className="subSubCategory">Фельдшер</li> 
        <li className="subSubCategory">Лаборант</li> 
        <li className="subSubCategory">Логопед / Дефектолог</li> 
        <li className="subSubCategory">Психолог</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
  </div>
  <div  className="subSubCaregoryList" id="internetComputersTelecomList">
    <ul>
      <li className="subSubCategory">Программисты / Разработчики</li> 
      <li className="subSubCategory">Системный администратор</li> 
      <li className="subSubCategory">Другое</li> 
    </ul>
  </div>
    <div className="subSubCaregoryList"  id="marketingAdvertisingList">
        <ul>
          <li className="subSubCategory">Дизайнер</li> 
          <li className="subSubCategory">Промоутер</li> 
          <li className="subSubCategory">Менеджер по рекламе</li> 
          <li className="subSubCategory">SMM-менеджер</li> 
          <li className="subSubCategory">PR Менеджер</li> 
          <li className="subSubCategory">Маркетолог</li> 
          <li className="subSubCategory">Копирайтер</li> 
          <li className="subSubCategory">Другое</li> 
          <li className="subSubCategory">Контент менеджер</li> 
        </ul>
    </div>
  <div className="subSubCaregoryList" id="productionWorkingSpecialtiesList">
      <ul>
        <li className="subSubCategory">Сборщик мебели</li> 
        <li className="subSubCategory">Оператор на производство</li> 
        <li className="subSubCategory">Швея</li> 
        <li className="subSubCategory">Токарь</li> 
        <li className="subSubCategory">Упаковщик / Комплектовщик</li> 
        <li className="subSubCategory">Технолог</li> 
        <li className="subSubCategory">Механик</li> 
        <li className="subSubCategory">Фрезеровщик</li> 
        <li className="subSubCategory">Стропальщик</li> 
        <li className="subSubCategory">Энергетик</li> 
        <li className="subSubCategory">Шахтер</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
  </div>
    <div className="subSubCaregoryList" id="administrativePersonnelList">
      <ul>
        <li className="subSubCategory">Администратор</li> 
        <li className="subSubCategory">Офис менеджер</li> 
        <li className="subSubCategory">Ассистент / помощник руководителя</li> 
        <li className="subSubCategory">Секретарь</li> 
        <li className="subSubCategory"> Другое</li> 
      </ul>
    </div>
    <div className="subSubCaregoryList" id="carWashList">
        <ul>
            <li className="subSubCategory"> Автомойщик</li> 
            <li className="subSubCategory">Мастер СТО</li> 
            <li className="subSubCategory">Автослесарь</li> 
            <li className="subSubCategory">Автоэлектрик</li> 
            <li className="subSubCategory">Шиномонтажник</li> 
            <li className="subSubCategory">Администратор автомойки / СТО</li> 
            <li className="subSubCategory">Автомеханик</li> 
            <li className="subSubCategory">Другое</li> 
          </ul>
    </div>
    <div className="subSubCaregoryList" id="agricultureForestryList">
        <ul>
            <li className="subSubCategory">Механизатор</li> 
            <li className="subSubCategory">Тракторист</li> 
            <li className="subSubCategory">Пастух</li> 
            <li className="subSubCategory">Агроном</li> 
            <li className="subSubCategory">Ветеринар</li> 
            <li className="subSubCategory"> Другое</li> 
          </ul>
    </div>
    <div className="subSubCaregoryList" id="workAbroadList">
      <ul>
        <li className="subSubCategory">Разнорабочий</li> 
        <li className="subSubCategory">Водитель за рубежом</li> 
        <li className="subSubCategory">Повар за рубежом</li> 
        <li className="subSubCategory">Няня за рубежом</li> 
        <li className="subSubCategory">Сиделка за рубежом</li> 
        <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
      <div className="subSubCaregoryList" id="engineersList">
        <ul>
          <li className="subSubCategory">Инженер-конструктор</li> 
          <li className="subSubCategory">Проектировщик</li> 
          <li className="subSubCategory">Инженер по охране труда и технике безопасности</li> 
          <li className="subSubCategory">Инженер ПТО</li> 
          <li className="subSubCategory">Другое</li> 
        </ul>
      </div>
      <div className="subSubCaregoryList" id="customerServiceList">
        <ul>
          <li className="subSubCategory">Оператор call центра</li> 
          <li className="subSubCategory">Продажи по телефону</li> 
          <li className="subSubCategory">Служба поддержки пользователей</li> 
          <li className="subSubCategory">Модераторы</li> 
          <li className="subSubCategory">Другое</li> 
      </ul>
    </div>
    
     
 
  <div id="modaCategoryList" className="subCategoryList" >
  <ul >
    <li id="womensWear" className="subcategory" >Женская одежда<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="swimwear" className="subcategory" >Женское белье, купальники<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="womenShoes" className="subcategory" >Женская обувь<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="maternityWear" className="subcategory" >Одежда для беременных<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="mensWear" className="subcategory" >Мужская одежда<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="hats" className="subcategory" >Головные уборы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="mensShoes" className="subcategory" >Мужская обувь<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="mensUnderwear" className="subcategory" >Мужское белье, плавки<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="forWedding" className="subcategory" >Для свадьбы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li className="subcategory" >Мода разное</li> 
    <li id="accessories" className="subcategory" >Аксессуары<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="wristwatch" className="subcategory" >Наручные часы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="presents" className="subcategory" >Подарки<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="goodsForBeautyHealth" className="subcategory" >Товары для красоты и здоровье<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    <li id="workClothesWorkBoots" className="subcategory" >Спецодежда и спецобувь<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    </ul>
  </div>
 
  <div className="subSubCaregoryList" id="womensWearList">
    <ul>
      <li className="subSubCategory">Платья</li> 
      <li className="subSubCategory">Боди</li> 
      <li className="subSubCategory">Майки и футболки</li> 
      <li className="subSubCategory">Блузы и рубашки</li> 
      <li className="subSubCategory">Свитеры, кардиганы, худи</li> 
      <li className="subSubCategory">Юбки</li> 
      <li className="subSubCategory">Верхняя одежда</li> 
      <li className="subSubCategory">Шорты</li> 
      <li className="subSubCategory">Джинсы</li> 
      <li className="subSubCategory">Брюки</li> 
      <li className="subSubCategory">Комбинезоны</li> 
      <li className="subSubCategory">Костюмы</li> 
      <li className="subSubCategory">Женские пиджаки и жакеты</li> 
      <li className="subSubCategory">Одежда для дома</li> 
      <li className="subSubCategory">Спортивная одежда</li> 
      <li className="subSubCategory">Женская национальная одежда</li> 
      <li className="subSubCategory">Мусульманская одежда для женщин</li> 
    </ul>
  </div>
  <div className="subSubCaregoryList" id="swimwearList"> 
    <ul>
      <li className="subSubCategory">Пляжные платья и туники</li> 
      <li className="subSubCategory">Пляжные парео и накидки</li> 
      <li className="subSubCategory">Купальники</li> 
      <li className="subSubCategory">Трусы</li> 
      <li className="subSubCategory">Бюстгальтеры</li> 
      <li className="subSubCategory">Комплекты нижнего белья</li> 
      <li className="subSubCategory">Корректирующее белье</li> 
      <li className="subSubCategory">Корректирующие корсеты</li> 
      <li className="subSubCategory">Корсеты</li> 
      <li className="subSubCategory">Носки / колготки / чулки</li> 
      <li className="subSubCategory">Другие</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="womenShoesList">
    <ul>
      <li className="subSubCategory">Ботинки и полуботинки</li> 
      <li className="subSubCategory">Ботильоны</li> 
      <li className="subSubCategory">Туфли</li> 
      <li className="subSubCategory">Балетки</li> 
      <li className="subSubCategory">Лоферы</li> 
      <li className="subSubCategory">Сапоги, полусапожки</li> 
      <li className="subSubCategory">Угги</li> 
      <li className="subSubCategory">Мокасины и слипоны</li> 
      <li className="subSubCategory">Кроссовки</li> 
      <li className="subSubCategory">Кеды</li> 
      <li className="subSubCategory">Домашние тапочки</li> 
      <li className="subSubCategory">Ортопедическая обувь</li> 
      <li className="subSubCategory">Босоножки, сандали, вьетнамки</li> 
      <li className="subSubCategory">Другие</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="maternityWearList">
    <ul>
      <li className="subSubCategory">Футболки и майки для беременных</li> 
      <li className="subSubCategory">Блузки и туники для беременных</li> 
      <li className="subSubCategory">Платья для беременных</li> 
      <li className="subSubCategory">Юбки для беременных</li> 
      <li className="subSubCategory">Купальники для беременных</li> 
      <li className="subSubCategory">Бюстгальтеры для кормящих и беременных</li> 
      <li className="subSubCategory">Шорты для беременных</li> 
      <li className="subSubCategory">Комбинезоны для беременных</li> 
      <li className="subSubCategory">Штаны и брюки для беременных</li> 
      <li className="subSubCategory">Лосины и леггинсы для беременных</li> 
      <li className="subSubCategory">Джинсы для беременных</li> 
      <li className="subSubCategory">Колготки для беременных</li> 
      <li className="subSubCategory">Куртки для беременных и кормящих</li> 
      <li className="subSubCategory">Пальто для беременных и кормящих</li> 
      <li className="subSubCategory">Домашняя одежда для беременных</li> 
      <li className="subSubCategory">Свитеры и толстовки для беременных</li> 
      <li className="subSubCategory">Костюмы для беременных</li> 
      <li className="subSubCategory">Сарафаны для беременных</li> 
      <li className="subSubCategory">Пояса для беременных</li> 
      <li className="subSubCategory">Спортивная одежда для беременных</li> 
      <li className="subSubCategory">Другие</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="mensWearList">
    <ul>
      <li className="subSubCategory">Футболки и майки</li> 
      <li className="subSubCategory">Рубашки и тенниски</li> 
      <li className="subSubCategory">Кофты и свитеры</li> 
      <li className="subSubCategory">Верхняя одежда</li> 
      <li className="subSubCategory">Шорты</li> 
      <li className="subSubCategory">Джинсы</li> 
      <li className="subSubCategory">Брюки</li> 
      <li className="subSubCategory">Костюмы и пиджаки</li> 
      <li className="subSubCategory">Комбинезоны</li> 
      <li className="subSubCategory">Мужская домашняя одежда</li> 
      <li className="subSubCategory">Спортивная одежда</li> 
      <li className="subSubCategory">Мужская национальная одежда</li> 
      <li className="subSubCategory">Мусульманская одежда для мужчин</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="hatsList">
    <ul>
      <li className="subSubCategory">Бейсболки и кепки</li> 
      <li className="subSubCategory">Балаклавы</li> 
      <li className="subSubCategory">Панамы</li> 
      <li className="subSubCategory">Шапки</li> 
      <li className="subSubCategory">Шляпы</li> 
      <li className="subSubCategory">Береты</li> 
      <li className="subSubCategory">Банданы, баффы</li> 
      <li className="subSubCategory">Повязки и теплые наушники</li> 
      <li className="subSubCategory">Другие</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="mensShoesList">
    <ul>
      <li className="subSubCategory">Кроссовки</li> 
      <li className="subSubCategory">Кеды</li> 
      <li className="subSubCategory">Ботинки и полуботинки</li> 
      <li className="subSubCategory">Сандали</li> 
      <li className="subSubCategory">Шлепанцы</li> 
      <li className="subSubCategory">Сапоги</li> 
      <li className="subSubCategory">Домашние тапочки</li> 
      <li className="subSubCategory">Мокасины</li> 
      <li className="subSubCategory">Слипоны</li> 
      <li className="subSubCategory">Туфли</li> 
      <li className="subSubCategory">Другие</li> 
      <li className="subSubCategory">Ортопедическая обувь</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="mensUnderwearList">
    <ul>
      <li className="subSubCategory">Носки</li> 
      <li className="subSubCategory">Плавки</li> 
      <li className="subSubCategory">Трусы</li> 
      <li className="subSubCategory">Термобелье</li> 
      <li className="subSubCategory">Другие</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="forWeddingList">
    <ul>
      <li className="subSubCategory">Свадебные платья</li> 
      <li className="subSubCategory">Платья на Узату</li> 
      <li className="subSubCategory">Аксессуары для невесты</li> 
      <li className="subSubCategory">Свадебные аксессуары (декор)</li> 
      <li className="subSubCategory">Свадебные туфли</li> 
      <li className="subSubCategory">Свадебные костюмы</li> 
      <li className="subSubCategory">Другие товары для свадьбы</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="accessoriesList">
    <ul>
      <li className="subSubCategory">Ювелирные изделия</li> 
      <li className="subSubCategory">Сумки и чемоданы</li> 
      <li className="subSubCategory">Шкатулки для украшений</li> 
      <li className="subSubCategory">Бижутерия</li> 
      <li className="subSubCategory">Рюкзаки</li> 
      <li className="subSubCategory">Кошельки, косметички, визитницы</li> 
      <li className="subSubCategory">Зонты</li> 
      <li className="subSubCategory">Аксессуары для волос</li> 
      <li className="subSubCategory">Ремни</li> 
      <li className="subSubCategory">Пояса</li> 
      <li className="subSubCategory">Шарфы и перчатки</li> 
      <li className="subSubCategory">Очки</li> 
      <li className="subSubCategory">Галстуки</li> 
      <li className="subSubCategory">Бабочки</li> 
      <li className="subSubCategory">Ремешки и браслеты для часов</li> 
      <li className="subSubCategory">Другие аксессуары</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="wristwatchList">
    <ul>
      <li className="subSubCategory">Женские часы</li> 
      <li className="subSubCategory">Мужские часы</li> 
      <li className="subSubCategory">Спортивные часы</li> 
      <li className="subSubCategory">Унисекс часы</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="presentsList">
    <ul>
      <li className="subSubCategory">Наборы</li> 
      <li className="subSubCategory">Сувениры</li> 
      <li className="subSubCategory">Подарки для мужчин</li> 
      <li className="subSubCategory">Подарки для женщин</li> 
      <li className="subSubCategory">Подарки друзьям</li> 
      <li className="subSubCategory">Подарки для детей</li> 
      <li className="subSubCategory">Подарки на день рождения</li> 
      <li className="subSubCategory">Подарки на свадьбу</li> 
      <li className="subSubCategory">Подарки на 8 Марта</li> 
      <li className="subSubCategory">Подарки на Новый год</li> 
      <li className="subSubCategory">Вкусные подарки</li> 
      <li className="subSubCategory">Подарочные коробки и упаковки</li> 
      <li className="subSubCategory">Мыло ручной работы</li> 
      <li className="subSubCategory">Открытки и конверты</li> 
      <li className="subSubCategory">Букеты</li> 
      <li className="subSubCategory">Воздушные шары и композиции из них</li> 
      <li className="subSubCategory">Подарки коллегам</li> 
      <li className="subSubCategory">Другие подарки</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="goodsForBeautyHealthList">
    <ul>
      <li className="subSubCategory">Парфюмерия</li> 
      <li className="subSubCategory">Уход за лицом</li> 
      <li className="subSubCategory">Макияж / Декоративная косметика</li> 
      <li className="subSubCategory">Косметика для волос</li> 
      <li className="subSubCategory">Окрашивание</li> 
      <li className="subSubCategory">Косметика для тела</li> 
      <li className="subSubCategory">Для полости рта</li> 
      <li className="subSubCategory">Для ногтей</li> 
      <li className="subSubCategory">Для бритья</li> 
      <li className="subSubCategory">Гигиенические средства</li> 
      <li className="subSubCategory">Оборудование парикмахерских / салонов красоты</li> 
      <li className="subSubCategory">Товары для людей с ограниченными возможностями</li> 
      <li className="subSubCategory">Ортопедические товары</li> 
      <li className="subSubCategory">Медицинские принадлежности</li> 
      <li className="subSubCategory">Косметические инструменты и аксессуары</li> 
      <li className="subSubCategory">Прочие товары для красоты и здоровья</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="workClothesWorkBootsList">
    <ul>
      <li className="subSubCategory">Рабочая спецодежда</li> 
      <li className="subSubCategory">Медицинская одежда</li> 
      <li className="subSubCategory">Военная одежда</li> 
      <li className="subSubCategory">Дождевики</li> 
      <li className="subSubCategory">Рабочая обувь</li> 
      <li className="subSubCategory">Военная обувь</li> 
      <li className="subSubCategory">Светоотражающие жилеты</li> 
      <li className="subSubCategory">Спецодежда и обувь - другое</li> 
    </ul>
  </div>




<div id="childrenCategoryList" className="subCategoryList">
  <ul >
       <li id="babyClothes" className="subcategory" >Детская одежда<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
       <li className="subcategory" >Детская обувь</li> 
       <li className="subcategory" >Детские коляски<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
       <li className="subcategory" >Детские автокресла</li> 
       <li id="babyFurniture" className="subcategory" >Детская мебель</li> 
       <li className="subcategory" >Игрушки</li> 
       <li className="subcategory" >Детские транспорт</li> 
       <li className="subcategory" >Товары для кормления</li> 
       <li className="subcategory" >Товары для школьников</li> 
       <li className="subcategory" >Прочие детские товары</li> 
     </ul>
 </div>

 <div className="subSubCaregoryList" id="babyClothesList">
  <ul>
    <li className="subSubCategory">Одежда для мальчиков</li> 
    <li className="subSubCategory">Одежда для девочек</li> 
    <li className="subSubCategory">Одежда для новорожденных</li> 
  </ul>
 </div>

 <div className="subSubCaregoryList" id="babyFurnitureList">
  <ul>
    <li className="subSubCategory">Манежи</li> 
    <li className="subSubCategory">Детские кровати и колыбели</li> 
    <li className="subSubCategory">Детские столы и стулья</li> 
    <li className="subSubCategory">Детские стенки</li> 
    <li className="subSubCategory">Стульчики для кормления</li> 
    <li className="subSubCategory">Детские матрасы</li> 
    <li className="subSubCategory">Детские шезлонги</li> 
    <li className="subSubCategory">Детские шкафы</li> 
    <li className="subSubCategory">Детские кресла</li> 
    <li className="subSubCategory">Комоды детские</li> 
    <li className="subSubCategory">Детская безопасность</li> 
    <li className="subSubCategory">Другая детская мебель</li> 
  </ul>
 </div>



  <div id="sportsCategoryList" className="subCategoryList" >
    <ul >
      <li id="antiquity" className="subcategory" >Антиквариат/ коллекции<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="musicalInstruments" className="subcategory" >Музыкальные инструменты<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Другое</li> 
      <li id="leisureSport" className="subcategory" >Спорт/ отдых<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Книги/ журналы</li> 
      <li className="subcategory" >CD/ DVD/ кассеты/ <br/> пластинки </li>
      <li className="subcategory" >Билеты</li> 
      <li className="subcategory" >Поиск попутчиков</li> 
      <li className="subcategory" >Поиск групп/ музыкантов</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="antiquityList">
    <ul>
      <li className="subcategory">Антикварная мебель</li> 
      <li className="subcategory">Букинистика</li> 
      <li className="subcategory">Живопись</li> 
      <li className="subcategory">Предметы искусства</li> 
      <li className="subcategory">Коллекционирование</li> 
      <li className="subcategory">Поделки / рукоделие</li> 
    </ul>
  </div>
 
  <div className="subSubCaregoryList" id="musicalInstrumentsList">
    <ul>
      <li className="subcategory">Акустические гитары</li> 
      <li className="subcategory">Бас-гитары</li> 
      <li className="subcategory">Пианино / фортепиано / рояли</li> 
      <li className="subcategory">Электрогитары</li> 
      <li className="subcategory">Духовые инструменты</li> 
      <li className="subcategory">Комбоусилители</li> 
      <li className="subcategory">Синтезаторы</li> 
      <li className="subcategory">Ударные инструменты</li> 
      <li className="subcategory">Студийное оборудование</li> 
      <li className="subcategory">Аксессуары для музыкальных инструментов</li> 
      <li className="subcategory">Прочее</li> 
    </ul>
  </div>
  
  <div className="subSubCaregoryList" id="leisureSportList">
    <ul>
      <li className="subcategory">Вело</li> 
      <li className="subcategory">Лыжи / сноуборды</li> 
      <li className="subcategory">Коньки</li> 
      <li className="subcategory">Роликовые коньки</li> 
      <li className="subcategory">Атлетика / фитнес</li> 
      <li className="subcategory">Туризм</li> 
      <li className="subcategory">Охота / рыбалка</li> 
      <li className="subcategory">Игры с ракеткой</li> 
      <li className="subcategory">Водные виды спорта</li> 
      <li className="subcategory">Футбол</li> 
      <li className="subcategory">Хоккей</li> 
      <li className="subcategory">Единоборства / бокс</li> 
      <li className="subcategory">Настольные игры</li> 
      <li className="subcategory">Прочие виды спорта</li> 
    </ul>
  </div>
  
    
  <div id="transportCategoryList" className="subCategoryList">
    <ul >
      <li id="lightVehicles" className="subcategory" >Легковые автомобили<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="aprons" className="subcategory" >Запчасти и аксессуары<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="tyresWheels" className="subcategory" >Шины, диски и колеса<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li id="motorcycle" className="subcategory" >Мото<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Автобусы</li> 
      <li className="subcategory" >Грузовые автомобили</li> 
      <li className="subcategory" >Прицепы</li> 
      <li id="specialEquipment" className="subcategory" >Спецтехника<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Сельхозтехника</li> 
      <li className="subcategory" >Водный транспорт</li> 
      <li className="subcategory" >Воздушный транспорт</li> 
      <li className="subcategory" >Другой транспорт</li> 
    </ul>
  </div>
  
  <div className="subSubCaregoryList" id="lightVehiclesList">
      <ul>
        <li className="subcategory">Acura</li> 
        <li className="subcategory">Alfa Romeo</li> 
        <li className="subcategory">Audi</li> 
        <li className="subcategory">BMW</li> 
        <li className="subcategory">Brilliance</li> 
        <li className="subcategory">Caterham</li> 
        <li className="subcategory">ChangFeng</li> 
        <li className="subcategory">Chery</li> 
        <li className="subcategory">Chevrolet</li> 
        <li className="subcategory">Chrysler</li> 
        <li className="subcategory">Citroen</li> 
        <li className="subcategory">Dacia</li> 
        <li className="subcategory">Daewoo</li> 
        <li className="subcategory">Dodge</li> 
        <li className="subcategory">Fiat</li> 
        <li className="subcategory">Ford</li> 
        <li className="subcategory">Geely</li> 
        <li className="subcategory">Great Wall</li> 
        <li className="subcategory">Honda</li> 
        <li className="subcategory">Hyundai</li> 
        <li className="subcategory">Intrall</li> 
        <li className="subcategory">JMC</li> 
        <li className="subcategory">Jeep</li> 
        <li className="subcategory">Jinbei</li> 
        <li className="subcategory">Kia</li> 
        <li className="subcategory">Koenigsegg</li> 
        <li className="subcategory">Land Rover</li> 
        <li className="subcategory">Lexus</li> 
        <li className="subcategory">Mazda</li> 
        <li className="subcategory">Mercedes</li> 
        <li className="subcategory">Microcar</li> 
        <li className="subcategory">Mitsubishi</li> 
        <li className="subcategory">Mitsuoka</li> 
        <li className="subcategory">Morgan</li> 
        <li className="subcategory">Nissan</li> 
        <li className="subcategory">Oldsmobile</li> 
        <li className="subcategory">Opel</li> 
        <li className="subcategory">PUCH</li> 
        <li className="subcategory">Pagani</li> 
        <li className="subcategory">Panoz</li> 
        <li className="subcategory">Peugeot</li> 
        <li className="subcategory">Porsche</li> 
        <li className="subcategory">Proton</li> 
        <li className="subcategory">Renault</li> 
        <li className="subcategory">Roewe</li> 
        <li className="subcategory">Seat</li> 
        <li className="subcategory">Skoda</li> 
        <li className="subcategory">Smart</li> 
        <li className="subcategory">Ssang Yong</li> 
        <li className="subcategory">Subaru</li> 
        <li className="subcategory">Suzuki</li> 
        <li className="subcategory">Toyota</li> 
        <li className="subcategory">Volkswagen</li> 
        <li className="subcategory">Volvo</li> 
        <li className="subcategory">ВАЗ</li> 
        <li className="subcategory">ГАЗ</li> 
        <li className="subcategory">ЗАЗ</li> 
        <li className="subcategory">ИЖ</li> 
        <li className="subcategory">Москвич</li> 
        <li className="subcategory">Таврия</li> 
        <li className="subcategory">УАЗ</li> 
        <li className="subcategory">Другие</li> 
      </ul>
    </div>
 
<div className="subSubCaregoryList" id="apronsList">
    <ul>
      <li className="subcategory">Автозапчасти</li> 
      <li className="subcategory">Аксессуары для авто</li> 
      <li className="subcategory">Транспорт на запчасти</li> 
      <li className="subcategory">Масла и жидкости</li> 
      <li className="subcategory">Автохимия и автокосметика</li> 
      <li className="subcategory">Мотоаксессуары</li> 
      <li className="subcategory">Мотоэкипировка</li> 
      <li className="subcategory">Мотозапчасти</li> 
      <li className="subcategory">Запчасти для спец и СХ техники</li> 
      <li className="subcategory">Прочие запчасти</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="tyresWheelsList">
    <ul>
      <li className="subcategory">Автошины</li> 
      <li className="subcategory">Мотошины, диски и колеса</li> 
      <li className="subcategory">Диски</li> 
      <li className="subcategory">Колеса в сборе</li> 
      <li className="subcategory">Колпаки</li> 
      <li className="subcategory">Камеры для шин</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="motorcycleList" >
    <ul>
      <li className="subcategory">Мопеды / скутеры</li> 
      <li className="subcategory">Квадроциклы</li> 
      <li className="subcategory">Мотоциклы</li> 
      <li className="subcategory">Мото - прочее</li> 
    </ul>
  </div>

  <div className="subSubCaregoryList" id="specialEquipmentList">
    <ul>
      <li className="subcategory">Бульдозеры / тракторы</li> 
      <li className="subcategory">Коммунальная техника</li> 
      <li className="subcategory">Погрузчики</li> 
      <li className="subcategory" >Самосвалы</li> 
      <li className="subcategory">Строительная техника</li> 
      <li className="subcategory">Экскаваторы</li> 
      <li className="subcategory">Оборудование для спецтехники</li> 
      <li className="subcategory">Прочая спецтехника</li> 
     
    </ul>
  </div>

  
<div id="animalsCategoryList" className="subCategoryList"  >
 <ul >
      <li id="farmAnimals" className="subcategory" >Сельхозживотные<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Собаки</li> 
      <li className="subcategory" >Кошки</li> 
      <li className="subcategory" >Аквариумистика</li> 
      <li className="subcategory" >Птицы</li> 
      <li className="subcategory" >Грызуны</li> 
      <li className="subcategory" >Рептилии</li> 
      <li className="subcategory" >Зоотовары</li> 
      <li className="subcategory" >Вязка</li> 
      <li className="subcategory" >Бюро находок</li> 
      <li className="subcategory" >Другие животные</li> 
      <li id="farmPoultry" className="subcategory" >Сельхоз птицы<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
      <li className="subcategory" >Инкубационные яйца</li> 
      <li id="productsForAgriculturalAnimals" className="subcategory" >Товары для с/х животных<img className="rightPicture" src="./icons/right.png"  alt="right"/></li> 
    </ul>
</div> 

<div className="subSubCaregoryList" id="farmAnimalsList">
  <ul>
    <li className="subcategory">Коровы и быки</li> 
    <li className="subcategory">Лошади</li> 
    <li className="subcategory">Свиньи</li> 
    <li className="subcategory">Козы</li> 
    <li className="subcategory">Бараны и овцы</li> 
    <li className="subcategory">Кролики</li> 
    <li className="subcategory">Другие сельхоз животные</li> 
  </ul>
</div>

<div className="subSubCaregoryList" id="farmPoultryList">
  <ul>
    <li className="subcategory">Куры и петухи</li> 
    <li className="subcategory">Гуси</li> 
    <li className="subcategory">Индюки</li> 
    <li className="subcategory">Другие сельхоз птицы</li> 
  </ul>
</div>

<div className="subSubCaregoryList" id="productsForAgriculturalAnimalsList">
  <ul>
    <li className="subcategory">Корма для сельхоз животных</li> 
    <li className="subcategory">Содержание для c/х животных и птиц</li> 
    <li className="subcategory">Оборудование и инструмент для ухода</li> 
    <li className="subcategory">Другие товары для сельхоз животных</li> 
  </ul>
</div>
<div>
      <h2>Категории и подкатегории</h2>
      <div>
        <h3>Категории</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedCategory && (
        <div>
          <h3>Подкатегории для {selectedCategory.name}</h3>
          <ul>
            {selectedCategory.subcategories.map((subcategory, index) => (
              <li key={index} onClick={() => handleSubcategoryClick(subcategory)}>
                {subcategory.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSubcategory && (
        <div>
          <h3>Список подкатегории для {selectedSubcategory.name}</h3>
          <ul>
            {selectedSubcategory.subsubcategories.map((subsubcategory, index) => (
              <li key={index}>{subsubcategory}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
</>
);
};


  
export default CategoriesList;
