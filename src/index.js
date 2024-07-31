import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import CreateAd from './components/pages/CreateAd';
import AnnouncementPages from './components/pages/AnnouncementPages';
import Messages from './components/pages/MessagesPage'; 
import Payments from './components/pages/PaymentAndAccountPage';
import Settings from './components/pages/ProfileSettings';
import BusinessProfile from './components/pages/EditBusinessProfile';
import NotFound from './components/pages/NotFound'; 
import AppLoginAndRegistration from './AppLoginAndRegistration';
import YourAdsActivePage from './components/pages/YourAdsActivePage';
import YourAdsNonActivePage from './components/pages/YourAdsNonActivePage';
import YourAdsNonUnpaidPage from './components/pages/YourAdsNonUnpaidPage';
import YourAdsNonAwaitingPage from './components/pages/YourAdsNonAwaitingPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="announcement-pages" element={<AnnouncementPages />}>
            <Route path="active-ads-page" element={<YourAdsActivePage />} />
            <Route path="nonActive-ads-page" element={<YourAdsNonActivePage />} />
            <Route path="ads-non-unpaid-page" element={<YourAdsNonUnpaidPage />} />
            <Route path="ads-non-awaiting-page" element={<YourAdsNonAwaitingPage />} />
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="business-profile" element={<BusinessProfile />} />
        </Route>
        <Route path="/login/*" element={<AppLoginAndRegistration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
