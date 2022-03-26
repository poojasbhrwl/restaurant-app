import { IRestaurantModel, Restaurant } from '../models/restaurant'
import { restaurantValidation } from '../validations/restaurant.validation'

export default class RestaurantService {
  
  // create function for register new restaurant
  public registerRestaurant = async (request: Request): Promise<any> => {
    
    const response: any = {status: 200}
    try {
      const validate = await restaurantValidation.registerRestaurantValidation(request)  // validate request params
      let alreadyExist = await Restaurant.findOne({name: validate.name})  // check already exists with same name
      if(alreadyExist && alreadyExist._id) {
        response.status = 500
        response.error = {message: "Data Already exists"}  // return response if already exists
      } else {
        const data: IRestaurantModel = new Restaurant(validate);  // create object for restaurant
        let restdata = await data.save();  // save the data
        response.restdata = restdata
      }
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response;  // return response
  }

  // function for list all restaurant with pagination
  public listRestaurant = async (request: Request): Promise<any> => {
    
    const response: any = {status: 200}
    try {
      const validate = await restaurantValidation.listRestaurantValidation(request)  // validate request params
      if(validate.limit && validate.page) {
        let limit: any = validate.limit
        let offset: number = limit * (validate.page - 1)
        var restdata: IRestaurantModel[] = await Restaurant.find().skip(offset).limit(limit)  // get all restaurant list with pagination
      } else {
        restdata = await Restaurant.find()  // get all restaurant list
      }
        response.restdata = restdata
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response;  // return response
  }

  // function for update details of restaurant
  public updateRestaurant = async (request: Request): Promise<any> => {
    
    const response: any = {status: 200}
    try {
      const validate = await restaurantValidation.updateRestaurantValidation(request)  // validate request params
      await Restaurant.findOneAndUpdate({_id: validate.id},validate) // find and update
      let restdata: IRestaurantModel | null = await Restaurant.findById(validate.id)  // find update restaurant
      response.restdata = restdata
    } catch (e) {
      console.log(e)
      response.status = 500
      response.error = e
    }
    return response;  // return response
  }
}

