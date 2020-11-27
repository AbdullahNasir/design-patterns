import { TravelMode } from "../travel-mode(State).interface";

export class Walking implements TravelMode {
  // This class will implement logic to calculate walking direction & ETA
  getEta(): string {
    return "2 mins";
  }
  getDirection(): string {
    return "go right & left";
  }
}
