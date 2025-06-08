import { View, Image, StyleSheet, Text } from "react-native";
import { Contact } from "@/src/@types/Contact"
import { PagesNavigator } from "../navigator/pages-navigator";
import { api } from "../api/axios";
import { HttpStatusCode } from "axios";
import { User } from "../@types/User";
import { useState } from "react";
import { NavigationProps } from "../navigator/navigator-simple-app";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";

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

  contact: Contact,

}

export function ContactView({ contact }: Props) {
  const navigation = useNavigation<NavigationProps>();
  const [userId, setUserId] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function getUserId(id: number) {
    try {
      setLoading(true);
      const { status, data } = await api.get("/user/" + id);

      if (status === HttpStatusCode.Ok) {
        setUserId(data);
        
       navigation.navigate("FriendView", { user: data });
        return data;
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }finally {
      setLoading(false);
    }
  }

  if(loading) return <Loading />  

  return (
    <View onTouchMove={() => getUserId(contact?.id as number)} style={style.view}>
      <Text style={style.nameText}>{contact.name}</Text>
    </View>
  )
}