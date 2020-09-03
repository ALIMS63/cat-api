import express from 'express';
import logger from 'morgan';
import notFoundMiddleware from './middlewares/notfound.js';
import errorMiddleware from './middlewares/error.js';

import mainRouter from './routes/mainRouter.js'


const app = express();

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRouter);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log('Connected', port + '----------------------------------------------------------------------------->');
});
