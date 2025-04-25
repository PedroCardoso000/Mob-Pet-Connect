import { width } from "@/src/utils/width"
import { StyleSheet, View, Text } from "react-native"

type Props = {
  message: {
    fromUser: boolean
    text: string
  }
}

export function Message({ message }: Props) {
  const style = StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 16,
      marginVertical: 8,
      flexDirection: "row",
      justifyContent: message.fromUser ? "flex-end" : "flex-start",
    },
    bubble: {
      padding: 12,
      backgroundColor: message.fromUser ? "#499CFA" : "#E8E8E8",
      maxWidth: width(0.7),
      borderRadius: 18,
    },
    text: {
      color: message.fromUser ? "#FFFFFF" : "#000000",
      fontSize: 16,
    },
  })

  return (
    <View style={style.container}>
      <View style={style.bubble}>
        <Text style={style.text}>{message.text}</Text>
      </View>
    </View>
  )
}

