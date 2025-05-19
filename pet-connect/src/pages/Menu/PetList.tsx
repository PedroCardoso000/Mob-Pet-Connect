import { MenuPet } from "@/components/MenuPet"
import { ScrollView, View, StyleSheet, Dimensions } from "react-native"
import React from "react";
import { Pet } from "../../../@types/Pet";


const style = StyleSheet.create({
  scrollView: {
    margin: 32
  },
  petList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "auto",
    width: Dimensions.get("window").width * 0.9 ,
    gap: 10
  },
  
})


type Props = {
  pets: Pet[]
}

export function PetList({pets}: Props) {
  return (
    <ScrollView style={style.scrollView}>
      <View style={style.petList}>
        {pets.map((pet, idx) => <MenuPet  key={idx} pet={pet}/>)}
      </View>
    </ScrollView>
  )
}