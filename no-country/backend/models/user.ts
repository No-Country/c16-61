import { firebaseApp } from "../db/firestore";
import { addDoc, doc, collection } from "firebase/firestore"; 

const collectionDB = collection(firebaseApp, "users");
export class User {
  
  constructor() {
    
  }
  async pull() {
    
  }
  async push(){
    
  }
  static async createNewUser(data:any) {
    
   const newUser = await addDoc(collectionDB, {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
    return newUser
  }
}
