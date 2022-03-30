const getDeliveriesPerDriver = (deliveries) => {
  const deliveriesPerDriver = {};
  deliveries.forEach((delivery) => {
    const driverId = delivery.description;
    const alreadyIncludedDeliveries = deliveriesPerDriver[driverId];

    if (alreadyIncludedDeliveries == null) {
      deliveriesPerDriver[driverId] = [delivery];
    } else {
      deliveriesPerDriver[driverId].push(delivery);
    }
  });
  return deliveriesPerDriver;
};

const testDeliveries = [
  {
    description: "Groceries",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---1",
    deliveryId: "d----1",
  },
  {
    description: "Table",
    isDelivered: true,
    isReturned: true,
    driverId: "dr---2",
    deliveryId: "d----2",
  },
  {
    description: "Bed",
    isDelivered: true,
    isReturned: false,
    driverId: "dr---1",
    deliveryId: "d----3",
  },
  {
    description: "Cupboard",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---3",
    deliveryId: "d----4",
  },
];
console.log(getDeliveriesPerDriver(testDeliveries, "Table"));
