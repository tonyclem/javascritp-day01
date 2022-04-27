
 const rentals = [
    {
        description: "Luxury apartment",
        isAvailable: true
    },
    {
        description: 'Student apartment',
        isAvailable: false
    }
  ]
  
  console.assert(rentals.some((rental) => rental.isAvailable === true));
  console.assert(rentals.some((rental) => rental.isAvailable === false));
  
  rentals.forEach((rental) => {
    console.assert(typeof rental.description === "string");
  });
  