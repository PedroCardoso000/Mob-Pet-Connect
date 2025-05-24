import { useEffect, useState } from "react";
import { UserPet } from "../../../@types/UserPet";
import { api } from "../../../api/axios";
import { AxiosError } from "axios";

export function usePet(petId: number) {

  const [userPet, setPet] = useState<UserPet>();
  const [error, setError] = useState<AxiosError<any>>();

  useEffect(() => {
    if(!petId) return;
    fetchPet(petId)
  }, [petId])

  async function fetchPet(petId: number) {
    try {
      const response = await api.get(`/pet/${petId}`);
      setPet(response.data);
    } catch(err) {
      console.log(err);
      setError(error)
    }
  }

  return {userPet, error}
}