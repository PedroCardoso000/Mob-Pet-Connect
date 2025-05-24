import { Pet } from "@/src/@types/Pet";
import { NavigationProps } from "@/src/navigator/navigator-simple-app";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={style.view} onTouchEnd={() => navigation.replace("PetProfile")}>  
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