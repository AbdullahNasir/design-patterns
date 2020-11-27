import { TravelMode } from "../travel-mode(State).interface";

export class Driving implements TravelMode {
  getEta(): string {
    return "1 min";
  }
  getDirection(): string {
    return "driving directions";
  }
}
