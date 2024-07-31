import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeBlock from './components/pages/WelcomeBlock';
import Services from './components/pages/Services';
import SomeComponent from './components/pages/SomeComponent';
import AppLoginAndRegistration from './AppLoginAndRegistration';
import Profile from './Profile';
import NotFound from './components/pages/NotFound';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <main>
                <WelcomeBlock />
                <Services />
                <SomeComponent />
              </main>
              <Footer />
            </>
          } 
        />
        <Route path="/login/*" element={<AppLoginAndRegistration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
