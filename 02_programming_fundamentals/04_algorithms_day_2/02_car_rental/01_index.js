const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car
function canRentACar (driver) {
  let canRentACar1;
  if (driver.driverLicense.substring(0,1)==="B" && driver.licenseIssued<=2016 && (driver.numberOfAccident===0 || driver.bonus>=0.7)) {
    canRentACar1 = true;
  } else {
    canRentACar1 = false;
  }
  console.log(canRentACar1);
  return canRentACar1;
}
canRentACar(driver);




// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
