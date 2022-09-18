// template para criação dos testes de cobertura da camada de model

import { Request, Response } from 'express';
import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import ServiceCar from '../../../services/ServiceCar';
import { Model } from 'mongoose';
const { expect } = chai;
import {DTOMock, MockCar} from '../../mocks/CarsMock';
import CarController from '../../../controllers/CarController';
describe('Contoller', () => {

  const car = new Car();
  const carService = new ServiceCar(car);
  const carContrtroller = new CarController(carService);

  let req = {} as Request;
  let res = {} as Response;

  before(async () => {
    // aqui você pode fazer alguma configuração antes de rodar os testes
    sinon.stub(Model, 'create').resolves(MockCar);
    sinon.stub(Model, 'find').resolves([]);
    sinon.stub(Model, 'findOne').resolves(MockCar);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(MockCar);
    sinon.stub(Model, 'findByIdAndDelete').resolves(MockCar);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
     
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
      
      it('Em caso de sucesso', async () => {
        req.body = DTOMock;
        await carContrtroller.postCar(req, res);
        expect(res.status(201)).to.be.true;
        expect(res.json(MockCar)).to.be.true;
      });
  
      it('Em caso de erro', async () => {
        try {
          await carContrtroller.postCar(req, res);
        } catch (error) {
          expect(error)
          
        }
      });
        
  });




});