/**
 * It is time to build the search part for your rental app.
 * The user can filter the rentals on the following properties:
 *   - nearLake => a boolean to check if the rental is near the lake
 *   - tag => every rental property can choose some tags. The user can select a tag, which should filter all the rentals that have that tag in their tags array
 */

/**
 * Fill in the following function. The function has 3 parameters:
 * - `rentals`: An array of rental properties to filter. Have a look at the `testRentals` at the bottom of this file to see the structure you expect
 * - `nearLake`: A boolean to be used when filtering. If this is true only rentals with the `nearLake` boolean being true should be in the resulting array. If false then only rentals with the `nearLake` boolean being false should be in the resulting array.
 * - `tag`: A string to be used when filtering. Only rentals that have this `tag` in their `tags` array should be in the resulting array.
 */
 const filterRentals = (rentals = [], nearLake, tag) => {
    return rentals.filter((rental) => nearLake ? rental.nearLake : !rental.nearLake).filter((rental) => tag ? rental.tags.includes(tag) : true);
  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
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
  // nearLake === true || tag === 'Nature'
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
  console.log(testRentalsNotNearLakeWashingMachine)
  console.assert(testRentalsNotNearLakeWashingMachine.length === 2);
  console.assert(
    testRentalsNotNearLakeWashingMachine[0].id === "r---3" ||
      testRentalsNotNearLakeWashingMachine[0].id === "r---2"
  );
  console.assert(
    testRentalsNotNearLakeWashingMachine[1].id === "r---3" ||
      testRentalsNotNearLakeWashingMachine[1].id === "r---2"
  );
  