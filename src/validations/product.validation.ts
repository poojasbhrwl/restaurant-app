import Joi from "joi"

class ProductValidation {
    public createProductValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            name: Joi.string().required().label('Name'),
            picture: Joi.string().optional().label('Picture'),
            restaurantId: Joi.string().required().label('Restaurant'),
            categoryId: Joi.string().required().label('Category'),
            price: Joi.number().optional().label('Price')
        })
        return schema.validateAsync(body)
    }
    public listProductValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            restaurantId: Joi.string().optional().label('Restaurant')
        })
        return schema.validateAsync(body)
    }
    public updateProductValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            id: Joi.string().required().label('Id'),
            name: Joi.string().optional().label('Name'),
            picture: Joi.string().optional().label('Picture'),
            restaurantId: Joi.string().optional().label('Restaurant'),
            categoryId: Joi.string().optional().label('Category'),
            price: Joi.number().optional().label('Price')
        })
        return schema.validateAsync(body)
    }
    public deleteProductValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            id: Joi.string().optional().label('ProductId')
        })
        return schema.validateAsync(body)
    }
}
export const ProductValidations = new ProductValidation()