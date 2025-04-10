import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactList } from '../pages/contactList';
import { Chat } from '../pages/Chat';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Contact_List: undefined;
  Chat: undefined
};

// Create a navigation reference
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Function to navigate globally
export function navigate<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}


const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Contact_List">
      <Stack.Screen 
          name="Layout" 
          component={Layout}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Contact_List" 
          component={ContactList}
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