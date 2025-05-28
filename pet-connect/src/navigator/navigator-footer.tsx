import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PagesNavigator } from './pages-navigator';
import Menu from '../pages/menu';
import Foundation from "@expo/vector-icons/Foundation"
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  height: 60,
  position: 'absolute' as const,
  margin: 16,
  borderRadius: 16,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

export function FooterNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false, tabBarStyle}}>
      <Tab.Screen
      name={PagesNavigator.Menu}
      component={Menu}
      options={{tabBarIcon: () => <Foundation name="home" size={24} color="black"/>}}/>
    </Tab.Navigator>
  );
}