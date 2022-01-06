import app from '../app';
import pricesRouter from '../routes/prices';

app.use('/api/prices', pricesRouter);

export default app;
