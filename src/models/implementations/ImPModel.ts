import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../../interfaces/IModel';

export default abstract class ImPModel<T> implements IModel<T> {
  constructor(private model: Model<T>) { }

  public read = async (): Promise<Array<T>> => this.model.find();
  
  public readOne = async (data: string): Promise<T | null> =>
    this.model.findOne({ data });
  
  public delete = async (data: string): Promise<T | null> => {
    const resp = await this.model.findByIdAndDelete({ data });

    return resp;
  };

  public create = async (data: T): Promise<T> =>
    this.model.create({ ...data });

  public update = async (_id:string, obj:Partial<T>):Promise<T | null> =>    
    this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
}
