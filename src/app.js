import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.use('/api/v1', (req, res) => {
  return res.status(200).json({
    message: 'Welcome',
  });
});

export default app;
