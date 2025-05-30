import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Pet } from "@/@types/Pet";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../navigator/navigator-simple-app";

const exampleDog = require("@/assets/dog.jpg");

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  view: {
    width: Dimensions.get("window").width * 0.4
  },
  imageTextView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  raceText: {
    fontSize: 10
  }
})

type Props = {
  pet: Pet
}

export function MenuPet({pet}: Props) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Pressable>
      <View style={style.view} onTouchEnd={() => navigation.replace("Home")}>  
          <Image
            source={exampleDog}
            style={style.image}          
            borderRadius={4}      
          />
          <View style={style.imageTextView}>
            <Text>{pet.name} ({pet.gender === "FEMALE" ? "F" : "M"})</Text>
            <Text>{pet.race}</Text>
          </View>
      </View>
    </Pressable>
  )
}