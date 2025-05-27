// import React, { useContext } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from '../pages/login/login';
// import RegisterScreen from '../pages/register/register'; // importe sua tela de registro se tiver
// import ContactList from '../pages/contactList/contactList';
// import { Chat } from '../pages/Chat';
// import { Layout } from '../components/Layout';

// import { AuthContext } from '../context/AuthContext';
import { PagesNavigator } from './pages-navigator';
// import Menu from '../pages/menu';
// import { PetProfile } from '../pages/PetProfile';

export type RootStackParamList = {
  [PagesNavigator.Login]: undefined;
  [PagesNavigator.Register]: undefined;
  [PagesNavigator.CreatePet]: undefined;
  [PagesNavigator.ContactList]: undefined;
  [PagesNavigator.Chat]: undefined;
  [PagesNavigator.Layout]: undefined;
  [PagesNavigator.Menu]: undefined;
  [PagesNavigator.PetProfile]: {petId: number};
  [PagesNavigator.UserProfile]: undefined;
};


// const AppNavigator = () => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     // Enquanto carrega o usuário, pode mostrar splash screen ou loader
//     return null; // ou um componente <Loading />
//   }

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {!user ? (
//           <>
//             <Stack.Screen name={PagesNavigator.Login} component={LoginScreen} />
//             <Stack.Screen name={PagesNavigator.Register} component={RegisterScreen} />
//           </>
//         ) : (
//           // Usuário logado: fluxo principal
//           <>
//             <Stack.Screen name={PagesNavigator.Layout} component={Layout} />
//             <Stack.Screen name={PagesNavigator.ContactList} component={ContactList} />
//             <Stack.Screen name={PagesNavigator.Chat} component={Chat} />
//             <Stack.Screen name={PagesNavigator.Menu} component={Menu} />
//             <Stack.Screen name={PagesNavigator.PetProfile} component={PetProfile} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
  