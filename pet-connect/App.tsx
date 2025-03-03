import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Menu } from '@/src/pages/Menu';
import LoginScreen from "./src/pages/login/login";
import { PetList } from "./src/pages/Menu/PetList";

export default function App() {
  return (
    <PetList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
