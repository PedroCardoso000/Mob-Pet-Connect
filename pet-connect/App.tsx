import "@/global.css";
import React from "react";
import UserProfileScreen from "./src/pages/user-screen/userProfileScreen";
import  ConfigScreen  from "./src/pages/config-screen/configScreen";
import {ContactList} from "./src/pages/contactList/index";

export default function App() {
  return (
    <ContactList />
  );
}

