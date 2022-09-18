import CarController from '../controllers/CarController';
import Car from '../models/CarModel';
import ServiceCar from '../services/ServiceCar';

export default class StartCar {
  static make() {
    const startModel = new Car();
    const startService = new ServiceCar(startModel);
    const start = new CarController(startService);
    
    return start;
  }
}