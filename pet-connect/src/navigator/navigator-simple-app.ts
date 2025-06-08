import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../@types/User";

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
  FriendView: { user: User  | null } | undefined   ;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;