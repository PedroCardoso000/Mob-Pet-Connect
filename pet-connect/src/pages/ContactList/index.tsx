import { Contact } from "@/@types/Contact";
import { ScrollView, StyleSheet, View } from "react-native";
import { ContactView } from "../../components/ContactView";
import { width } from "@/src/utils/width"

const mockContacts: Contact[] = [
  {name: "Leandro Nepu"},
  {name: "Davi Gregório"},
  {name: "Pedro Cardoso"},
  {name: "Ana Silva"},
  {name: "Carlos Souza"},
  {name: "Mariana Alves"},
  {name: "Fernanda Costa"},
  {name: "Rafael Lima"},
  {name: "Beatriz Rocha"},
  {name: "Gustavo Nunes"},
  {name: "Juliana Martins"},
  {name: "Vinícius Pereira"},
  {name: "Larissa Oliveira"},
  {name: "Fábio Santos"},
  {name: "Camila Moura"},
  {name: "André Barbosa"},
  {name: "Patrícia Cunha"},
  {name: "Rodrigo Vieira"},
  {name: "Isabela Duarte"},
  {name: "Lucas Fernandes"},
  {name: "Carolina Rezende"},
  {name: "Tiago Monteiro"},
  {name: "João Vitor"},
  {name: "Clara Mendes"}
];

const style = StyleSheet.create({
  scrollView: {
    marginTop: 32,
  },
  view: {
    flex: 1,
    flexDirection:"column",
    gap: 16,
    width: width(0.9),
    marginHorizontal: "auto"
  }
})

export function ContactList() {
  return (
    <ScrollView style={style.scrollView}>
      <View style={style.view}>
        {mockContacts.map((contact, index) => <ContactView key={index} contact={contact}/>)}
      </View>
    </ScrollView>
  )
}