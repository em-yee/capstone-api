import app from '../app';
import cartRouter from '../routes/cart';

app.use('/api/cart', cartRouter);

export default app;
