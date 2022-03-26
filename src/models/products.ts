import { model, Schema, Model, Document } from 'mongoose';
export interface IProductModel extends Document {
    restaurantId: string
    name: string,
    picture: string,
    price: number,
    categoryId: string
}
const ProductSchema: Schema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
    name: { type: String, required: true },
    picture: { type: String, required: false },
    price: { type: Number, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Categories", required: true }
}, { timestamps: true });

export const Product: Model<IProductModel> = model('Product', ProductSchema);