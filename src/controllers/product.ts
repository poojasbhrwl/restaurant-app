import { IProductModel, Product } from '../models/products'
import { ProductValidations } from '../validations/product.validation'

export default class ProductService {

  // function for create new product
  public createProduct = async (request: Request): Promise<any> => {
    const response: any = { status: 200 }
    try {
      const validate = await ProductValidations.createProductValidation(request)  // validate the request params
      let alreadyExist = await Product.findOne({ name: validate.name, restaurantId: validate.restaurantId })   // check already exists with same name in particular restaurant
      if (alreadyExist && alreadyExist._id) {
        response.status = 500
        response.error = { message: "Data Already exists" }   // if already exists retur response
      } else {
        const data: IProductModel = new Product(validate);   // create product object
        let productData = await data.save();  // save data
        response.productData = productData
      }
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response; // return response
  }

  // function for list all products under particular restaurant 
  public listProduct = async (request: Request): Promise<any> => {

    const response: any = { status: 200 }
    try {
      const validate = await ProductValidations.listProductValidation(request)   // validate reuest
      if (validate.restaurantId) {
        var restdata: any = await Product.find({ restaurantId: validate.restaurantId }).populate({
          path: 'categoryId',
          model: 'Category',
          select:
            '_id name description'
        }).exec() // find data in particular restaurant
      } else {
        restdata = await Product.find() // find all product
      }
      response.restdata = restdata
    } catch (e) {
      response.status = 500
      console.log(e)
      response.error = e
    }
    return response;  // return response
  }

  // function for update product details
  public updateProduct = async (request: Request): Promise<any> => {

    const response: any = { status: 200 }
    try {
      const validate = await ProductValidations.updateProductValidation(request)  // validate request
      await Product.findOneAndUpdate({ _id: validate.id }, validate)  // find and update product
      let restdata: IProductModel | null = await Product.findById(validate.id)  // get updated product
      response.restdata = restdata
    } catch (e) {
      response.status = 500
      response.error = { message: 'Data not found' }
    }
    return response; // return response
  }

  //  function for delete particular product
  public deleteProduct = async (request: Request): Promise<any> => {

    const response: any = { status: 200 }
    try {
      const validate = await ProductValidations.deleteProductValidation(request)  // validate request
      let restdata = await Product.findOneAndDelete({ _id: validate.id })  // find and delete else return null
      response.restdata = restdata
    } catch (e) {
      response.status = 500
      response.error = { message: 'Data not found' }
    }
    return response; // return data
  }
}

