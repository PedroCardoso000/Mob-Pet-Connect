import React from "react";
import "@/global.css";
import UserProfileScreen from "./src/pages/user-screen/userProfileScreen";
import ConfigScreen from "./src/pages/config-screen/configScreen";
import ContactList from "./src/pages/contactList/contactList";
import CreatePet from "./src/pages/register-pet/create-pet";
import FriendViewScreen from "./src/pages/friend-view-screen/friend-view-screen";
import AppNavigator from "./src/navigator/app_navigator";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/menu/index";
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <>
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    </>
  )
}

