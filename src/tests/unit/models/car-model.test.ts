// template para criação dos testes de cobertura da camada de model


import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import { Model } from 'mongoose';
const { expect } = chai;
import {DTOMock, MockCar} from '../../mocks/CarsMock';
describe('Car', () => {

  const car = new Car();

  before(async () => {
    // aqui você pode fazer alguma configuração antes de rodar os testes
    sinon.stub(Model, 'create').resolves(MockCar);
    sinon.stub(Model, 'find').resolves([]);
    sinon.stub(Model, 'findOne').resolves(MockCar);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(MockCar);
    sinon.stub(Model, 'findByIdAndDelete').resolves(MockCar);
     
  });

  after(()=>{
    sinon.restore();
  })
describe('create', () => {

  it('Em caso de sucesso', async () => {
    const result = await car.create(DTOMock);
    expect(result).to.be.deep.equal(MockCar);    
  });
    
});

describe('read', () => {

  it('Em caso de sucesso', async () => {
    const result = await car.read();
    expect(result).to.be.deep.equal([]);    
  });
    
});


describe('readOne', () => {
  
    it('Em caso de sucesso', async () => {
      const result = await car.readOne('123');
      expect(result).to.be.deep.equal(MockCar);    
    });
      
});

describe('update', () => {
    
      it('Em caso de sucesso', async () => {
        const result = await car.update('123', DTOMock);
        expect(result).to.be.deep.equal(MockCar);    
      });
        
});


});// fim do describe Car