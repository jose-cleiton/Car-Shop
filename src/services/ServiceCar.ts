import { isValidObjectId } from 'mongoose';
import { ICarDTO } from '../DTO/ICarDTO';
import { ErrorTypes } from '../errors/catalog';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class ServiceCar {
  constructor(private model: IModel<ICar>) {}

  public saveNewCar = async (objectCar: ICarDTO) => {
    const parseSuccess = CarZodSchema.safeParse(objectCar);
    
    if (!parseSuccess.success) throw parseSuccess.error;

    return this.model.create(objectCar);
  };

  public getCarsList = async () => this.model.read();

  public getCarById = async (id: string) => {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const carById = await this.model.readOne(id);

    if (!carById) throw Error(ErrorTypes.EntityNotFound);
    
    return carById;
  };

  public updateCar = async (id: string, objectCar: ICarDTO) => {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);

    const resp = CarZodSchema.safeParse(objectCar);
    if (!resp.success) throw resp.error;

    const newCarUpdate = await this.model.update(id, objectCar);

    if (!newCarUpdate) throw Error(ErrorTypes.EntityNotFound);

    return newCarUpdate;
  };

  public deleteCar = async (id: string) => {
    await this.getCarById(id);
    await this.model.delete(id);
  };
}