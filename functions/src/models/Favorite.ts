import { ObjectId } from "mongodb";

export interface Cat {
    id: string;
    url: string;
    name: string;
    // categories?: Categories[]; 
}

export default interface Favorite {
  _id: ObjectId;
  cat: Cat;
  userId?: string;
}
// export interface Categories {
//     name: string;
// }

