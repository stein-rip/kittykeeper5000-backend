import { ObjectId } from "mongodb";

interface Cat {
  id: string;
    url: string;
}

export default interface Favorite {
  _id: ObjectId;
  cat: Cat;
  userId?: string;
}


