const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 1;
let cycle2 = 1;

while (cycle2 < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
  trafficLight.stateIndex++;
  if (trafficLight.stateIndex === trafficLight.possibleStates.length) {
    trafficLight.stateIndex = 0;
    cycle2++;
  }
}

while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("the traffic light is on", currentState);
  switch (currentState) {
    case "green":
      trafficLight.stateIndex = 1;
      break;
    case "orange":
      trafficLight.stateIndex = 2;
      break;
    default:
      trafficLight.stateIndex = 0;
      cycle++;
      break;
  }
}

//Question
// TODO
// Should return the current state (i.e. colour) of the `trafficLight`
// object passed as a parameter.
