import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Social from './components/pages/Social';
import TitleForLoginAndRegister from './components/pages/TitleForLoginAndRegister';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { UserProvider } from './components/pages/UserContext';

function AppLoginAndRegistration() {
  const [activeTab, setActiveTab] = useState('login'); 

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={
          <>
            <Social />
            <TitleForLoginAndRegister setActiveTab={setActiveTab} />
            <main>
              {activeTab === 'login' && <Login />}
              {activeTab === 'register' && <Register />}
            </main>
          </>
        } />
      </Routes>
    </UserProvider>
  );
}

export default AppLoginAndRegistration;
