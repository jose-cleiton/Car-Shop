import express from 'express';
import 'express-async-errors';
import error from './middlewares/error';
import routerCar from './routes/car.router';

const app = express();

app.use(express.json());
app.use(routerCar);

app.use(error);

export default app;