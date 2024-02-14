import { User } from "../models/user";

export async function searchOrCreateUser(req:any){
    try {
       const result = User.createNewUser({name:"luca"})
        return result
    } catch (error) {
        throw error
    }
}