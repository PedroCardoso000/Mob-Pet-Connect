import { StyleSheet, View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ProfileIcon } from "./ProfileIcon";
import InputComponent from "@/src/components/InputConnect";

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerView, { paddingTop: insets.top + 5 }]}>
      <View style={styles.marginRight16}>
        <ProfileIcon size={40} />
      </View>
      <View style={styles.flexItem}>
        <InputComponent
          styleInput={styles.inputBackground}
          placeholder=""
        />
      </View>
      <View style={{ width: 40 }} /> {/* espaço reservado */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center",
  },
  flexItem: {
    flex: 1,
    height: 40,
  },
  marginRight16: {
    marginRight: 16,
  },
  inputBackground: {
    backgroundColor: "#EAEAEA",
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
});
