import { TravelMode } from "./travelModes/travel-mode(State).interface";
import { Walking } from "./travelModes/modes(concreate_implementations)/walking";

export class DirectionService {
  private travelMode: TravelMode;

  constructor() {
    this.travelMode = new Walking();
  }

  setTravelMode(travelMode: TravelMode) {
    this.travelMode = travelMode;
  }

  getEta() {
    console.log(this.travelMode.getEta());
  }

  getDirection() {
    console.log(this.travelMode.getDirection());
  }
}
