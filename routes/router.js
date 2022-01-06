import { Router } from 'express';

import cartRouter from './cart.js';
import citiesRouter from './cities.js';
import itemsRouter from './items.js';
import pricesRouter from './prices.js';

const routes = Router();

routes.get('/', async function(req, res) {
  res.send(`
    <h1>Reached api</h1>
    <br />
    <a href="/cities">Cities</a>
`);
});

routes.use('/cart', cartRouter);
routes.use('/cities', citiesRouter);
routes.use('/items', itemsRouter);
routes.use('/prices', pricesRouter);

export default routes;
