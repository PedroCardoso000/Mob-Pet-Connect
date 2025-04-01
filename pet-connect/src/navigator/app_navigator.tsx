import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../pages/register/register';
import { ContactList } from '../pages/ContactList';
import { Chat } from '../pages/Chat';

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
      <Stack.Navigator initialRouteName="Register">
        {/* <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ headerShown: false }}
        /> */}
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