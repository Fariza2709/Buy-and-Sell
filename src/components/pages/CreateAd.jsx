import React, { useState } from "react";
import SelectCategory from './SelectCategory';
import Preview from './Preview';

const CreateAd = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeSubSubCategory, setActiveSubSubCategory] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'KZT',
    images: [],
    location: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const [previews, setPreviews] = useState({});
  const [rotation, setRotation] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openPreview = () => setPreviewOpen(true);
  const closePreview = () => setPreviewOpen(false);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setActiveSubCategory(null);
    setActiveSubSubCategory(null);
  };

  const handleSubCategorySelect = (subCategory) => {
    setActiveSubCategory(subCategory);
    setActiveSubSubCategory(null);
  };

  const handleSubSubCategorySelect = (subSubCategory) => {
    setActiveSubSubCategory(subSubCategory);
  };

  const handleDelete = (index) => {
    setPreviews((prev) => {
      const newPreviews = { ...prev };
      delete newPreviews[index];
      return newPreviews;
    });
    setRotation((prev) => {
      const newRotation = { ...prev };
      delete newRotation[index];
      return newRotation;
    });
  };

  const handleRotate = (index) => {
    setRotation((prev) => {
      const currentRotation = prev[index] || 0;
      const newRotation = (currentRotation + 90) % 360;
      return {
        ...prev,
        [index]: newRotation,
      };
    });
  };

  const handleCharCounter = (event) => {
    const length = event.target.value.length;
    setCharCount(length);
  };

  const handleSliderChange = () => {
    setIsActive(!isActive);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`)
            .then(response => response.json())
            .then(data => {
              const { address } = data;
              const country = address.country || '';
              const city = address.city || address.town || address.village || '';
              const district = address.district || '';
              const county = address.county || '';

              let formattedLocation = country;

              if (city) {
                formattedLocation += ', ' + city;
              }

              if (district || county) {
                formattedLocation += ', район ' + (district || county);
              }

              setFormData(prevData => ({
                ...prevData,
                location: formattedLocation
              }));
              setError('');
            })
            .catch(err => {
              console.error('Ошибка при получении адреса:', err);
              setError('Не удалось получить адрес');
            });
        },
        (error) => {
          console.error('Ошибка геолокации:', error);
          setError('Не удалось определить местоположение');
        }
      );
    } else {
      setError('Геолокация не поддерживается этим браузером');
    }
  };

  const handleFormFileChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviews((prev) => ({
        ...prev,
        [index]: reader.result
      }));
      setFormData((prevData) => {
        const newImages = [...prevData.images];
        newImages[index] = reader.result;
        return { ...prevData, images: newImages };
      });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePublish = async () => {
    try {
      const { title, description, price, currency, location, contactPerson, email, phone } = formData;

      if (!title || !description || !price || !currency || !location || !contactPerson || !email || !phone) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Введите корректный адрес электронной почты.');
        return;
      }
  
      const phonePattern = /^\+?[1-9]\d{1,14}$/;
      if (!phonePattern.test(phone)) {
        alert('Введите корректный номер телефона.');
        return;
      }
  
      const adData = {
        title,
        description,
        price,
        currency,
        location,
        contactPerson,
        email,
        phone,
        images: formData.images
      };
  
      const response = await fetch('/api/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adData)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при публикации объявления');
      }
  
      alert('Объявление успешно опубликовано!');
      setFormData({
        title: '',
        description: '',
        price: '',
        currency: 'KZT',
        images: [],
        location: '',
        contactPerson: '',
        email: '',
        phone: ''
      });

      setActiveCategory('');
      setActiveSubCategory('');
      setActiveSubSubCategory('');
      setPreviews({});
      setRotation({});
      setCharCount(0);
      setError('');
  
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при публикации объявления');
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="relative" id="overlay">
          <div className="w-900 h-500 m-auto bg-white absolute top-5 right-48 border border-solid rounded-md" id="modal">
            <div className="">
              <span id="closeCategory" className="close absolute right-3 top-0 cursor-pointer" onClick={closeModal}>&times;</span>
              <SelectCategory 
                onCategorySelect={handleCategorySelect}
                onSubCategorySelect={handleSubCategorySelect}
                onSubSubCategorySelect={handleSubSubCategorySelect}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      )}
      
      {isPreviewOpen && (
        <Preview 
          formData={formData}
          onClose={closePreview}
        />
      )}

      <div className="m-auto mt-10 border border-gray-300 border-solid w-10/12 bg-white rounded-sm" id="createAnAd">
        <div className="describeInDetail">
          <form className="flex flex-col justify-center items-start p-10">
            <p className="mb-5">Создать объявление</p>
            <label className="labelCreateAd" htmlFor="title">Укажите название*</label>
            <input 
              className="w-9/12 h-7 bg-gainsboro p-5" 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Например Iphone 12" 
              required 
              minLength="16" 
              maxLength="70"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <div className="flex justify-between items-end w-9/12">
              <label className="text-sm">Введите не менее 16 символов</label>
              <label className="text-sm" id="charCounter">{formData.title.length}/70</label>
            </div>

            <label className="mt-5" htmlFor="selectCategory">Категория*</label>
            <button 
              className="bg-gainsboro w-2/4 text-left p-2" 
              onClick={openModal} 
              type="button"
            >
              {activeSubSubCategory
                ? `Выбрано: ${activeCategory}  ${activeSubCategory}  ${activeSubSubCategory}`
                : 'Выбрать категорию'}
            </button>
          </form>
        </div>
      </div>

      <div className="addPhoto mt-6 ml-28 w-10/12 bg-white h-96 pl-10 border border-gray-300 border-solid">
        <p className="pt-4">Фото</p>
        <p>Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок.</p>
        <div className="grid grid-cols-3 gap-4 pt-4 w-3/6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`flex flex-col border border-solid border-black w-28 h-32 column${i}Column`}>
              <label
                htmlFor={`fileInput${i}`}
                className={`flex items-center justify-center w-full h-full border border-gray-300 bg-gray-100 ${previews[i] ? 'cursor-default' : 'cursor-pointer'}`}
                style={{ position: 'relative' }}
              >
                {!previews[i] ? (
                  <span className="text-center">Добавить фото</span>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        transform: `rotate(${rotation[i] || 0}deg)`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <img
                        id={`previewImg${i}`}
                        src={previews[i]}
                        alt={`Preview ${i}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <img
                      src="/icons/rotate.svg"
                      alt="Rotate"
                      onClick={(e) => { e.stopPropagation(); e.preventDefault(); handleRotate(i); }}
                      className="absolute top-12 right-1 bg-white w-4 h-4 cursor-pointer z-10"
                    />
                    <img
                      src="/icons/trash.svg"
                      alt="Delete"
                      onClick={(e) => { e.stopPropagation(); e.preventDefault(); handleDelete(i); }}
                      className="absolute bottom-2 bg-white right-0.5 w-4 h-4 cursor-pointer z-10"
                    />
                  </>
                )}
                <input
                  type="file"
                  id={`fileInput${i}`}
                  name="photos"
                  accept="image/*"
                  onChange={(e) => handleFormFileChange(e, i)}
                  className="hidden pointer-events-none"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 ml-28 w-10/12 bg-white pl-10 pb-9 border border-gray-300 border-solid">
        <p className="pt-4 pb-3">Описание*</p>
        <textarea 
          className="border border-solid border-gray-700"
          id="description"
          cols="86" rows="15"
          required minLength="40"
          maxLength="9000" 
          value={formData.description}
          onChange={(e) => {
            handleCharCounter(e);
            setFormData({ ...formData, description: e.target.value });
          }}
          placeholder="Введите описание..."
        >
        </textarea>
        <div className="flex justify-between items-center w-8/12 text-sm pb-2">
          <p className="fortySymbols">
            {charCount < 40 ? 'Введите не менее 40 символов' : ''}
          </p>
          <p id="charCounterTextarea" className="nineThousand">
            {charCount}/9000
          </p>
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="price" className="form-label">Цена</label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              placeholder=""
              className="form-input border border-solid border-black w-1/12 ml-5"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="currency" className="form-label">Валюта</label>
            <select
              id="currency"
              name="currency"
              className="form-select"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="KZT">Тенге (KZT)</option>
              <option value="USD">Доллар США (USD)</option>
              <option value="EUR">Евро (EUR)</option>
            </select>
          </div>
        </form>
      </div>

      <div className="mt-6 ml-28 w-10/12 bg-white pl-10 h-40 border border-gray-300 border-solid">
        <h3 className="pt-4 pb-3 w-1/5">Автопродление</h3>
        <p
          className={`w-1/3 ${isActive ? 'hidden' : 'block'}`}
          id="textOffAutoRenew"
        >
          Объявление будет деактивировано через <br /> 30 дней
        </p>
        <p
          className={`w-1/3 ${isActive ? 'block' : 'hidden'}`}
          id="textOnAutoRenew"
        >
          Автоматически продлевать объявление <br /> каждые 30 дней
        </p>
        <button
          onClick={handleSliderChange}
          className={`w-16 h-11 rounded-3xl relative bottom-11 left-96 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`}
        >
          <div
            className={`relative w-8 h-8 bg-white rounded-full transform transition-transform duration-300 ${isActive ? 'translate-x-full' : ''}`}
            id="slider"
          ></div>
        </button>
      </div>

      <div className="flex justify-start items-center mt-6 ml-28 w-10/12 bg-white pl-10 h-20 border border-gray-300 border-solid">
        <label htmlFor="w-6/12">
          Местоположение*
          <input
            type="text"
            className="ml-3 p-2 border border-solid border-gray-500 rounded-sm"
            placeholder="Местоположение"
            id="inputLocation"
            name="location"
            value={formData.location}
            onClick={handleGetLocation} 
            readOnly
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="contactInformation mt-6 ml-28 w-10/12 bg-white pl-10 h-48 border border-gray-300 border-solid">
        <form className="flex flex-col pt-10">
          <label htmlFor="contactPerson" className="labelContactInformation">Контактное лицо
            <input 
              type="text" 
              className="border border-solid border-gray-400 rounded-sm ml-4 mb-4" 
              name="contactPerson" 
              id="contactPerson" 
              required 
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            />
          </label>
          <label htmlFor="email" className="labelContactInformation">
            Email-адрес
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="border border-solid border-gray-400 rounded-sm ml-14 mb-4" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>
          <label htmlFor="phone" className="">
            Номер телефона
            <input 
              type="tel" 
              className="border border-solid border-gray-400 rounded-sm ml-4 mb-4" 
              name="phone" 
              id="phone" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </label>
        </form>
      </div>

      <div className="flex justify-end items-center mt-6 ml-28 w-10/12 bg-white pl-10 h-20 border border-gray-300 border-solid mb-12">
        <button 
          type="button" 
          className="w-36 h-9 bg-blue-400 rounded-sm mr-10"
          onClick={openPreview}
        >
          Предпросмотр
        </button>
        <button 
          type="button" 
          onClick={handlePublish} 
          className="w-36 h-9 bg-green-400 rounded-sm mr-7"
        >
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default CreateAd;
