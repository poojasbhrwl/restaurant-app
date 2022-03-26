import { Router, Request, Response } from 'express';
import ProductService from '../controllers/product' // call product controller
import { upload } from '../middleware/upload.middleware';    // call upload function for image through multer
const productRoutes = Router();
const service = new ProductService();   // create object for product controller

export interface MulterRequest extends Request {
    file: any;
  }


// route for create new product with image upload middleware
productRoutes.post('/', upload.single('image'), (req: Request, res: Response) => {
    const image  = (req as MulterRequest).file;
    let request: any = req.body
    request.picture = image ? image.filename: undefined  // bind image with request
    // call create function of controller
    service.createProduct(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

// route for get all products under a particular restaurant
productRoutes.get('/:restaurantId', (req: Request, res: Response) => {
    let request: any = { restaurantId : req.params.restaurantId}
    // call list products function of controller
    service.listProduct(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});


// route for update particular product
productRoutes.put('/:id', upload.single('image'), (req: Request, res: Response) => {
    const image  = (req as MulterRequest).file;
    let request: any = req.body
    request.id = req.params.id
    request.picture = image ? image.filename: undefined  // bind image with request
    // call update product function of controller
    service.updateProduct(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});


// route for delete paticular product
productRoutes.delete('/:id', (req: Request, res: Response) => {
    let request: any = {id : req.params.id}
    // call delete product function of controller
    service.deleteProduct(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});
export default productRoutes
