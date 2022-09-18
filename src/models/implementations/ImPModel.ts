import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../../interfaces/IModel';

export default abstract class ImPModel<T> implements IModel<T> {
  constructor(private model: Model<T>) { }

  read = async (): Promise<T[]> => this.model.find();
  
  readOne = async (data: string): Promise<T | null> =>
    this.model.findOne({ dataValue: data });
  
  delete = async (data: string): Promise<T | null> =>
    this.model.findByIdAndDelete({ dataValue: data });

  public create = async (data: T): Promise<T> =>
    this.model.create({ ...data });

  public update = async (_id:string, obj:Partial<T>):Promise<T | null> =>    
    this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
}
