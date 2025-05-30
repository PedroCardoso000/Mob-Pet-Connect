import { ChatHeader } from "./ChatHeader"
import { View, ScrollView, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Text, TouchableOpacity } from "react-native"
import { Message } from "./Message"
import { ChatFooter } from "./ChatFooter";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { CompatClient, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

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

  const [stompClient, setStompClient] = useState<CompatClient>();

  useEffect(() => {
    const socket = new SockJS("http://172.29.80.1:8080/chat");
    setStompClient(Stomp.over(socket));
  }, []);

  useEffect(() => {
    stompClient?.connect({}, (frame: any) => {

      stompClient.subscribe(
        `/topic/chat/${receiverId}-${user?.id}`,
        function (messageOutput) {
          const message = JSON.parse(messageOutput.body);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: message.content, fromUser: false },
          ]);
        }
      );
    });
  }, [stompClient]);

  function sendMessageSocket(text: string) {
    stompClient?.send(
      `/app/chat.send`,
      {},
      JSON.stringify({ sender: user?.id , receiver: receiverId, content: text})
    );
    setMessages([...messages, {text, fromUser: true}])
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ChatHeader/>
        <ScrollView style={styles.scrollView}>
          {messages.map((message, idx) => (
            <Message key={idx} message={message} />
          ))}
        </ScrollView>
        <ChatFooter onSend={sendMessageSocket} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}





