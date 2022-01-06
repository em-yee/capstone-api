import app from '../app';
import citiesRouter from '../routes/cities';

app.use('/api/cities', citiesRouter);

export default app;
