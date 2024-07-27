import React, { useState }  from "react";

  const categories = [
    { name: "Услуги", imgSrc: "./icons/right.png" },
    { name: "Строительство и ремонт", imgSrc: "./icons/right.png" },
    { name: "Аренда и прокат товаров", imgSrc: "./icons/right.png" },
    { name: "Недвижимость", imgSrc: "./icons/right.png" },
    { name: "Работа", imgSrc: "./icons/right.png" },
    { name: "Хобби отдых и спорт", imgSrc: "./icons/right.png" },
    { name: "Электроника", imgSrc: "./icons/right.png" },
    { name: "Мода и стиль", imgSrc: "./icons/right.png" },
    { name: "Транспорт", imgSrc: "./icons/right.png" },
    { name: "Дом и сад", imgSrc: "./icons/right.png" },
    { name: "Детский мир", imgSrc: "./icons/right.png" },
    { name: "Животные", imgSrc: "./icons/right.png" }
  ];

  const subCategoriesServices = [
    { name: "Развлечения", imgSrc: "./icons/right.png" },
    { name: "Красота и здоровье", imgSrc: "./icons/right.png" },
    { name: "Для бизнеса", imgSrc: "./icons/right.png" },
    { name: "Авто услуги", imgSrc: "./icons/right.png" },
    { name: "Бытовые услуги", imgSrc: "./icons/right.png" },
    { name: "Перевозки и складские услуги", imgSrc: "./icons/right.png" },
    { name: "Ремонт и обслуживание техники", imgSrc: "./icons/right.png" },
    { name: "Ремонт и строительство", imgSrc: "./icons/right.png" },
    { name: "Уборка", imgSrc: "./icons/right.png" },
    { name: "Охрана и безопасность", imgSrc: "./icons/right.png" },
    { name: "Деловые услуги", imgSrc: "./icons/right.png" },
    { name: "Обучение/ курсы/ репетиторство", imgSrc: "./icons/right.png" },
    { name: "Студии звукозаписи" },
    { name: "Фото и видеосъемка" },
    { name: "Туризм/иммиграция" },
    { name: "Сетевой маркетинг" },
    { name: "Услуги для животных" },
    { name: "Прочие услуги" }
  ];

  const subSubCategoriesServicesEntertainment = [
    { name: "Активный отдых" },
    { name: "Бары/ кафе/ рестораны" },
    { name: "Развлечение для детей" },
    { name: "Квесты" },
    { name: "Ночные клубы" },
    { name: "Кинотеатры" },
    { name: "Театры" },
    { name: "Концерты и события" },
    { name: "Караоке" },
    { name: "Путешествия" },
    { name: "Гостиницы/ отели/ хостел" },
    { name: "Организация мераприятий" },
    { name: "Другие развлечения" }
  ];

  const subSubCategoriesServicesHealthAndBeauty = [
    { name: "Наращивание ресниц" },
    { name: "Косметология" },
    { name: "Коррекция бровей" },
    { name: "Перманентный макияж/ татуаж" },
    { name: "Услуги стилиста" },
    { name: "Эпиляция/ депиляция" },
    { name: "Тату/ пирсинг/боди-ар" },
    { name: "SPA-процедуры/ солярий" },
    { name: "Стоматология" },
    { name: "Парикмахерские услуги" },
    { name: "Маникюр/ педикюр" },
    { name: "Макияж/ визаж" },
    { name: "Медицинские услуги" },
    { name: "Пластическая хирургия" },
    { name: "Врачи" },
    { name: "Психология" },
    { name: "Массаж" },
    { name: "Другие услуги для красоты и здоровья" }
  ];

  const subSubCategoriesServicesForBusiness = [
    { name: "Продажа бизнеса" },
    { name: "Оборудование" },
    { name: "Сырье/ материалы" }
  ];

  const subSubCategoriesServicesCarService = [
    { name: "Автоиойки/ химчистки" },
    { name: "Автострахование" },
    { name: "Автошколы/ автоинструкторы" },
    { name: "Диагностика и ремонт автокондиционеров" },
    { name: "Компьютерная диагностика автотранспорта" },
    { name: "Кузовной ремонт и ремонт" },
    { name: "Ремонт автоэлектрики и автоэлектроники" },
    { name: "Ремонт двигателя" },
    { name: "СТО" },
    { name: "Тюнинг" },
    { name: "Установка автосигнализаций" },
    { name: "Установка аудио и видеосистем" },
    { name: "Шиномонтаж и балансировка" },
    { name: "Услуги трезвого водителя" },
    { name: "Услуги эвакуатора" }
  ];

  const subSubCategoriesServicesDomesticServices = [
    { name: "Няни/ сиделки" },
    { name: "Изготовление ключей" },
    { name: "Пошив и ремонт одежды" },
    { name: "Ремонт обуви" },
    { name: "Ремонт часов" },
    { name: "Ремонт ювелирных изделий" },
    { name: "Химчистка" }
  ];

  const subSubCategoriesServicesTransportationAndStorageServices = [
    { name: "Междугородние перевозки" },
    { name: "Междунородные перевозки" },
    { name: "Такси" },
    { name: "Таможенное оформление" },
    { name: "Услуги склада" },
    { name: "Услуги грузчика" },
    { name: "Курьерские услуги" }
  ];

  const subSubCategoriesServicesRepairAndMaintenanceOfEquipment = [
    { name: "Аудиотехник" },
    { name: "Бытовая техника" },
    { name: "Игровые приставки" },
    { name: "Климатическая техника" },
    { name: "Компьютеры" },
    { name: "Прочая техника" },
    { name: "Тв и видеотехника" },
    { name: "Мобильные телефоны/ планшеты" },
    { name: "Фото и видео аппаратура" },
    { name: "Музыкальные инструменты" }
  ];

  const subSubCategoriesServicesRepairAndConstruction = [
    { name: "Строительные услуги" },
    { name: "Вентиляция/ кондиционирование" },
    { name: "Готовые конструкции" },
    { name: "Окна/ двери/ балконы" },
    { name: "Дизайн/ архитектура" },
    { name: "Отделка/ ремонт" },
    { name: "Сантехника/ коммуникации" },
    { name: "Электрика" },
    { name: "Сварочные работы" },
    { name: "Ландшафтные работы" },
    { name: "Напольные работы" },
    { name: "Кровельные работы" },
    { name: "Гипсокартонные работы" },
    { name: "Молярные работы" },
    { name: "Столярные работы" },
    { name: "Изготовление мебели на заказ" },
    { name: "Строительство домов/ коттеджей" }
  ];

  const subSubCategoriesServicesCleaning = [
    { name: "Вывоз мусора/ снега" },
    { name: "Дезинфекция помещений" },
    { name: "Мойка окони" },
    { name: "Мойка фасадов" },
    { name: "Промышленный альпинизм" },
    { name: "Уборка домов и коттеджей" },
    { name: "Уборка офисов и магазинов" },
    { name: "Уборка после ремонта" },
    { name: "Уборка прилегающих  территорий" },
    { name: "Услуги ассенизатора" },
    { name: "Чистка ковров" },
    { name: "Чистка мягкой мебели" }
  ];

  const subSubCategoriesServicesAndSecuritySafety = [
    { name: "Система безопасности и охраны" },
    { name: "Услуги охраны" },
    { name: "Монтаж охранно-пожарных систем" },
    { name: "Установка домофонов" },
    { name: "Услуги склада" }
  ];


  const subSubCategoriesServicesBusinessServices = [
    { name: "Финаннсовые услуги" },
    { name: "Дизайн полиграфия" },
    { name: "IT/ интернет/ телеком" },
    { name: "Исследовательские услуги" },
    { name: "Кадровые услуги" },
    { name: "Консалтинговые услуги" },
    { name: "Набор и коррекция текста" },
    { name: "Продвижение в социальных сетях" },
    { name: "Распространение рекламы" },
    { name: "Риелторские услуги" },
    { name: "Создание и продвижение сайтов/ приложений" },
    { name: "Услуги колл-центра" },
    { name: "Услуги переводчика" },
    { name: "Юридические услуги"}
  ];

  const subSubCategoriesServicesTraining = [
    { name: "Иностранные языки" },
    { name: "Дошкольное обучение" },
    { name: "Репетиторы по предметам" },
    { name: "Уроки музыки" },
    { name: "Колледжи" },
    { name: "Высшие учебные заведения" },
    { name: "Обучение за рубежом" },
    { name: "Написание / подготовка курсовых и дипломных работ" },
    { name: "Курсы" }
  ];

  const subCategoriesConstruction = [
    { name: "Сантехника", imgSrc: "./icons/right.png" },
    { name: "Инструменты и оборудование", imgSrc: "./icons/right.png" },
    { name: "Отделочные и облицовочные материалы", imgSrc: "./icons/right.png" },
    { name: "Окна/ двери/ балконы/ зеркала", imgSrc: "./icons/right.png" },
    { name: "Пиломатериалы", imgSrc: "./icons/right.png" },
    { name: "Электрика", imgSrc: "./icons/right.png" },
    { name: "Отопление", imgSrc: "./icons/right.png" },
    { name: "Строительные смеси", imgSrc: "./icons/right.png" },
    { name: "Кровля", imgSrc: "./icons/right.png" },
    { name: "Кладочные материалы", imgSrc: "./icons/right.png" },
    { name: "Строительное оборудование", imgSrc: "./icons/right.png" },
    { name: "Элементы крепежа", imgSrc: "./icons/right.png" },
    { name: "Металлопрокат/ арматура", imgSrc: "./icons/right.png" },
    { name: "Счетчики", imgSrc: "./icons/right.png" },
    { name: "Строительная химия", imgSrc: "./icons/right.png" },
    { name: "Железобетонные изделия", imgSrc: "./icons/right.png" },
    { name: "Дорожные материалы" },
    { name: "Лакокрасочные материал", imgSrc: "./icons/right.png"  },
    { name: "Песок, щебень, отсев" },
    { name: "Вентиляция", imgSrc: "./icons/right.png" },
    { name: "Прочие товары для строительства и ремонта" }
  ];

  const subSubCategoriesConstructionPlumbing = [
    { name: "Канализация и водопровод" },
    { name: "Насосное оборудование" },
    { name: "Раковины и мойки" },
    { name: "Нагрев воды" },
    { name: "Смесители" },
    { name: "Унитазы, биде и писсуары" },
    { name: "Ванны" },
    { name: "Душевое оборудование" },
    { name: "Магистральные фильтры для воды" },
    { name: "Полотенцесушители" },
    { name: "Прочая сантехника" }
  ];

  const subSubCategoriesConstructionToolsAndEquipment = [
    { name: "Измерительные инструменты" },
    { name: "Электроинструменты" },
    { name: "Ручные инструменты" },
    { name: "Расходные материалы" },
    { name: "Сварочное оборудование" },
    { name: "Паяльное оборудование" },
    { name: "Генераторы" },
    { name: "Цепные пилы" },
    { name: "Мотокосы и триммеры" },
    { name: "Пневмоинструменты" },
    { name: "Малярные инструменты" },
    { name: "Прочие инструменты и оборудование"}
  ];

  const subSubCategoriesConstructionFinishingAndCladding = [
    { name: "Напольные покрытия" },
    { name: "Фасадные материалы" },
    { name: "Декоративные элементы" },
    { name: "Гипсокартон" },
    { name: "Плитка" },
    { name: "Обои" },
    { name: "Прочие отделочные и облицовочные материалы" }
  ];

  const subSubCategoriesConstructionWindowsDoorsBalconiesMirrors = [
    { name: "Окна и комплектующие" },
    { name: "Двери и комплектующи" },
    { name: "Фурнитура для окон и дверей" },
    { name: "Зеркала" },
    { name: "Решетки на окна и двери" },
    { name: "Балконы" },
    { name: "Ролеты, ставни для окон и дверей" },
    { name: "Прочие окна, двери, балконы, зеркал"}
  ];

  const subSubCategoriesConstructionLumber = [
    { name: "Древесные плиты" },
    { name: "Доски" },
    { name: "Вагонка" },
    { name: "Брус, рейки" },
    { name: "Бревна" },
    { name: "Прочие пиломатериалы" }
  ];

  const subSubCategoriesConstructionElectrician = [
    { name: "Кабель и комплектующие" },
    { name: "Защита электросети" },
    { name: "Коммутация и управление" },
    { name: "Розетки и выключатели" },
    { name: "Щиты распределительны" },
    { name: "Прочая электрика" }
  ];

  const subSubCategoriesConstructionHeating = [
    { name: "Печи для бани" },
    { name: "Буржуйки" },
    { name: "Комплектующие и аксессуары для печей" },
    { name: "Прочие печи" }
  ];

  const subSubCategoriesConstructionMixes = [
    { name: "Наливные полы" },
    { name: "Затирочные смеси" },
    { name: "Гидроизоляция" },
    { name: "Цемент" },
    { name: "Шпаклевка" },
    { name: "Штукатурка" },
    { name: "Клей" },
    { name: "Прочие строительные смеси" }
  ];
 
  const subSubCategoriesConstructionRoofing = [
    { name: "Металлочерепица" },
    { name: "Профнастил" },
    { name: "Гибкая черепица" },
    { name: "Поликарбонат" },
    { name: "Шифер" },
    { name: "Водосток" },
    { name: "Рубероид" },
    { name: "Волнистый лист(ондулин)" },
    { name: "Прочая кровля" }
  ];

  const subSubCategoriesConstructionCladding = [
    { name: "Строительные блоки" },
    { name: "Кирпичи" },
    { name: "Прочие кладочные материал" }
  ];

  const subSubCategoriesConstructionConstructionEquipment = [
    { name: "Строительные тачки" },
    { name: "Строительные леса, стремянки, вышки туры" },
    { name: "Бетономешалки" },
    { name: "Стропы" },
    { name: "Лебедки" },
    { name: "Тали" },
    { name: "Опалубка" },
    { name: "Плиткорезы" },
    { name: "Виброплиты" },
    { name: "Мотобуры" },
    { name: "Прочее строительное оборудование" }
  ];

  const subSubCategoriesConstructionFasteners = [
    { name: "Шайбы" },
    { name: "Хомуты, зажимы" },
    { name: "Болты" },
    { name: "Гайки" },
    { name: "Саморезы" },
    { name: "Дюбели" },
    { name: "Шурупы" },
    { name: "Анкеры" },
    { name: "Гвозди" },
    { name: "Кронштейны" },
    { name: "Скобы" },
    { name: "Шпильки резьбовые" },
    { name: "Прочие элементы крепежа" }
  ];

  const subSubCategoriesConstructionMetalFittings = [
    { name: "Сортовой и фасонный прокат" },
    { name: "Трубный прокат" },
    { name: "Листовой прокат" },
    { name: "Прочий металлопрокат, арматур" }
  ];

  const subSubCategoriesConstructionMeters = [
    { name: "Газа" },
    { name: "Электричества" },
    { name: "Тепла" },
    { name: "Воды" }
  ];

  const subSubCategoriesConstructionBuildingChemistry = [
    { name: "Герметики" },
    { name: "Мастика" },
    { name: "Грунтовка" },
    { name: "Монтажная пена" },
    { name: "Прочая строительная химия" }
  ];

  const subSubCategoriesConstructionPrecastProducts = [
    { name: "Плиты перекрытия" },
    { name: "Фундаментные блоки" },
    { name: "Сваи" },
    { name: "Бетонные кольца" },
    { name: "Асбестоцементные трубы" },
    { name: "Прогоны" },
    { name: "Прочие железобетонные изделия" }
  ];

  const subSubCategoriesConstructionPaintworkMaterials = [
    { name: "Лаки" },
    { name: "Растворители" },
    { name: "Краска" },
    { name: "Эмаль" },
    { name: "Прочие лакокрасочные материалы" }
  ];

  const subSubCategoriesConstructionVentilation = [
    { name: "Воздуховоды" },
    { name: "Комплектующие для вентиляции" },
    { name: "Вентиляционные решетки" },
    { name: "Прочая вентиляция" }
  ];

  const subCategoriesRentalAndLeasing = [
    { name: "Аренда и услуги спецтехники", imgSrc: "./icons/right.png" },
    { name: "Аренда инструментов и оборудования", imgSrc: "./icons/right.png" },
    { name: "Аренда транспортных средств", imgSrc: "./icons/right.png" },
    { name: "Аренда авто" },
    { name: "Аренда товаров для мероприятий и отдыха", imgSrc: "./icons/right.png" },
    { name: "Прокат электроники", imgSrc: "./icons/right.png" },
    { name: "Аренда детских товаров" },
    { name: "Аренда прочих товаров" }
  ];

  const subSubCategoriesRentalAndLeasingSpecialEquipment = [
    { name: "Аренда кранов и автокранов" },
    { name: "Аренда экскаваторов, тракторов" },
    { name: "Аренда погрузчиков" },
    { name: "Аренда автовышек" },
    { name: "Аренда манипуляторов" },
    { name: "Аренда катков и асфальтоукладчиков" },
    { name: "Аренда другой спецтехники" }
  ];

  const subSubCategoriesRentalAndLeasingRentalOfTools  = [
    { name: "Аренда компрессоров" },
    { name: "Аренда генераторов" },
    { name: "Аренда строительных лесов, люлек и вышек-тур" },
    { name: "Аренда инструмента" },
    { name: "Аренда бетономешалок" },
    { name: "Аренда опалубки" },
    { name: "Аренда тепловых пушек" },
    { name: "Аренда виброплит" },
    { name: "Аренда прочего инструмента и оборудовани" }
  ];

  const subSubCategoriesRentalAndLeasingVehicles  = [
    { name: "Аренда грузовых авто" },
    { name: "Аренда автобусов и микроавтобусов" },
    { name: "Аренда мототранспорта" },
    { name: "Прокат велосипедов" },
    { name: "Аренда других видов транспорта" }
  ];

  const subSubCategoriesRentalAndLeasingEventsAndHolidays  = [
    { name: "Аренда мебели" },
    { name: "Аренда палаток, шатров и юрт" },
    { name: "Прокат посуды" },
    { name: "Аренда звукового оборудования" },
    { name: "Аренда фото и видео оборудования" },
    { name: "Аренда прочих товаров для  мероприятий и отдыха"}
  ];

  const subSubCategoriesRentalAndLeasingRentalElectronics  = [
    { name: "Аренда телевизоров, проекторов и LED-экранов" },
    { name: "Аренда Playstation" },
    { name: "Аренда других товаров электроники" }
  ];
 
  const subCategoriesProperty = [
    { name: "Посуточная аренда жилья", imgSrc: "./icons/right.png" },
    { name: "Аренда квартир долгосрочно" },
    { name: "Аренда домов долгосрочно" },
    { name: "Аренда комнат долгосрочно" },
    { name: "Продажа квартир" },
    { name: "Земля", imgSrc: "./icons/right.png" },
    { name: "Продажа домов" },
    { name: "Коммерческие помещения",  imgSrc: "./icons/right.png" },
    { name: "Продажа комнат" },
    { name: "Гаражи/ стоянк", imgSrc: "./icons/right.png" },
    { name: "Обмен", imgSrc: "./icons/right.png" },
    { name: "Зарубежная недвижимость", imgSrc: "./icons/right.png" },
  ];

  const subSubCategoriesPropertyDailyRent  = [
    { name: "Аренда квартир посуточно / почасово" },
    { name: "Аренда домов  посуточно / почасов" },
    { name: "Аренда комнат  посуточно / почасово" },
    { name: "Отели и базы  отдыха" },
    { name: "Хостелы и койко-мест" }
  ];

  const subSubCategoriesPropertyGround  = [
    { name: "Аренда" },
    { name: "Продажа" }
  ];

  const subSubCategoriesPropertyCommercialSpaces  = [
    { name: "Аренда" },
    { name: "Продажа" }
  ];

  const subSubCategoriesPropertyGaragesParkingLots  = [
    { name: "Аренда" },
    { name: "Продажа" }
  ];

  const subSubCategoriesPropertyExchange  = [
    { name: "Аренда" },
    { name: "Продажа" }
  ];

  const subSubCategoriesPropertyForeignRealEstate  = [
    { name: "Аренда" },
    { name: "Продажа" }
  ];
 

  const subCategoriesElectrotechnology = [
    { name: "Телефоны и аксессуары", imgSrc: "./icons/right.png" },
    { name: "Компьютеры и комплектующие", imgSrc: "./icons/right.png" },
    { name: "Фото/ видео", imgSrc: "./icons/right.png" },
    { name: "Тв/ видеотехника", imgSrc: "./icons/right.png" },
    { name: "Аудиотехника",  imgSrc: "./icons/right.png" },
    { name: "Игры и игровые  приставки", imgSrc: "./icons/right.png" },
    { name: "Планшеты/ эл. книги  и аксессуары", imgSrc: "./icons/right.png" },
    { name: "Ноутбуки и аксессуары",  imgSrc: "./icons/right.png" },
    { name: "Техника для дома", imgSrc: "./icons/right.png" },
    { name: "Техника для кухни", imgSrc: "./icons/right.png" },
    { name: "Климатическое оборудование", imgSrc: "./icons/right.png" },
    { name: "Индивидуальный уход", imgSrc: "./icons/right.png" },
  ];

  const subSubCategoriesElectrotechnologyPhonesAndAccessories  = [
    { name: "Мобильные телефоны /  смартфоны" },
    { name: "Запчасти для телефонов" },
    { name:"Аксессуары для телефонов" },
    { name: "Сим-карты / тарифы /  номера" },
    { name: "Стационарные телефоны" },
    { name: "Рации и прочие телефоны" }
  ];

  const subSubCategoriesElectrotechnologyComputersAndAccessories  = [
    { name: "Настольные компьютеры" },
    { name: "Серверы" },
    { name:"Комплектующие и аксессуары" },
    { name: "Периферийные устройства" },
    { name: "Мониторы" },
    { name: "Внешние накопители" },
    { name: "Расходные материалы" },
    { name: "Другое" }
  ];

  const subSubCategoriesElectrotechnologyPhotoVideo = [
    { name: "Пленочные фотоаппараты" },
    { name: "Цифровые фотоаппараты" },
    { name:"Видеокамеры" },
    { name: "Экшн-камеры" },
    { name: "Объективы" },
    { name: "Штативы / моноподы" },
    { name: "Фотовспышки" },
    { name: "Аксессуары для фото /  видеокамер" },
    { name: "Телескопы / бинокли" }
  ];
  
  
  const subSubCategoriesElectrotechnologyTelevisionVideo = [
    { name: "Dvd плееры" },
    { name: "Телевизоры" },
    { name:"Проекторы" },
    { name: "Аксессуары для ТВ/  Видеотехники" },
    { name: "Спутниковое тв" },
    { name: "Прочая тв /  видеотехника" }
  ];

  const subSubCategoriesElectrotechnologyAudioDevices = [
    { name: "Mp3 плееры" },
    { name: "Магнитолы" },
    { name:"Музыкальные центры" },
    { name: "Акустические системы" },
    { name: "Наушники" },
    { name: "Радиоприемники" },
    { name: "Портативная акустика" },
    { name: "Усилители / ресиверы" },
    { name: "Cd / md / виниловые   проигрыватели" },
    { name: "Прочая аудиотехника" }
  ];

  const subSubCategoriesElectrotechnologyGamesAndGameConsoles = [
    { name: "Игры для приставок" },
    { name: "Приставки" },
    { name:"Игры для PC" },
    { name: "Аксессуары" },
    { name: "Герои игр" }
  ];

  const subSubCategoriesElectrotechnologyTabletsBooksAndAccessories = [
    { name: "Планшетные компьютеры" },
    { name: "Электронные книги" },
    { name:"Графические планшеты" },
    { name: "Запчасти для планшетов /  эл. книг" },
    { name: "Аксессуары для планшетов /  эл. книг" }
  ];

  const subSubCategoriesElectrotechnologyLaptopsAndAccessories = [
    { name: "Ноутбуки" },
    { name: "Запчасти для   ноутбуков" },
    { name:"Аксессуары для   ноутбуков" }
  ];

  const subSubCategoriesElectrotechnologyAppliancesForTheHome = [
    { name: "Пылесосы" },
    { name: "Утюги" },
    { name:"Стиральные машины" },
    { name: "Швейные машины и  оверлоки" },
    { name: "Вязальные машины" },
    { name: "Фильтры для воды" },
    { name: "Прочая техника  для дома" }
    ];

  const subSubCategoriesElectrotechnologyKitchenAppliances = [
    { name: "Холодильники" },
    { name: "Микроволновые печи" },
    { name:"Плиты / печи" },
    { name: "Электрочайники" },
    { name: "Кофеварки / кофемолки" },
    { name: "Кухонные комбайны и  измельчители" },
    { name: "Пароварки, мультиварки" },
    { name: "Хлебопечки" },
    { name: "Посудомоечные машины" },
    { name: "Вытяжки" },
    { name: "Прочая техника  для кухни" }
  ];

  const subSubCategoriesElectrotechnologyClimaticEquipment = [
    { name: "Вентиляторы" },
    { name: "Кондиционеры" },
    { name:"Обогреватели" },
    { name: "Очистители воздуха  и озонаторы" },
    { name: "Увлажнители воздуха" },
    { name: "Термометры и гигрометры" },
    { name: "Запчасти и аксессуары для  климатического оборудования" },
    { name: "Другое климатическое  оборудование" }
  ];

  const subSubCategoriesElectrotechnologyIndividualCare = [
    { name: "Бритвы, эпиляторы,  машинки для стрижки" },
    { name: "Фены, укладка волос" },
    { name:"Весы" },
    { name: "Прочая техника  для индивидуального ухода" }
  ];

  const subCategoriesGarden = [
    { name: "Канцтовары/ расходные  материалы" },
    { name: "Мебель", imgSrc: "./icons/right.png" },
    { name: "Офисная мебель" },
    { name: "Предметы интерьера", imgSrc: "./icons/right.png" },
    { name: "Комнатные растения" },
    { name: "Посуда/ кухонная  утварь" },
    { name: "Садовый инвентар" },
    { name: "Сад/ огород" },
    { name: "Хозяйственный инвентарь/   бытовая химия" },
    { name: "Прочие товары для дома" }
  ];

  const subSubCategoriesGardenFurniture = [
    { name: "Мебель для гостиной" },
    { name: "Мебель для спальни" },
    { name:"Мебель для прихожей" },
    { name: "Кухонная мебель" },
    { name: "Мебель для ванной   комнаты" },
    { name: "Офисная мебель" }
  ];

  const subSubCategoriesGardenInteriorItems = [
    { name: "Светильники" },
    { name: "Текстиль" },
    { name:"Декор окон" }
  ];

  const subCategoriesWork = [
    { name: "Розничная торговля/  продажи/ закупки", imgSrc: "./icons/right.png" },
    { name: "Транспорт/ Логистика/  Склад", imgSrc: "./icons/right.png" },
    { name: "Строительство/ Отделочные работы/  Архитектура", imgSrc: "./icons/right.png" },
    { name: "Недвижимость", imgSrc: "./icons/right.png" },
    { name: "Банки/ Финансы/  Страхование", imgSrc: "./icons/right.png" },
    { name: "Финансы/ бухгалтерия/   экономика", imgSrc: "./icons/right.png" },
    { name: "Юристы/ адвокаты/   нотариусы" },
    { name: "Охрана/ безопасность", imgSrc: "./icons/right.png" },
    { name: "Домашний персонал/  Сервис и быт", imgSrc: "./icons/right.png" },
    { name: "Красота/ фитнес/  спорт", imgSrc: "./icons/right.png" },
    { name: "Гостиницы/ туризм/  отдых", imgSrc: "./icons/right.png" },
    { name: "Бары/ рестораны/ кафе", imgSrc: "./icons/right.png" },
    { name: "Образование/ Наука/  Перевод", imgSrc: "./icons/right.png" },
    { name: "Культура/ исскуство/  развлечения", imgSrc: "./icons/right.png" },
    { name: "Медицина/ фармацевтика", imgSrc: "./icons/right.png" },
    { name: "Интернет/ IT/  компьютеры/ телеком", imgSrc: "./icons/right.png" },
    { name: "Маркетинг/ Реклама/  PR", imgSrc: "./icons/right.png" },
    { name: "Производство/ Рабочие  специальности", imgSrc: "./icons/right.png" },
    { name: "Административный персонал", imgSrc: "./icons/right.png" },
    { name: "СТО/ автомойка", imgSrc: "./icons/right.png" },
    { name: "Топ-менеджмент/ руководство  высшего звена" },
    { name: "Сельское и лесное хозяйство/  Агробизнес/ Животноводство", imgSrc: "./icons/right.png" },
    { name: "Работа за рубежем", imgSrc: "./icons/right.png" },
    { name: "Инженеры", imgSrc: "./icons/right.png" },
    { name: "Клиентский сервис", imgSrc: "./icons/right.png" },
    { name: "Другие сферы  деятельности" }
  ];

  const subSubCategoriesWorkRetailTradeSalesPurchases = [
    { name: "Продавец" },
    { name: "Продавец консультант" },
    { name: "Торговый представитель" },
    { name: "Менеджер по продажам" },
    { name: "Мерчендайзер" },
    { name: "Кассир" },
    { name: "Флорист" },
    { name: "Администратор магазина /  торгового зала" },
    { name: "Менеджер по снабжению" },
    { name: "Менеджер  интернет-магазина" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkTransportLogisticsWarehouse = [
    { name: "Водитель" },
    { name: "Курьер" },
    { name: "Грузчик" },
    { name: "Экспедитор" },
    { name: "Машинист" },
    { name: "Дальнобойщик" },
    { name: "Кладовщик" },
    { name: "Карщик" },
    { name: "Логист" },
    { name: "Комплектовщик" },
    { name: "Диспетчер" },
    { name: "Работа в такси" },
    { name: "Другое" }
  ];
  
  const subSubCategoriesWorkConstructionFinishingArchitecture = [
    { name: "Разнорабочий" },
    { name: "Сварщик" },
    { name: "Монтажник / Установщик" },
    { name: "Электромонтажник" },
    { name: "Сантехник" },
    { name: "Электрик" },
    { name: "Каменщик" },
    { name: "Слесарь" },
    { name: "Плотник" },
    { name: "Маляр" },
    { name: "Прораб" },
    { name: "Бетонщик" },
    { name: "Арматурщик" },
    { name: "Машинист" },
    { name: "Штукатур" },
    { name: "Геодезист" },
    { name: "Дизайнер интерьера" },
    { name: "Машинист крана" },
    { name: "Проектировщик" },
    { name: "Промышленный альпинист" },
    { name: "Сметчик" },
    { name: "Архитектор" },
    { name: "Строительство дорог" },
    { name: "Другое" }
  ];
 
  const subSubCategoriesWorkRealEstate = [
    { name: "Риэлтор" },
    { name: "Менеджер по продажам  недвижимости" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkBankingFinanceInsurance = [
    { name: "Менеджер по работе  с клиентами банка" },
    { name: "Экономист" },
    { name: "Инкассатор" },
    { name: "Другое" },
    { name: "Оценщик" }
  ];

  const subSubCategoriesWorkFinanceAccountingEconomics = [
    { name: "Бухгалтер" },
    { name: "Кассир в бухгалтерию" },
    { name: "Экономист" },
    { name: "Аудитор" },
    { name: "Другое" }
  ];
 
  
  const subSubCategoriesWorkSafetySecurity = [
    { name: "Охранник" },
    { name: "Сторож" },
    { name: "Водитель охранник" },
    { name: "Вахтер" },
    { name: "Сотрудник службы  безопасности" },
    { name: "Начальник охраны" },
    { name: "Телохранитель" },
    { name: "Пожарный" },
    { name: "Другое" }
  ];
 
  const subSubCategoriesWorkHomeService = [
    { name: "Няня" },
    { name: "Домработница" },
    { name: "Сиделка" },
    { name: "Уборщица / Техничка" },
    { name: "Повар" },
    { name: "Дворник" },
    { name: "Садовник" },
    { name: "Другое" }
  ];
  
  const subSubCategoriesWorkBeautyFitnessSport = [
    { name: "Мастер маникюра и педикюра" },
    { name: "Парикмахер" },
    { name: "Администратор в сфере  красоты и спорта" },
    { name: "Тренер" },
    { name: "Стилист" },
    { name: "Косметолог" },
    { name: "Массажист" },
    { name: "Визажист" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkHotelsTourismLeisure= [
    { name: "Администратор отеля/  гостинницы" },
    { name: "Горничная" },
    { name: "Консьерж" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkBarsRestaurantsCafes = [
    { name: "Повар" },
    { name: "Официант" },
    { name: "Пекарь / Кондитер" },
    { name: "Сушист" },
    { name: "Бармен" },
    { name: "Посудомойщица" },
    { name: "Администратор ресторана /  кафе" },
    { name: "Бариста" },
    { name: "Шашлычник"},
    { name: "Хостес"},
    { name: "Мясник"},
    { name: "Кальянщик"},
    { name: "Другое"}
  ];
  
  const subSubCategoriesWorkEducationScienceTranslation= [
    { name: "Преподаватель / учитель /  педагог" },
    { name: "Репетитор" },
    { name: "Воспитатель детского  сада" },
    { name: "Переводчики" },
    { name: "Другое" }
  ];
    
  const subSubCategoriesWorkCultureArtEntertainment= [
    { name: "Фотограф" },
    { name: "Художник" },
    { name: "Модель" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkMedicinePharmacy = [
    { name: "Медсестра / Медбрат" },
    { name: "Стоматолог" },
    { name: "Ассистент стоматолога" },
    { name: "Фармацевт / Провизор" },
    { name: "Санитарка / санитар" },
    { name: "Врач" },
    { name: "Фельдшер" },
    { name: "Лаборант" },
    { name: "Логопед / Дефектолог"},
    { name: "Психолог"},
    { name: "Другое"}
  ];
 
  const subSubCategoriesWorkInternetITComputersTV = [
    { name: "Программисты / Разработчики" },
    { name: "Системный администратор" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkMarketingAdvertisingPR = [
    { name: "Дизайнер" },
    { name: "Промоутер" },
    { name: "Менеджер по рекламе" },
    { name: "SMM-менеджер" },
    { name: "PR Менеджер" },
    { name: "Маркетолог" },
    { name: "Копирайтер" },
    { name: "Другое" },
    { name: "Контент менеджер"}
  ];

  const subSubCategoriesWorkManufacturingWorkSkills = [
    { name: "Сборщик мебели" },
    { name: "Оператор на  производство" },
    { name: "Швея" },
    { name: "Токарь" },
    { name: "SMM-менеджер'" },
    { name: "Технолог" },
    { name: "Механик" },
    { name: "Фрезеровщик" },
    { name: "Стропальщик"},
    { name: "Энергетик"},
    { name: "Шахтер"},
    { name: "Другое" }
  ];

  const subSubCategoriesWorkAdministrativeStaff = [
    { name: "Администратор" },
    { name: "Офис менеджер" },
    { name: "Ассистент / помощник  руководителя" },
    { name: "Секретарь" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkCarwash = [
    { name: "Автомойщик" },
    { name: "Мастер СТО" },
    { name: "Автослесарь" },
    { name: "Автоэлектрик" },
    { name: "Шиномонтажник" },
    { name: "Администратор автомойки /  СТО" },
    { name: "Автомеханик" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkAgricultureAndForestry = [
    { name: "Механизатор" },
    { name: "Тракторист" },
    { name: "Пастух" },
    { name: "Агроном" },
    { name: "Ветеринар" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkAbroad = [
    { name: "Разнорабочий" },
    { name: "Водитель за рубежом" },
    { name: "Повар за рубежом" },
    { name: "Няня за рубежом" },
    { name: "Сиделка за рубежом" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkEngineers = [
    { name: "Инженер-конструктор" },
    { name: "Проектировщик" },
    { name: "Инженер по охране труда  и технике безопасности" },
    { name: "Инженер ПТО" },
    { name: "Другое" }
  ];

  const subSubCategoriesWorkCustomerService = [
    { name: "Оператор call центр" },
    { name: "Продажи по телефону" },
    { name: "Служба поддержки  пользователей" },
    { name: "Модераторы" },
    { name: "Другое" }
  ];

  const subCategoriesModa = [
    { name: "Женская одежда", imgSrc: "./icons/right.png" },
    { name: "Женское белье,  купальники", imgSrc: "./icons/right.png" },
    { name: "Женская обувь", imgSrc: "./icons/right.png" },
    { name: "Одежда для  беременных", imgSrc: "./icons/right.png" },
    { name: "Мужская одежда", imgSrc: "./icons/right.png" },
    { name: "Головные уборы", imgSrc: "./icons/right.png" },
    { name: "Мужская обувь", imgSrc: "./icons/right.png" },
    { name: "Мужское белье,  плавки", imgSrc: "./icons/right.png" },
    { name: "Для свадьбы", imgSrc: "./icons/right.png" },
    { name: "Аксессуары", imgSrc: "./icons/right.png" },
    { name: "Наручные часы", imgSrc: "./icons/right.png" },
    { name: "Подарки", imgSrc: "./icons/right.png" },
    { name: "Товары для красоты  и здоровье", imgSrc: "./icons/right.png" },
    { name: "Спецодежда и спецобувь", imgSrc: "./icons/right.png" }
  ];

  const subSubCategoriesModaWomenSwear = [
    { name: "Платья" },
    { name: "Боди" },
    { name: "Майки и футболки" },
    { name: "Блузы и рубашки" },
    { name: "Свитеры, кардиганы,  худи" },
    { name: "Юбки" },
    { name: "Верхняя одежда" },
    { name: "Шорты" },
    { name: "Джинсы" },
    { name: "Брюки" },
    { name: "Комбинезоны" },
    { name: "Костюмы" },
    { name: "Женские пиджаки и  жакеты" },
    { name: "Одежда для дома" },
    { name: "Спортивная одежда" },
    { name: "Женская национальная  одежда" },
    { name: "Мусульманская одежда  для женщин" }
  ];

  const subSubCategoriesModaWomenUnderwear = [
    { name: "Пляжные платья и  туники" },
    { name: "Пляжные парео и  накидки" },
    { name: "Купальники" },
    { name: "Трусы" },
    { name: "Бюстгальтеры" },
    { name: "Комплекты нижнего  белья" },
    { name: "Корректирующее белье" },
    { name: "Корректирующие корсеты" },
    { name: "Корсеты" },
    { name: "Носки / колготки /  чулки" },
    { name: "Другие" },
    { name: "Костюмы" }
  ];

  
  const subSubCategoriesModaWomenShoes = [
    { name: "Ботинки и полуботинки" },
    { name: "Ботильоны" },
    { name: "Туфли" },
    { name: "Балетки" },
    { name: "Лоферы" },
    { name: "Сапоги, полусапожки" },
    { name: "Угги" },
    { name: "Мокасины и слипоны" },
    { name: "Кроссовки" },
    { name: "Кеды" },
    { name: "Домашние тапочки" },
    { name: "Босоножки, сандали,  вьетнамки" },
    { name: "Другие" }
  ];
  
  const subSubCategoriesModaMaternityWear = [
    { name: "Футболки и майки   для беременных" },
    { name: "Блузки и туники  для беременных" },
    { name: "Платья для  беременных" },
    { name: "Юбки для   беременных" },
    { name: "Купальники для   беременных" },
    { name: "Бюстгальтеры для   кормящих и беременных" },
    { name: "Шорты для  беременных" },
    { name: "Комбинезоны для  беременных" },
    { name: "Штаны и брюки для  беременных" },
    { name: "Лосины и леггинсы для   беременных" },
    { name: "Джинсы для беременных" },
    { name: "Колготки для беременных" },
    { name: "Куртки для беременных   и кормящих" },
    { name: "Пальто для беременных   и кормящих" },
    { name: "Домашняя одежда для  беременных" },
    { name: "Свитеры и толстовки  для беременных" },
    { name: "Костюмы для  беременных" },
    { name: "Сарафаны для  беременных" },
    { name: "Пояса для  беременных" },
    { name: "Спортивная одежда  для беременных" },
    { name: "Другие" }
  ];

  const subSubCategoriesModaMenSwear = [
    { name: "Футболки и майки" },
    { name: "Рубашки и тенниски" },
    { name: "Кофты и свитеры" },
    { name: "Верхняя одежда" },
    { name: "Шорты" },
    { name: "Джинсы" },
    { name: "Брюки" },
    { name: "Костюмы и пиджаки" },
    { name: "Комбинезоны" },
    { name: "Мужская домашняя   одежда" },
    { name: "Спортивная одежда" },
    { name: "Мужская национальная  одежда" },
    { name: "Мусульманская одежда  для мужчин" }
  ];
  
  const subSubCategoriesModaHeadgear = [
    { name: "Бейсболки и кепки" },
    { name: "Балаклавы" },
    { name: "Панамы" },
    { name: "Шапки" },
    { name: "Шляпы" },
    { name: "Береты" },
    { name: "Банданы, баффы" },
    { name: "Повязки и теплые  наушники" },
    { name: "Другие" }
  ];
 
  const subSubCategoriesModaMenShoes = [
    { name: "Кроссовки" },
    { name: "Кеды" },
    { name: "Ботинки и полуботинки" },
    { name: "Сандали" },
    { name: "Шлепанцы" },
    { name: "Сапоги" },
    { name: "Домашние тапочки" },
    { name: "Мокасины" },
    { name: "Слипоны" },
    { name: "Туфли" },
    { name: "Другие" },
    { name: "Ортопедическая обувь" }
  ];

  const subSubCategoriesModaMenUnderwear = [
    { name: "Носки" },
    { name: "Плавки" },
    { name: "Трусы" },
    { name: "Термобелье" },
    { name: "Другие" }
  ];
  
  const subSubCategoriesModaForAWedding = [
    { name: "Свадебные платья" },
    { name: "Платья на Узату" },
    { name: "Аксессуары для невесты" },
    { name: "Свадебные аксессуары   (декор)" },
    { name: "Свадебные туфли" },
    { name: "Свадебные костюмы" },
    { name: "Другие товары   для свадьбы" }
  ];

  const subSubCategoriesModaAccessory = [
    { name: "Ювелирные изделия" },
    { name: "Сумки и чемоданы" },
    { name: "Шкатулки для  украшений" },
    { name: "Бижутерия" },
    { name: "Рюкзаки" },
    { name: "Кошельки, косметички,  визитницы" },
    { name: "Зонты" },
    { name: "Аксессуары для  волос" },
    { name: "Ремни" },
    { name: "Пояса" },
    { name: "Шарфы и перчатки" },
    { name: "Очки" },
    { name: "Галстуки" },
    { name: "Ремешки и браслеты  для часов" },
    { name: "Другие аксессуары" }
  ];

  const subSubCategoriesModaWristWatch = [
    { name: "Женские часы" },
    { name: "Мужские часы" },
    { name: "Спортивные часы" },
    { name: "Унисекс часы" }
  ];

  const subSubCategoriesModaGifts = [
    { name: "Наборы" },
    { name: "Сувениры" },
    { name: "Подарки для  мужчин" },
    { name: "Подарки для  женщин" },
    { name: "Подарки друзьям" },
    { name: "Подарки для  детей" },
    { name: "Подарки на  день рождения" },
    { name: "Подарки на  свадьбу" },
    { name: "Подарки на  8 Марта" },
    { name: "Подарки на  Новый год" },
    { name: "Вкусные подарки" },
    { name: "Подарочные коробки  и упаковки" },
    { name: "Мыло ручно  работы" },
    { name: "Открытки и конверты" },
    { name: "Букеты" },
    { name: "Воздушные шары и   композиции из них" },
    { name: "Подарки коллегам" },
    { name: "Другие подарки" }
  ];

  const subSubCategoriesModaBeautyAndHealthProducts = [
    { name: "Парфюмерия" },
    { name: "Уход за лицом" },
    { name: "Макияж / Декоративная  косметика" },
    { name: "Косметика для  волос" },
    { name: "Окрашивание" },
    { name: "Косметика для  тела" },
    { name: "Для полости  рта" },
    { name: "Для ногтей" },
    { name: "Для бритья" },
    { name: "Гигиенические средства" },
    { name: "Оборудование парикмахерских /  салонов красоты" },
    { name: "Товары для людей с  ограниченными возможностями" },
    { name: "Ортопедические товары" },
    { name: "Медицинские принадлежности" },
    { name: "Косметические инструмент  и аксессуары" },
    { name: "Прочие товары для  красоты и здоровья" }
  ];
  
  const subSubCategoriesModaSpecialClothingAndFootwear = [
    { name: "Рабочая спецодежда" },
    { name: "Медицинская одежда" },
    { name: "Военная одежда" },
    { name: "Дождевики" },
    { name: "Рабочая обувь" },
    { name: "Военная обувь" },
    { name: "Светоотражающие жилеты" }
  ];

  const subCategoriesChildren = [
    { name: "Детская одежда", imgSrc: "./icons/right.png" },
    { name: "Детская обувь" },
    { name: "Детские коляски" },
    { name: "Детские автокресла" },
    { name: "Детская мебель", imgSrc: "./icons/right.png" },
    { name: "Игрушки" },
    { name: "Детские транспорт" },
    { name: "Товары для кормления" },
    { name: "Товары для школьников" },
    { name: "Прочие детские товары" }
  ];

  const subSubCategoriesChildrenBabyClothes = [
    { name: "Одежда для мальчиков" },
    { name: "Одежда для девочек" },
    { name: "Одежда для  новорожденных" }
  ];

  const subSubCategoriesChildrenBabyFurniture = [
    { name: "Манежи" },
    { name: "Детские кровати  и колыбел" },
    { name: "Детские столы  и стулья" },
    { name: "Детские стенки" },
    { name: "Стульчики для  кормления" },
    { name: "Детские матрасы" },
    { name: "Детские шезлонги" },
    { name: "Детские шкафы" },
    { name: "Детские кресла" },
    { name: "Комоды детские" },
    { name: "Детская безопасность" },
    { name: "Другая детская мебель" }
  ];

  const subCategoriesSportsAndHobby = [
    { name: "Антиквариат/ коллекции", imgSrc: "./icons/right.png" },
    { name: "Музыкальные инструменты", imgSrc: "./icons/right.png" },
    { name: "Другое" },
    { name: "Спорт/ отдых", imgSrc: "./icons/right.png" },
    { name: "Книги/ журналы" },
    { name: "CD/ DVD/ кассеты/  пластинки" },
    { name: "Билеты" },
    { name: "Поиск попутчиков" },
    { name: "Поиск групп/  музыкантов" }
  ];

  const subSubCategoriesSportsAndHobbyAntiquesCollection = [
    { name: "Антикварная мебель" },
    { name: "Букинистик" },
    { name: "Живопись" },
    { name: "Предметы искусства" },
    { name: "Коллекционирование" },
    { name: "Поделки / рукоделие" }
  ];
 
  const subSubCategoriesSportsAndHobbyMusicalInstruments = [
    { name: "Акустические гитары" },
    { name: "Бас-гитары" },
    { name: "Пианино / фортепиано /  рояли" },
    { name: "Электрогитары" },
    { name: "Духовые инструменты" },
    { name: "Комбоусилители" },
    { name: "Синтезаторы" },
    { name: "Ударные инструменты" },
    { name: "Студийное оборудование" },
    { name: "Аксессуары для  музыкальных инструментов" },
    { name: "Прочее" }
  ];

  const subSubCategoriesSportsAndHobbySportLeisure = [
    { name: "Вело" },
    { name: "Лыжи / сноуборды" },
    { name: "Коньки" },
    { name: "Роликовые коньки" },
    { name: "Атлетика / фитнес" },
    { name: "Туризм" },
    { name: "Охота / рыбалка" },
    { name: "Игры с ракеткой" },
    { name: "'Водные виды  спорта" },
    { name: "Футбол" },
    { name: "Хоккей" },
    { name: "Единоборства / бокс" },
    { name: "Настольные игры" },
    { name: "Прочие виды  спорта" }
  ];

  const subCategoriesTransport = [
    { name: "Легковые автомобили", imgSrc: "./icons/right.png" },
    { name: "Запчасти и аксессуар", imgSrc: "./icons/right.png" },
    { name: "Шины, диски  и колеса", imgSrc: "./icons/right.png" },
    { name: "Мото", imgSrc: "./icons/right.png" },
    { name: "Автобусы" },
    { name: "Грузовые автомобили" },
    { name: "Прицепы" },
    { name: "Спецтехника", imgSrc: "./icons/right.png" },
    { name: "Сельхозтехника" },
    { name: "Водный транспорт" },
    { name: "Воздушный транспорт" },
    { name: "Другой транспорт" }
  ];

  const subSubCategoriesTransportLightVehicles = [
    { name: "Acura" },
    { name: "Alfa Romeo" },
    { name: "Audi" },
    { name: "BMW" },
    { name: "Brilliance" },
    { name: "Caterham" },
    { name: "ChangFeng" },
    { name: "Chery" },
    { name: "Chevrolet" },
    { name: "Chrysler" },
    { name: "Citroen" },
    { name: "Dacia" },
    { name: "Daewoo" },
    { name: "Dodge" },
    { name: "Fiat" },
    { name: "Ford" },
    { name: "Geely" },
    { name: "Great Wall" },
    { name: "Honda" },
    { name: "Hyundai" },
    { name: "Intrall" },
    { name: "JMC" },
    { name: "Jeep" },
    { name: "Jinbei" },
    { name: "Kia" },
    { name: "Koenigsegg" },
    { name: "Land Rover" },
    { name: "Lexus" },
    { name: "Mazda" },
    { name: "Mercedes" },
    { name: "Microcar" },
    { name: "Mitsubishi" },
    { name: "Mitsuoka" },
    { name: "Morgan" },
    { name: "Nissan" },
    { name: "Oldsmobile" },
    { name: "Opel" },
    { name: "PUCH" },
    { name: "Pagani" },
    { name: "Panoz" },
    { name: "Peugeot" },
    { name: "Porsche" },
    { name: "Proton" },
    { name: "Renault" },
    { name: "Roewe" },
    { name: "Seat" },
    { name: "Skoda" },
    { name: "Smart" },
    { name: "Ssang Yong" },
    { name: "Subaru" },
    { name: "Suzuki" },
    { name: "Toyota" },
    { name: "Volkswagen" },
    { name: "Volvo" },
    { name: "ВАЗ" },
    { name: "ГАЗ" },
    { name: "ЗАЗ" },
    { name: "ИЖ" },
    { name: "Москвич" },
    { name: "Таврия" },
    { name: "Другие" }
  ];

  const subSubCategoriesTransportPartsAndAccessories = [
    { name: "Автозапчасти" },
    { name: "Аксессуары для авто" },
    { name: "Транспорт на запчасти" },
    { name: "Масла и жидкости" },
    { name: "Автохимия и автокосметика" },
    { name: "Мотоаксессуары" },
    { name: "Мотоэкипировка" },
    { name: "Мотозапчасти" },
    { name: "Запчасти для спец  и СХ техники" },
    { name: "Прочие запчасти" }
  ];

  const subSubCategoriesTransportTyresWheelsAndDiscs = [
    { name: "Автошины" },
    { name: "Мотошины, диски  и колеса" },
    { name: "Диски" },
    { name: "Колеса в сборе" },
    { name: "Колпаки" },
    { name: "Камеры для шин" }
  ];

  const subSubCategoriesTransportMotorcycle = [
    { name: "Мопеды / скутеры" },
    { name: "Квадроциклы" },
    { name: "Мотоциклы" },
    { name: "Мото - прочее" }
  ];

  const subSubCategoriesTransportSpecialMachinery = [
    { name: "Бульдозеры / тракторы" },
    { name: "Коммунальная техника" },
    { name: "Погрузчики" },
    { name: "Самосвалы" },
    { name: "Строительная техника" },
    { name: "Экскаваторы" },
    { name: "Оборудование для   спецтехники" },
    { name: "Прочая спецтехник" }
  ];
 
  const subCategoriesAnimals = [
    { name: "Сельхозживотные", imgSrc: "./icons/right.png" },
    { name: "Собаки" },
    { name: "Кошки" },
    { name: "Аквариумистика" },
    { name: "Птицы" },
    { name: "Грузовые автомобили" },
    { name: "Грызуны" },
    { name: "Рептилии" },
    { name: "Зоотовары" },
    { name: "Вязка" },
    { name: "Бюро находок" },
    { name: "Другие животные" },
    { name: "Сельхоз птицы", imgSrc: "./icons/right.png" },
    { name: "Инкубационные яйца" },
    { name: "Товары для  с/х животных", imgSrc: "./icons/right.png" }
  ];

  const subSubCategoriesAnimalfarm = [
    { name: "Коровы и быки" },
    { name: "Лошади" },
    { name: "Свиньи" },
    { name: "Козы" },
    { name: "Бараны и овцы" },
    { name: "Кролики" },
    { name: "Другие сельхоз  животные" }
  ];
  const subSubCategoriesAnimalFarmPoultry = [
    { name: "Куры и петухи" },
    { name: "Гуси" },
    { name: "Индюки" },
    { name: "Другие сельхоз  птицы" }
  ];
  const subSubCategoriesAnimalFarmAnimalProducts = [
    { name: "Корма для сельхоз  животных" },
    { name: "Содержание для c/х  животных и птиц" },
    { name: "Оборудование и инструмент  для ухода" },
    { name: "Другие товары для  сельхоз животных" }
  ];

  const SelectCategory = ({ onCategorySelect, onSubCategorySelect, onSubSubCategorySelect, closeModal }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  
    const getSubCategories = (categoryName) => {
      switch (categoryName) {
        case "Услуги":
          return subCategoriesServices;
        case "Строительство и ремонт":
          return subCategoriesConstruction;
        case "Аренда и прокат товаров":
          return subCategoriesRentalAndLeasing;
        case "Недвижимость":
          return subCategoriesProperty;
        case "Работа":
          return subCategoriesWork;
        case "Хобби отдых и спорт":
          return subCategoriesSportsAndHobby;
          case "Электроника":
            return subCategoriesElectrotechnology;
          case "Мода и стиль":
            return subCategoriesModa;
          case "Транспорт":
            return subCategoriesTransport;
          case "Дом и сад":
            return subCategoriesGarden;
          case "Детский мир":
            return subCategoriesChildren;
          case  "Животные":
            return subCategoriesAnimals;
        default:
          return [];
      }
    };

      const getSubSubCategories = (subCategoryName) => {
        switch (subCategoryName) {
          case "Развлечения":
            return subSubCategoriesServicesEntertainment;
          case "Красота и здоровье":
            return subSubCategoriesServicesHealthAndBeauty;
          case  "Для бизнеса":
            return subSubCategoriesServicesForBusiness;
          case "Авто услуги":
            return subSubCategoriesServicesCarService;
          case "Бытовые услуги":
            return subSubCategoriesServicesDomesticServices;
          case "Перевозки и складские услуги":
            return subSubCategoriesServicesTransportationAndStorageServices;
          case "Ремонт и обслуживание техники":
            return subSubCategoriesServicesRepairAndMaintenanceOfEquipment;
          case "Ремонт и строительство":
            return subSubCategoriesServicesRepairAndConstruction;
          case "Уборка":
            return subSubCategoriesServicesCleaning;
          case "Охрана и безопасность":
            return subSubCategoriesServicesAndSecuritySafety;
          case "Деловые услуги":
            return subSubCategoriesServicesBusinessServices;
            case "Обучение/ курсы/ репетиторство":
              return subSubCategoriesServicesTraining;
            case "Сантехника":
              return subSubCategoriesConstructionPlumbing;
            case  "Инструменты и оборудование":
              return subSubCategoriesConstructionToolsAndEquipment;
            case  "Отделочные и облицовочные материалы":
              return subSubCategoriesConstructionFinishingAndCladding;
            case "Окна/ двери/ балконы/ зеркала":
              return subSubCategoriesConstructionWindowsDoorsBalconiesMirrors;
            case "Пиломатериалы":
              return subSubCategoriesConstructionLumber;
            case "Электрика":
              return subSubCategoriesConstructionElectrician;
            case "Отопление":
              return subSubCategoriesConstructionHeating;
            case "Строительные смеси":
              return subSubCategoriesConstructionMixes;
            case "Кровля": 
              return subSubCategoriesConstructionRoofing;
            case "Кладочные материалы": 
              return subSubCategoriesConstructionCladding;
            case "Строительное оборудование":
              return subSubCategoriesConstructionConstructionEquipment;
            case "Элементы крепежа":
              return subSubCategoriesConstructionFasteners;
            case  "Металлопрокат/ арматура":
              return subSubCategoriesConstructionMetalFittings;
            case "Счетчики":
              return subSubCategoriesConstructionMeters;
            case "Строительная химия":
              return subSubCategoriesConstructionBuildingChemistry;
            case "Железобетонные изделия":
              return subSubCategoriesConstructionPrecastProducts;
            case  "Лакокрасочные материал": 
              return subSubCategoriesConstructionPaintworkMaterials;
            case  "Вентиляция":
              return subSubCategoriesConstructionVentilation;
            case "Аренда и услуги спецтехники":
              return subSubCategoriesRentalAndLeasingSpecialEquipment;
            case "Аренда инструментов и оборудования":
              return subSubCategoriesRentalAndLeasingRentalOfTools;
            case "Аренда транспортных средств":
              return subSubCategoriesRentalAndLeasingVehicles;
            case "Аренда товаров для мероприятий и отдыха":
              return subSubCategoriesRentalAndLeasingEventsAndHolidays;
            case "Прокат электроники":
              return subSubCategoriesRentalAndLeasingRentalElectronics;
            case "Посуточная аренда жилья":
              return subSubCategoriesPropertyDailyRent
            case "Земля":
              return subSubCategoriesPropertyGround;
            case "Коммерческие помещения":
              return subSubCategoriesPropertyCommercialSpaces;
            case "Гаражи/ стоянк":
              return subSubCategoriesPropertyGaragesParkingLots;
            case "Обмен":
              return subSubCategoriesPropertyExchange;
            case  "Зарубежная недвижимость":
              return subSubCategoriesPropertyForeignRealEstate;
            case "Телефоны и аксессуары":
              return subSubCategoriesElectrotechnologyPhonesAndAccessories;
            case "Компьютеры и комплектующие":
              return subSubCategoriesElectrotechnologyComputersAndAccessories;
           case "Фото/ видео":
              return subSubCategoriesElectrotechnologyPhotoVideo;
            case "Тв/ видеотехника":
              return subSubCategoriesElectrotechnologyTelevisionVideo;
            case "Аудиотехника":
              return subSubCategoriesElectrotechnologyAudioDevices;
            case "Игры и игровые приставки":
              return subSubCategoriesElectrotechnologyGamesAndGameConsoles;
            case "Планшеты/ эл. книги и аксессуары":
              return subSubCategoriesElectrotechnologyTabletsBooksAndAccessories;
            case  "Ноутбуки и аксессуары":
              return subSubCategoriesElectrotechnologyLaptopsAndAccessories;
            case "Техника для дома":
              return subSubCategoriesElectrotechnologyAppliancesForTheHome;
            case "Техника для кухни":
              return subSubCategoriesElectrotechnologyKitchenAppliances;
            case  "Климатическое оборудование":
              return subSubCategoriesElectrotechnologyClimaticEquipment;
            case  "Индивидуальный уход":
              return subSubCategoriesElectrotechnologyIndividualCare;
            case "Мебель":
              return subSubCategoriesGardenFurniture;
            case "Предметы интерьера":
              return subSubCategoriesGardenInteriorItems;
            case "Розничная торговля/ продажи/ закупки":
              return subSubCategoriesWorkRetailTradeSalesPurchases;
            case "Транспорт/ Логистика/ Склад":
              return subSubCategoriesWorkTransportLogisticsWarehouse;
            case "Строительство/ Отделочные работы/ Архитектура":
              return subSubCategoriesWorkConstructionFinishingArchitecture;
            case "Недвижимость":
              return subSubCategoriesWorkRealEstate;
            case "Банки/ Финансы/ Страхование":
              return subSubCategoriesWorkBankingFinanceInsurance;
            case "Финансы/ бухгалтерия/ экономика":
              return subSubCategoriesWorkFinanceAccountingEconomics;
            case "Охрана/ безопасность":
              return subSubCategoriesWorkSafetySecurity;
            case  "Домашний персонал/ Сервис и быт":
              return subSubCategoriesWorkHomeService;
            case  "Красота/ фитнес/ спорт":
              return subSubCategoriesWorkBeautyFitnessSport
            case  "Гостиницы/ туризм/ отдых":
              return subSubCategoriesWorkHotelsTourismLeisure;
            case "Бары/ рестораны/ кафе":
              return subSubCategoriesWorkBarsRestaurantsCafes;
            case "Образование/ Наука/ Перевод":
              return subSubCategoriesWorkEducationScienceTranslation;
            case "Культура/ исскуство/ развлечения":
              return subSubCategoriesWorkCultureArtEntertainment;
            case "Интернет/ IT/ компьютеры/ телеком":
              return subSubCategoriesWorkInternetITComputersTV;
            case "Медицина/ фармацевтика":
              return subSubCategoriesWorkMedicinePharmacy;
            case "Маркетинг/ Реклама/ PR":
              return subSubCategoriesWorkMarketingAdvertisingPR;
            case "Производство/ Рабочие специальности":
              return subSubCategoriesWorkManufacturingWorkSkills;
            case "Административный персонал":
              return subSubCategoriesWorkAdministrativeStaff;
            case "СТО/ автомойка":
              return subSubCategoriesWorkCarwash;
            case "Сельское и лесное хозяйство/ Агробизнес/ Животноводство":
              return subSubCategoriesWorkAgricultureAndForestry;
            case "Работа за рубежем":
              return subSubCategoriesWorkAbroad;
            case "Инженеры":
              return subSubCategoriesWorkEngineers;
            case "Клиентский сервис":
              return subSubCategoriesWorkCustomerService;
            case "Женская одежда":
              return subSubCategoriesModaWomenSwear;
            case  "Женское белье, купальники":
              return subSubCategoriesModaWomenUnderwear;
            case  "Женская обувь":
              return subSubCategoriesModaWomenShoes;
            case "Одежда для беременных":
              return subSubCategoriesModaMaternityWear;
            case "Мужская одежда":
              return subSubCategoriesModaMenSwear;
            case "Головные уборы":
              return subSubCategoriesModaHeadgear;
            case "Мужская обувь":
              return subSubCategoriesModaMenShoes;
            case "Мужское белье, плавки":
              return subSubCategoriesModaMenUnderwear;
            case "Для свадьбы":
              return subSubCategoriesModaForAWedding;
            case "Аксессуары":
              return subSubCategoriesModaAccessory;
            case "Наручные часы":
              return subSubCategoriesModaWristWatch;
            case "Подарки":
              return subSubCategoriesModaGifts;
            case "Товары для красоты и здоровье":
              return subSubCategoriesModaBeautyAndHealthProducts;
            case "Спецодежда и спецобувь":
              return subSubCategoriesModaSpecialClothingAndFootwear;
            case "Детская одежда":
              return subSubCategoriesChildrenBabyClothes;
            case "Детская мебель":
              return subSubCategoriesChildrenBabyFurniture;
            case "Антиквариат/ коллекции":
              return subSubCategoriesSportsAndHobbyAntiquesCollection;
            case "Музыкальные инструменты":
              return subSubCategoriesSportsAndHobbyMusicalInstruments;
            case "Спорт/ отдых":
              return subSubCategoriesSportsAndHobbySportLeisure;
            case  "Легковые автомобили":
              return subSubCategoriesTransportLightVehicles;
            case "Запчасти и аксессуар":
              return subSubCategoriesTransportPartsAndAccessories;
            case "Шины, диски и колеса":
              return subSubCategoriesTransportTyresWheelsAndDiscs;
            case "Мото":
              return subSubCategoriesTransportMotorcycle;
            case "Спецтехника":
              return subSubCategoriesTransportSpecialMachinery;
            case "Сельхозживотные":
              return subSubCategoriesAnimalfarm;
            case "Сельхоз птицы":
              return subSubCategoriesAnimalFarmPoultry;
            case "Товары для с/х животных":
              return subSubCategoriesAnimalFarmAnimalProducts;
              default:
                return [];
            }
          };

          return (
            <div className="relative">
              <ul className="h-393 w-278 overflow-y-auto mt-4">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setSelectedSubCategory(category.name); 
                      onCategorySelect(category.name);
                    }}
                    className="flex justify-between items-center ml-8 cursor-pointer text-sm"
                  >
                    {category.name}
                    <img src={category.imgSrc} alt={category.name} className="w-8" />
                  </li>
                ))}
              </ul>
        
              {selectedCategory && (
                <ul className="absolute -top-5 right-80 h-393 w-300 overflow-y-auto mt-4">
                  {getSubCategories(selectedCategory).map((subCategory) => (
                    <li
                      key={subCategory.name}
                      onClick={() => {
                        setSelectedSubCategory(subCategory.name);
                        onSubCategorySelect(subCategory.name);
                      }}
                      className={`flex justify-between items-center ml-8 cursor-pointer text-sm ${!subCategory.imgSrc ? 'mb-4' : ''}`}
                    >
                      {subCategory.name}
                      {subCategory.imgSrc && <img src={subCategory.imgSrc} alt={subCategory.name} className="w-8" />}
                    </li>
                  ))}
                </ul>
              )}
        
                        {selectedSubCategory && (
                  <ul className="absolute -top-5 right-8 overflow-y-auto w-278 h-393 mt-4">
                    {getSubSubCategories(selectedSubCategory).map((subSubCategory) => (
                      <li
                        key={subSubCategory.name}
                        onClick={() => {
                          onSubSubCategorySelect(subSubCategory.name);
                          closeModal();
                        }}
                        className="flex justify-between items-center ml-8 cursor-pointer text-sm mb-4"
                      >
                        {subSubCategory.name}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          );
        };
        
        export default SelectCategory;