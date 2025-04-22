import { MenuPet } from "@/components/MenuPet"
import { ScrollView, View, StyleSheet, Dimensions } from "react-native"
import React from "react";
import { Pet } from "../../../@types/Pet";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";


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

const mockPets = [
  { name: "Buddy", race: "Golden Retriever", gender: "M" },
  { name: "Bella", race: "Golden Retriever", gender: "F" },
  { name: "Max", race: "Golden Retriever", gender: "M" },
  { name: "Lucy", race: "Golden Retriever", gender: "F" },
  { name: "Charlie", race: "Golden Retriever", gender: "M" },
  { name: "Daisy", race: "Golden Retriever", gender: "F" },
  { name: "Rocky", race: "Golden Retriever", gender: "M" },
  { name: "Molly", race: "Golden Retriever", gender: "F" },
  { name: "Jake", race: "Golden Retriever", gender: "M" },
  { name: "Sadie", race: "Golden Retriever", gender: "F" }
] as Pet[];

export function PetList() {
  return (
    <ScrollView style={style.scrollView}>
      <Header/>
      <View style={style.petList}>
        {mockPets.map((pet, idx) => <MenuPet  key={idx} pet={pet}/>)}
      </View>
      <Footer/>
    </ScrollView>
  )
}