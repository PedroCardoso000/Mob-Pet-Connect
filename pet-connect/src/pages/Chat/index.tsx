import { ChatHeader } from "./ChatHeader"
import { View, ScrollView, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform , Text, TouchableOpacity} from "react-native"
import { Message } from "./Message"
import InputConnect from "@/src/components/InputConnect"
import Ionicons from '@expo/vector-icons/Ionicons';
import { ChatFooter } from "./ChatFooter";

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
  const messages = [
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
    { text: "Oi, tenho interesse no seu Retriever!", fromUser: true },
    { text: "Opa, beleza? Vamos conversar então", fromUser: false },
    { text: "Vamos!", fromUser: true },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ChatHeader/>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, idx) => (
            <Message key={idx} message={message} />
          ))}
        </ScrollView>
        <ChatFooter/>
      </KeyboardAvoidingView>
    </SafeAreaView> 
  )
}

function scaleSize(arg0: number): any {
  throw new Error("Function not implemented.");
}

