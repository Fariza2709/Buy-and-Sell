import React from 'react';

const ImagePreview = ({ src, alt }) => (
  <div className="border border-gray-300 rounded-md overflow-hidden">
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </div>
);

const Preview = ({ formData, onClose }) => {
  const { title, description, price, currency, location, contactPerson, email, phone, images } = formData;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="w-11/12 max-w-4xl h-560 bg-white p-6 rounded-md relative overflow-y-auto">
        <button
          className="absolute top-7 right-9 border border-solid border-gray-500 text-sm text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          Вернуться назад
        </button>
        <h2 className="text-2xl font-semibold mb-4">Предпросмотр объявления</h2>
        <div className="space-y-4">
          <p><strong>Название:</strong> {title}</p>
          <p><strong>Описание:</strong> {description}</p>
          <p><strong>Цена:</strong> {price}{currency}</p>
          <p><strong>Местоположение:</strong> {location}</p>
          <p><strong>Контактное лицо:</strong> {contactPerson}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Телефон:</strong> {phone}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images && images.length > 0 ? (
            images.map((img, index) => (
              <ImagePreview key={index} src={img} alt={`Preview ${index}`} />
            ))
          ) : (
            <p>Нет изображений для отображения.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
