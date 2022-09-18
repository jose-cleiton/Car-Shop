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
    req.body = DTOMock
     
  });

  after(()=>{
    sinon.restore();
  })

  describe('create', () => {
      
   it('should create a new car', async () => {
    
      await carContrtroller.postCar(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;

      
    })

    it('should read ', async () => {
      req.params = { id: "632383aaea59c2b5dc96346b" }
      await carContrtroller.getCars(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    })

    it('should read one ', async () => {
      await carContrtroller.getCarById(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
        
  });




});