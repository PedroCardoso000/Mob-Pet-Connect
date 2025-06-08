import { Contact } from "@/src/@types/Contact";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { ContactView } from "../../components/ContactView";
import { width } from "@/src/utils/width"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import { connectChat, disconnectChat } from "@/src/log/chatSocket";
import { api } from "@/src/api/axios";
import { User } from "@/src/@types/User";
import { HttpStatusCode } from "axios";

export default function ContactList() {
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState<Contact[]>([]);

  async function getUsers() {
    try { 
      const {status, data} = await api.get("/user");
      if(status === HttpStatusCode.Ok){
        setContacts(
          data.map((x: User) => ({
            id: x?.id,
            name: x?.name,
          }))
        );
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  useEffect(() => {
    if (!user?.id) return;
    getUsers();
  }, []);

return (
  <ScrollView style={style.scrollView}>
    <View style={style.view}>
      {contacts.map((contact, index) => (
        <View key={contact.id ?? index}>
          <ContactView contact={contact} />
          {index < contacts.length - 1 && (
            <View style={style.divider} />
          )}
        </View>
      ))}
    </View>
  </ScrollView>
)
}
const style = StyleSheet.create({
  scrollView: {
    marginTop: 32,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    width: width(0.9),
    marginHorizontal: "auto"
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 8,
    width: "100%",
    alignSelf: "center"
  }
});