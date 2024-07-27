import React, { useEffect } from 'react';

const SomeComponent = () => {
  useEffect(() => {
    fetch('http://localhost:3001/api/auth/some-endpoint')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('There was a problem with your fetch operation:', error));
  }, []); 

  return (
    <div>
      {/* Ваш JSX для компонента */}
    </div>
  );
};

export default SomeComponent;
