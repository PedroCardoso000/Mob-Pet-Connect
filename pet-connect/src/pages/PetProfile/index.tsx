import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { usePet } from "./hooks/usePet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api/axios";
import { NavigationProps } from "../../navigator/navigator-simple-app";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading";
import { sendNotification } from "../../log/chatSocket";
const exampleUser = require("@/assets/user.png");
const exampleDog = require("@/assets/dog.jpg");

export default function PetProfile({ route }: any) {
  const navigation = useNavigation<NavigationProps>();
  const { userPet } = usePet(route.params.petId);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  async function match(sender: number, receiver: number) {
    try {
      setIsLoading(true);
      if(sender === receiver) return console.warn("Não é possível fazer match consigo mesmo.");
      await api.post("/chat-room", { sender, receiver });
      navigation.navigate("Chat", {
        receiverId: receiver,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;
  return (
    <ScrollView style={styles.container}>
      <Image source={exampleDog} style={styles.petImage} />
      <View style={styles.infoContainer}>
        <View style={styles.nameRow}>
          <Text style={styles.petName}>{userPet?.name}</Text>
          <View style={styles.breedDateContainer}>
            <Text style={styles.breedText}>{userPet?.race} {userPet?.gender === "MALE" ? "♂" : "♀"}</Text>
            <View style={styles.detailItem}>
              <Ionicons name="calendar-outline" size={18} color="#3498db" />
              <Text style={styles.detailText}>{userPet?.birthDate}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sunt quam vero cupiditate enim accusamus sed quae velit, sit unde animi, corrupti accusantium amet, inventore eaque. Iste maxime eaque reprehenderit?
        </Text>

        <TouchableOpacity
          style={styles.matchButton}
          onPressOut={() => match(user!.id, userPet!.user.id)}
        >
          <Text style={styles.matchButtonText}>Match</Text>
        </TouchableOpacity>


        <View style={styles.ownerContainer}>
          <Image source={exampleUser} style={styles.ownerImage} />
          <View style={styles.ownerInfo}>
            <Text style={styles.ownerName}>{userPet?.user?.name}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  petImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  breedDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  breedText: {
    fontSize: 16,
    color: "#666",
  },
  petName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contactButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  contactButtonText: {
    color: "white",
    fontWeight: "500",
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  detailText: {
    marginLeft: 4,
    color: "#666",
  },
  description: {
    color: "#666",
    lineHeight: 20,
    marginBottom: 20,
  },
  matchButton: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  matchButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ownerInfo: {
    marginLeft: 12,
  },
  ownerName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  ownerSince: {
    color: "#666",
    fontSize: 14,
  },
})

export type PropsPetProfile = {
  route: {
    params: number
  }
}

