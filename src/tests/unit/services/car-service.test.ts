// template para criação dos testes de cobertura da camada de model


import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/CarModel';
import ServiceCar from '../../../services/ServiceCar';
import { Model } from 'mongoose';
const { expect } = chai;
import {DTOMock, MockCar} from '../../mocks/CarsMock';
describe('Car Service', () => {

  const car = new Car();
  const carService = new ServiceCar(car);

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
    const result = await carService.saveNewCar(DTOMock);
    expect(result).to.be.eql(MockCar);  
  });

  it('Em caso de erro', async () => {
    try {
      await carService.saveNewCar({} as any);
    } catch (error) {
      expect(error)
      
    }
  });
    
});

describe('read', () => {

  it('Em caso de sucesso', async () => {
    const result = await carService.getCarsList();
    expect(result).to.be.eql([]);  
  });

  describe('readById', () => {  
    it('Em caso de sucesso', async () => {
      const result = await carService.getCarById('60f9b9f9b9f9b9f9b9f9b9f9');
      expect(result).to.be.deep.equal(MockCar);  
    });



    it('Em caso de erro', async () => {
      try {
        await carService.getCarById('60f9b9f9b9f9b9f9b9f9b9f9');
      } catch (error) {
        expect(error)
        
      }
    })
  });

  describe('findOne', () => {
    it('Em caso de sucesso', async () => {
      const result = await carService.getCarById('60f9b9f9b9f9b9f9b9f9b9f9');
      expect(result).to.be.deep.equal(MockCar);  
    });

    it('Em caso de erro', async () => {
      try {
        await carService.getCarById('AAA-0000');
      } catch (error) {
        expect(error)
        
      }
    })
  })

  describe('update', () => {
    it('Em caso de sucesso', async () => {
      const result = await carService.updateCar('60f9b9f9b9f9b9f9b9f9b9f9', DTOMock);
      expect(result).to.be.deep.equal(MockCar);  
    });

    it('Em caso de erro', async () => {
      try {
        await carService.updateCar('60f9b9f9b9f9b9f9b9f9b9f9', DTOMock);
      } catch (error) {
        expect(error)
        
      }
    })
  });


  describe('delete', () => {  
   

    it('Em caso de erro', async () => {
      try {
        await carService.deleteCar('60f9b9f9b9f9b9f9b9f9b9f9');
      } catch (error) {
        expect(error)
        
      }
    })
  });
  
    

    
});





});// fim do describe Car