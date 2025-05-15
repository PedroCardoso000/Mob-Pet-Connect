import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactList } from '../pages/ContactList';
import PetProfile from '../pages/PetProfile';
import { Chat } from '../pages/Chat';
import { Menu } from '../pages/Menu';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
import Login from '../pages/login/login';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Contact_List: undefined;
  Chat: undefined;
  Menu: undefined;
  Pet_Profile: number;
  Login: undefined;
};

// Create a navigation reference
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Function to navigate globally
export function navigate<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params as any);
  }
}

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Contact_List" 
          component={ContactList}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Pet_Profile" 
          component={PetProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Chat" 
          component={Chat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;