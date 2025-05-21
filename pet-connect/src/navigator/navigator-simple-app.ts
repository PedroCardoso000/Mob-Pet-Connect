import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Register: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;