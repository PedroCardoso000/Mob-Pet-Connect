import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Register: undefined;
  UserProfile: undefined;
  Chat: { receiverId: number };
  ContactList: undefined;
  PetProfile: { petId: number } | undefined;
  CreatePet: undefined 
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;