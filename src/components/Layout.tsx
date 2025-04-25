import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native"
import { Footer } from "./Footer"
import { Header } from "./Header"

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    position: "relative",
  }
})

export function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Footer />
    </SafeAreaView>
  )
}

