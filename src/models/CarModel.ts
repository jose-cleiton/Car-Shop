import { model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import carMongooseSchema from '../Schema/carMongooseSchema';
import ImPModel from './implementations/ImPModel';

class Car extends ImPModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;