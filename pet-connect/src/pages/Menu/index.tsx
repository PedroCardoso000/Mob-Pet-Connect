import { MenuPet } from "@/components/MenuPet";
import { PetList } from "./PetList";
import { useEffect, useState } from "react";
import { Pet } from "@/src/@types/Pet";
import { api } from "@/src/api/axios";
import { View } from "react-native";
import { Footer } from "@/src/components/Footer";

export default function Menu() {

  const [pets, setPets] = useState<Pet[]>([]);

  async function fetchPets() {
    try {
      const response = await api.get("/pet");
      setPets(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPets();
  }, [])


  return (
    <View>
      <PetList pets={pets}/>
    </View>
  )
}