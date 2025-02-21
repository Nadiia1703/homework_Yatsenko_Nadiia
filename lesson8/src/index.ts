import { CarTariffNew, CarTariffOld } from './abstraction';

const aCar = new CarTariffOld('ВАЗ', '1310', 1985, 'A');
const bCar = new CarTariffOld('BMW', 'VAR', 2000, 'B');

aCar.showVehicle();
console.log('old tariff', aCar.calcTariff());

bCar.showVehicle();
console.log('old tariff', bCar.calcTariff());

const aaCar = new CarTariffNew('Toyota', 'Camry', 2020, 'A');
const bbCar = new CarTariffNew('BMW', 'X5', 2020, 'B');

aaCar.showVehicle();
console.log('new tariff', aaCar.calcTariff());

bbCar.showVehicle();
console.log('new tariff', bbCar.calcTariff());
