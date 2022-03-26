import { Router, Request, Response } from 'express';
import RestaurantService from '../controllers/restaurant'    // call reataurant controller
import { upload } from '../middleware/upload.middleware';    // call upload function for image through multer
const restaurantRoutes = Router();
const service = new RestaurantService();            // create object for restaurant controller
interface MulterRequest extends Request {
    file: any;
  }
// route for create restaurant
restaurantRoutes.post('/', upload.single('image'), (req: Request, res: Response) => {
    const image  = (req as MulterRequest).file;
    let request: any = req.body
    request.picture = image ? image.filename: undefined   // add image param to req
    request.opening = typeof(request.opening) == 'string'? JSON.parse(request.opening) : request.opening   // validate opening param
    // call register function
    service.registerRestaurant(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

// route for get all list restaurant
restaurantRoutes.get('/', (req: Request, res: Response) => {
    let request: any = {page: req.query.page, limit: req.query.limit}
    // call list function
    service.listRestaurant(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

// route for update restaurant details by id
restaurantRoutes.put('/:id', upload.single('image'), (req: Request, res: Response) => {
    const image  = (req as MulterRequest).file;
    let request: any = req.body
    request.id = req.params.id
    request.picture = image ? image.filename: undefined  // add image param to req
    request.opening = typeof(request.opening) == 'string'? JSON.parse(request.opening) : request.opening   // validate opening param
    // call update function
    service.updateRestaurant(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

export default restaurantRoutes
