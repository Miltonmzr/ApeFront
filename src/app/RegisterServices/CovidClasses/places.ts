import { User } from "../user";
import { PlaceItem } from "./place-item";

export class Places {
    id: number;
    placeItem: PlaceItem;
    joinDate: string;
    outDate: string;
    user: User;
}
