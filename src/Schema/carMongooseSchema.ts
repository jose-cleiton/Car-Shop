import { Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
}, { versionKey: false });

export default carMongooseSchema;