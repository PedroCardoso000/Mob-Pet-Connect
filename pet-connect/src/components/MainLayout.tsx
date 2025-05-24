import { View, StyleSheet } from 'react-native';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80, 
    paddingBottom: 0, 
  },
  content: {
    flex: 1,
  },
});
