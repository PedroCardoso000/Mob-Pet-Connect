import { MenuPet } from "@/components/MenuPet";
import { PetList } from "./PetList";
import { useEffect, useState } from "react";
import { Pet } from "@/@types/Pet";
import { api } from "@/src/api/axios";

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
    <>
      <PetList pets={pets}/>
    </>
  )
}