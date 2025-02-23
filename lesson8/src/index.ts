import { CarTariffNew, CarTariffOld } from './abstraction';
import { ResultsClass, Ship, SummaryWeightOfShips } from './class';
import { getMyJson } from './interface-fetch';

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

(async () => {
    try {
        const data = await getMyJson();
        data.info.info1 = 'test text';
        console.log(data.info.info1);
        console.log('Ship_id: ', data.result[0].ship_id);
        console.log('Ship_name: ', data.result[0].ship_name);
        console.log('missions name: ', data.result[1].missions[3].name); //виклик помилки result[0]
    } catch (err: unknown){
        console.log('Data doesn`t exist: ', err);
        throw (err);
    }
})();

(async () => {
    try {
        const data = await getMyJson();
        console.log('Smt interface', data.result[0].ship_id);
        const data2 = new ResultsClass('', data.result as Ship[]);
        const summery = new SummaryWeightOfShips(data2);
        //summery.summeryShip();
        console.log('************ ');
        console.log('totalWeightKg: ', summery.totalWeightKg);
        console.log('info about ship: ', summery.infos);
    } catch (err) {
        console.log('Error text ', err);
    }
})();
