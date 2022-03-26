import { model, Schema, Model, Document } from 'mongoose';

export interface ICategories extends Document {
  name: string,
  description: string
}
const CategoriesSchema: Schema = new Schema({
  name: { type: String, required: true, unique : true },
  description: { type: String, required: true},
}, { timestamps: true });

export const Category: Model<ICategories> = model('Category', CategoriesSchema);