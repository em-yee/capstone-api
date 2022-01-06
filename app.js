import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

dotenv.config();

const app = express();

app.options('*', cors());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// app.use(citiesRouter);
// app.use(itemsRouter);
// app.use(cartRouter);
// app.use(pricesRouter);

const allowedOrigins = ['https://capstone-api.vercel.app'];

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Operation not allowed'));
    }
  },
};

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   req.setTimeout(10000);
//   next();
// });

// const PORT = process.env.PORT | 3001;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

app.use(helmet());
app.use(cors(corsOptions));

export default app;
