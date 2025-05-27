import { Image, StyleSheet } from "react-native"
const examplePerson = require("@/assets/user.png");

type Props = {
  size: number
}

export function ProfileIcon({size}: Props) {

  const style = StyleSheet.create({
    image: {
      borderRadius: size / 2,
      width: size,
      height: size
    },
  })


  return(
    <Image
    source={examplePerson}
    style={style.image}
    />
  )
}