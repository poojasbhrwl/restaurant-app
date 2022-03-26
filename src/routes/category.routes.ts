import { Router, Request, Response } from 'express';
import CategoryService from '../controllers/category'
const categoryRoutes = Router();
const service = new CategoryService();

// route for get all categories
categoryRoutes.get('/', (req: Request, res: Response) => {
    let request: any = {page: req.query.page, limit: req.query.limit}  // create object for request
    // call list category controller
    service.listCategory(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

// route for create new categories
categoryRoutes.post('/', (req: Request, res: Response) => {
    let request: any = req.body
    // call create category controller
    service.createCategory(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});
export default categoryRoutes
