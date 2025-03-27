import InputConnect from "@/src/components/InputConnect";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
  inputContainer: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  input: {
    flex: 1,
  },
  sendButton: {
    width: 24,
    height: 24,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
})

export function ChatFooter() {
  return (
    <View style={styles.inputContainer}>
          <InputConnect styleInput={styles.input} placeholder="Insira sua mensagem"/>
          <TouchableOpacity>
            <Ionicons style={styles.sendButton} name="send" size={24} color="black" />
          </TouchableOpacity>
    </View>
  )
}