import { Pet } from "@/src/@types/Pet";
import { navigate } from "@/src/navigator/app_navigator";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

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

  return (
    <View style={style.view} onTouchEnd={() => navigate("Pet_Profile", pet.id)}>  
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
  )
}