import { Request, Response } from 'express';
import ServiceCar from '../services/ServiceCar';

export default class CarController {
  constructor(private serviceCar: ServiceCar) {}

  public postCar = async (request: Request, response: Response) => {
    const { body } = request;
    const results = await this.serviceCar.saveNewCar(body);
    response.status(201).json(results);
  };

  public getCars = async (_request: Request, response: Response) => {
    const results = await this.serviceCar.getCarsList();
    response.status(200).json(results);
  };

  public getCarById = async (request: Request, response: Response) => {
    const { id } = request.params;
    const result = await this.serviceCar.getCarById(id);
    response.status(200).json(result);
  };

  public putCar = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { body } = request;
    
    const result = await this.serviceCar.updateCar(id, body);
    response.status(200).json(result);
  };
}