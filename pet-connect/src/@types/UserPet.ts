import { Pet } from "./Pet"
import { User } from "./User"

export type UserPet = Pet & { user: User, name: string, userId: number }