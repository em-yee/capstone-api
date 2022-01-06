import app from './app.js';
import routes from './routes/router.js';

app.use('/', routes);

app.listen(3001, function() {
  console.log('Server started on http://localhost:3000/');
});
