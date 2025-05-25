import "@/global.css";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/Menu";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native';
import UserProfileScreen from "../pet-connect/src/pages/user-screen/userProfileScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterScreen from "./src/pages/register/register";
import { Chat } from "./src/pages/Chat";
import PetProfile, { PropsPetProfile }  from "./src/pages/PetProfile";
import ContactList from "./src/pages/contactList/contactList";
import { RootStackParamList } from "./src/navigator/app_navigator";
import { PagesNavigator } from "./src/navigator/pages-navigator";
import { Footer } from "./src/components/Footer"
import CreatePet from "./src/pages/register-pet/create-pet"

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    (navigationRef.navigate as any)(name, params);
  }
}

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <AuthProvider>
          <RootStack/>
          <Footer/>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={PagesNavigator.Login}>
      <Stack.Screen options={{headerShown: false}} name={PagesNavigator.Login} component={LoginScreen} />
      <Stack.Screen name={PagesNavigator.UserProfile} component={UserProfileScreen}/>
      <Stack.Screen name={PagesNavigator.Menu} component={Menu} />
      <Stack.Screen name={PagesNavigator.Register} component={RegisterScreen} />
      <Stack.Screen name={PagesNavigator.Chat} component={Chat} />
      <Stack.Screen name={PagesNavigator.CreatePet} component={CreatePet}/>
      <Stack.Screen name={PagesNavigator.ContactList} component={ContactList} />
      <Stack.Screen name={PagesNavigator.PetProfile} component={PetProfile} />
    </Stack.Navigator>
  )
}


