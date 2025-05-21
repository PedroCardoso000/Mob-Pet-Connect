import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Register: undefined;
  UserProfile: undefined;
  Chat: undefined;
  ContactList: undefined;
  PetProfile: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;