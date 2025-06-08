import "@/global.css";
import LoginScreen from "./src/pages/login/login";
import Menu from "./src/pages/menu";
import {  AuthProvider } from "./src/context/AuthContext";
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
import { useContext } from "react";
import { AuthContext } from "./src/context/AuthContext";
import { useNavigationState } from "@react-navigation/native";

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

function FooterConditional() {
  const { user } = useContext(AuthContext);
  const routeName = useNavigationState((state) => {
    if (!state || !state.routes || state.index == null) return null;
    return state.routes[state.index]?.name;
  });

  if (!user || routeName === PagesNavigator.Login) return null;
  return <Footer />;
}

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <AuthProvider>
          <RootStack />
          <FooterConditional />
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName={PagesNavigator.Login}>
      <Stack.Screen options={{headerShown: false}} name={PagesNavigator.Login} component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.UserProfile} component={UserProfileScreen}/>
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.Menu} component={Menu}  />
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.Register} component={RegisterScreen} />
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.Chat} component={Chat} />
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.CreatePet} component={CreatePet}/>
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.ContactList} component={ContactList} />
      <Stack.Screen options={{ headerShown: false }} name={PagesNavigator.PetProfile} component={PetProfile} />
    </Stack.Navigator>
  )
}


