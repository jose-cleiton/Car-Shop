import { ICarDTO } from "../../DTO/ICarDTO";
import { ICar } from "../../interfaces/ICar";

export const validCar = {
  model: 'Fiat Uno',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const updatedCar = {
  model: 'Corsa',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const coverageCar = {
  model: 'Topic',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noModelCar = {
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noYearCar = {
  model: 'Uno da Escada',
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noColorCar = {
  model: 'Uno da Escada',
  year: 1963,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noBuyValueCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  seatsQty: 2,
  doorsQty: 2
}

export const noSeatsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  doorsQty: 2
}

export const noDoorsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
}

export const carSeatsLtTwo = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 1,
  doorsQty: 2
}

export const carDoorsLtTwo = {
  model: 'Uno da Escada',
  year: 1934,
  color: 'black',
  buyValue: 2345,
  seatsQty: 4,
  doorsQty: 5
}

export const DTOMock: ICarDTO = {
  model: "Fusca da Escada",
  year: 1975,
  color: "Amarelo",
  buyValue: 3532440,
  seatsQty: 3,
  doorsQty: 3
}

export const ICarWrongDTOMock = {
  model: 2,
  year: 1963,
  color: "Preto",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
export const MockCar:ICar & {_id:string} = {
  model: 'Topic',
  year: 1954,
  color: 'Blue',
  buyValue: 1234,
  seatsQty: 2,
  doorsQty: 3,
  _id: '60f9b9f9b9f9b9f9b9f9b9f9'
};