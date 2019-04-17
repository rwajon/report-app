import express from "express";
import usersRouter from "./routes/users";
import organizationRouter from "./routes/organizations";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use("/api/v1/auth", usersRouter);
app.use("/api/v1/", organizationRouter);

export default app;
