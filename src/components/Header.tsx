import { StyleSheet, View } from "react-native";
import { ProfileIcon } from "./ProfileIcon";
import InputComponent from "@/src/components/InputConnect";

const style = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginTop: 32,
    paddingHorizontal: 16,
    paddingVertical: 5,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0"
  },
  flexItem: {
    flex: 1,
    height: 48,
  },
  marginRight16: {
    marginRight: 16
  },
  inputBackground: {
    backgroundColor: "#EAEAEA",
    borderRadius: 8,
    padding: 0
  }
})

export function Header() {
  return (
    <View style={style.headerView}>
      <View style={style.marginRight16}>
        <ProfileIcon size={48}/>
      </View>
      <View style={style.flexItem}>
        <InputComponent styleInput={style.inputBackground} placeholder=""/>
      </View>
      <View></View>
    </View>
  )
}