import express from 'express';
import usersRouter from './routes/users';
import reportsRouter from './routes/reports';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.use('/api/v1/auth', usersRouter);

// Reports
app.use('/api/v1/reports', reportsRouter);

export default app;
