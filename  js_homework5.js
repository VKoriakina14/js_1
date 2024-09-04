
const car = {
    mark: "Audi",
    model: "A4",
    color: "Mokryy asfalt :)",
    odo: 75000,
    vin: "WAUDNAF49HN048904",
    vehicleCondition: "Нє біта, нє крашена",
    restyling: "B9",
    vehicleYear: 2017,
  
    
    getInfo: function() {
      for (let key in this) {
        if (typeof this[key] !== 'function') {
          console.log(`${key}: ${this[key]}`);
        }
      }
    },
     addProperty: function(properties) {
    for (let key in properties) {
      this[key] = properties[key];
    }
  } 
  };
  
 car.getInfo();
 car.addProperty({
    mark: "bmw",
    color: "black",
    model: "330i",
    odo: 2300,
    vin: "WBA5R1C55KAK10032",
    vehicleCondition: "на столб не моталась, пока что целая",
    restyling: "g20",
    vehicleYear: 2020
  }) 

    car.addProperty({
    fuelType: "gasoline",    
 });
    car.getInfo();