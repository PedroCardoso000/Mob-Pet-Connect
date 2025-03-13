import { View, Image, StyleSheet, Text } from "react-native";
import {Contact} from "@/@types/Contact"

const examplePerson = require("@/assets/user.png");

const IMAGE_SIZE = 48

const style = StyleSheet.create({
  image: {
    borderRadius: IMAGE_SIZE / 2,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
  },
  view: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center"
  },
  nameText: {
    fontWeight: "semibold",
    fontSize: 18
  }
})

type Props = {
  contact: Contact
}

export function ContactView({contact}: Props) {
  return (
    <View style={style.view}>
      <Image
      source={examplePerson}
      style={style.image}
      />
      <Text style={style.nameText}>{contact.name}</Text>
    </View>
  )
}