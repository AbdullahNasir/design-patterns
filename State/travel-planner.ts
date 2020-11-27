import { DirectionService } from "./direction-service(Contentx)";
import { Driving } from "./travelModes/modes(concreate_implementations)/driving";

const directionService = new DirectionService();

directionService.getDirection();
directionService.getEta();

directionService.setTravelMode(new Driving());
directionService.getDirection();
directionService.getEta();
