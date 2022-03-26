import restaurantRoutes from './routes/restaurant.routes';
import productRoutes from './routes/product.routes';
import categoryRoutes from './routes/category.routes';
import { Router } from 'express';

const routes = Router();
// use restaurant routes with url /restaurant
routes.use('/restaurant',  restaurantRoutes);
// use product routes with url /product
routes.use('/product',  productRoutes);
// use category routes with url /category
routes.use('/category',  categoryRoutes);
  
export default routes