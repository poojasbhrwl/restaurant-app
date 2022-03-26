import { ICategories, Category } from '../models/categories'

export default class CategoryService {
  
  // function for list all categories
  public listCategory = async (request: Request): Promise<any> => {
    
    const response: any = {status: 200}
    try {
        var categoryData: ICategories[] = await Category.find()   // get all categories
        response.categoryData = categoryData
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response;  // return response to router
  }
  
  // function for create new categories
  public createCategory = async (request: Request): Promise<any> => {
    const response: any = {status: 200}
    try {
        const data: ICategories = new Category(request);  // create category object
        let categoryData = await data.save();  // save data
        response.categoryData = categoryData
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response;  // return created object or error
  }

}

