export function Vehicle(make, model, year, regNumber) {
  this.vehicleMake = make;
  this.vehicleModel = model;
  this.vehicleYear = year;
  this.vehicleRegNumber = regNumber;
  this.vehicleDetails = new VehicleDetails("", "", "", "", "");
}

class VehicleDetails {
  constructor(
    insuranceExpiryDate,
    lastServiceDate,
    rsaExpiryDate,
    pucExpiryDate,
    warrantyExpiryDate
  ) {
    this.insuranceExpiryDate = insuranceExpiryDate;
    this.lastServiceDate = lastServiceDate;
    this.rsaExpiryDate = rsaExpiryDate;
    this.pucExpiryDate = pucExpiryDate;
    this.warrantyExpiryDate = warrantyExpiryDate;
  }
}
