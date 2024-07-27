import React, { useState } from "react";
import MyProfile from "./components/pages/MyProfile";
import Announcement from "./components/pages/Announcement";
import CreateAd from "./components/pages/CreateAd";
import AnnouncementPages from "./components/pages/AnnouncementPages";
import MessagesPage from "./components/pages/MessagesPage";
import PaymentAndAccountPage from "./components/pages/PaymentAndAccountPage";
import AccountSetupPage from "./components/pages/AccountSetupPage";
import EditBusinessProfile from "./components/pages/EditBusinessProfile";
import ProfileSettings from "./components/pages/ProfileSettings";

function Profile() {

  const [username] = useState("");

  return (
    <div className="Profile bg-gainsboro">
      <MyProfile username={username} />
      <Announcement />
      <CreateAd />
      <AnnouncementPages />
      <MessagesPage />
      <PaymentAndAccountPage />
      <AccountSetupPage />
      <EditBusinessProfile />
      <ProfileSettings />
    </div>
  );
}

export default Profile;
