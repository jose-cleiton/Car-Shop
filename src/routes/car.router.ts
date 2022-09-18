import { Router } from 'express';
import factory from '../factories';

const routerCar = Router();

routerCar.put('/cars/:id', factory.startCar.putCar);
routerCar.post('/cars', factory.startCar.postCar);

routerCar.get('/cars/:id', factory.startCar.getCarById);
routerCar.get('/cars', factory.startCar.getCars);
routerCar.delete('/cars/:id', factory.startCar.deleteCar);

export default routerCar;
