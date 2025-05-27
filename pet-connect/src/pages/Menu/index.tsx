import { PetList } from "./PetList";
import { useEffect, useState } from "react";
import { Pet } from "@/src/@types/Pet";
import { api } from "@/src/api/axios";
import { View } from "react-native";
import { PetFilter } from "./PetFilter";

export type FilterOptions = {
  petInput: string,
  selectedRace: string | null,
  male: boolean,
  female: boolean
}

const initialFilterState: FilterOptions = {
  petInput: "",
  selectedRace: null,
  male: true,
  female: true
}

export default function Menu() {

  const [pets, setPets] = useState<Pet[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(initialFilterState);

  function getFilteredPets() {
    const petInputFilter = ({ name }: Pet) =>
      filterOptions.petInput ? name.includes(filterOptions.petInput) : true

    const selectRaceFilter = ({ race }: Pet) =>
      filterOptions.selectedRace ? race === filterOptions.selectedRace : true

    const genderFilter = ({ gender }: Pet) => {
      if(filterOptions.male && filterOptions.female) return true
      if(filterOptions.male) return gender === "MALE"
      if(filterOptions.female) return gender === "FEMALE"
      return false
    }
      
    return pets
      .filter(petInputFilter)
      .filter(selectRaceFilter)
      .filter(genderFilter)
  }

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
      <PetFilter
      pets={pets}
      filterOptions={filterOptions}
      setFilterOptions={setFilterOptions}/>
      <PetList pets={getFilteredPets()}/>
    </View>
  )
}