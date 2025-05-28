import { ContactView } from "@/src/components/ContactView"
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign"
import { width } from "@/src/utils/width"
import { useNavigation } from "@react-navigation/native"
import { NavigationProps } from "@/src/navigator/navigator-simple-app"


const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  leftSection: {
    width: width(0.2),
    alignItems: "flex-start",
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
  },
  rightSection: {
    width: width(0.2),
    alignItems: "flex-end",
  },
})

export function ChatHeader() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerSection}>
          <ContactView contact={{ name: "Breno Santos" }} />
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

