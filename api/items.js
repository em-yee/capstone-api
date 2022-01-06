import app from '../app';
import itemsRouter from '../routes/items';

app.use('/api/items', itemsRouter);

export default app;
