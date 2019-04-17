
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users';
import reportsRouter from './routes/reports';
import organizationRouter from "./routes/organizations";


const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use("/api/v1/auth", usersRouter);
app.use("/api/v1/", organizationRouter);

// Reports
app.use('/api/v1/reports', reportsRouter);

export default app;
