import React from "react";
import "@/global.css";
import UserProfileScreen from "./src/pages/user-screen/userProfileScreen";
import ConfigScreen from "./src/pages/config-screen/configScreen";
import { ContactList } from "./src/pages/contactList/index";
import CreatePet from "./src/pages/register-pet/create-pet";
import FriendViewScreen from "./src/pages/friend-view-screen/friend-view-screen";
import AppNavigator from "./src/navigator/app_navigator";
import LoginScreen from "./src/pages/login/login";

export default function App() {
  return (
    <>
      <LoginScreen />
    </>
  )
}

