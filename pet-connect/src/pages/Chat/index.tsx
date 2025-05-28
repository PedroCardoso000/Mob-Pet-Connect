import { ChatHeader } from "./ChatHeader"
import { View, ScrollView, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Text, TouchableOpacity } from "react-native"
import { Message } from "./Message"
import { ChatFooter } from "./ChatFooter";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "@/src/context/AuthContext";
import { connectChat, disconnectChat, sendMessage } from "@/src/log/chatSocket";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "#fff",
    paddingHorizontal: (10),
  },
  scrollView: {
    flex: 1,
    paddingVertical: 8,
  },
})


export function Chat() {
  const { user } = useContext(AuthContext);
  const route = useRoute();
  const { receiverId } = route.params as { receiverId: number };

  const [messages, setMessages] = useState<{ fromUser: boolean; text: string }[]>([]);

  useEffect(() => {
    if (!user?.id) return;

    connectChat(
      user.id,
      (msg) => {
        const isFromUser = msg.sender === user.id;
        setMessages((prev) => [...prev, { text: msg.content, fromUser: isFromUser }]);
      },
      (notification) => {
        alert(`🔔 Notificação: ${notification.content}`);
      }
    );

    return () => {
      disconnectChat();
    };
  }, [user]);

  function handleSend(content: string) {
    if (!user?.id || !receiverId) {
      console.warn("Usuário ou receiverId indefinido");
      return;
    }

    console.log("Enviando mensagem:", content);
    sendMessage(user.id, receiverId, content);

    setMessages((prev) => [...prev, { text: content, fromUser: true }]);

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ChatHeader />
        <ScrollView style={styles.scrollView}>
          {messages.map((message, idx) => (
            <Message key={idx} message={message} />
          ))}
        </ScrollView>
        <ChatFooter onSend={handleSend} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}





