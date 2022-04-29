const filterRentals = (rentals = [], nearLake, tag) => {
  return rentals.filter(
    (rental) => rental.nearLake === nearLake && rental.tags.includes(tag)
  );
};

const testRentals = [
  {
    id: "r---1",
    description: "Cozy Cabin",
    nearLake: true,
    isAvailable: true,
    tags: ["Nature", "Outdoors"],
  },
  {
    id: "r---2",
    description: "Luxury Apartment",
    nearLake: false,
    isAvailable: false,
    tags: ["City", "Washing machine"],
  },
  {
    id: "r---3",
    description: "Lake house",
    nearLake: false,
    isAvailable: false,
    tags: ["Nature", "Washing machine"],
  },
];

// nearLake === true || tag === 'Nature
const testRentalsNearLakeNature = filterRentals(testRentals, true, "Nature");
console.assert(testRentalsNearLakeNature.length === 1);
console.assert(testRentalsNearLakeNature[0].id === "r---1");

// nearLake === false || tag === 'Nature'
const testRentalsNotNearLakeNature = filterRentals(
  testRentals,
  false,
  "Nature"
);

console.assert(testRentalsNotNearLakeNature.length === 1);
console.assert(testRentalsNotNearLakeNature[0].id === "r---3");

// nearLake === false || tag === 'Washing machine'
const testRentalsNotNearLakeWashingMachine = filterRentals(
  testRentals,
  false,
  "Washing machine"
);

console.assert(testRentalsNotNearLakeWashingMachine.length === 2);
console.assert(
  testRentalsNotNearLakeWashingMachine[0].id === "r---3" ||
    testRentalsNotNearLakeWashingMachine[0].id === "r---2"
);

console.assert(
  testRentalsNotNearLakeWashingMachine[1].id === "r---3" ||
    testRentalsNotNearLakeWashingMachine[1].id === "r---2"
);
