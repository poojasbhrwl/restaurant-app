import Joi from "joi"

class RestaurantValidation {
    public registerRestaurantValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            name: Joi.string().required().label('Name'),
            picture: Joi.string().optional().label('Picture'),
            address: Joi.string().required().label('Address'),
            city: Joi.string().required().label('City'),
            country: Joi.string().required().label('Country'),
            pin: Joi.number().optional().label('Pin'),
            opening: Joi.any().required().label('Opening hours')
        })
        return schema.validateAsync(body)
    }
    public listRestaurantValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            page: Joi.string().optional().label('Page'),
            limit: Joi.string().optional().label('Limit')
        })
        return schema.validateAsync(body)
    }
    public updateRestaurantValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            id: Joi.string().required().label('Id'),
            name: Joi.string().optional().label('Name'),
            picture: Joi.string().optional().allow('').label('Picture'),
            address: Joi.string().optional().label('Address'),
            city: Joi.string().optional().label('City'),
            country: Joi.string().optional().label('Country'),
            pin: Joi.number().optional().label('Pin'),
            opening: Joi.any().optional().label('Opening hours')
        })
        return schema.validateAsync(body)
    }
}
export const restaurantValidation = new RestaurantValidation()