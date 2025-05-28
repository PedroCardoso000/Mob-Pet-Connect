import InputConnect from "@/src/components/InputConnect";
import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


const styles = StyleSheet.create({
  inputContainer: {
    height: 62,
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

type Props = {
  onSend: (content: string) => void;
};

export function ChatFooter({ onSend }: Props) {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Insira sua mensagem"
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={() => {
          if (message.trim()) {
            onSend(message);
            setMessage("");
          }
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (message.trim()) {
            onSend(message);
            setMessage("");
          }
        }}
      >
        <Ionicons style={styles.sendButton} name="send" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

