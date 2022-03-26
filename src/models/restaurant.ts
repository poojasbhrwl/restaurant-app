import { model, Schema, Model, Document } from 'mongoose';
import { Opening } from '../interfaces/interface'
export interface IRestaurantModel extends Document {
  name: string,
  picture: string,
  address: string,
  city: string,
  country: string,
  pin: string,
  opening: Opening[],
}
const RestaurantSchema: Schema = new Schema({
  name: { type: String, required: true, unique : true },
  picture: { type: String, required: false },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  pin: { type: String, required: true },
  opening: { type: Array, required: true }
}, { timestamps: true });

export const Restaurant: Model<IRestaurantModel> = model('Restaurant', RestaurantSchema);