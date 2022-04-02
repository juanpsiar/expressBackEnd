const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errror.handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, server Express');
});

app.get('/newRoute', (req, res) => {
  res.send('Hello, newRoute');
});

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({ limit, offset });
//   } else {
//     res.send('There is not parameters');
//   }
// });
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler); //? this method kill the request because that is called after of logErrors

app.listen(port, () => {
  console.log('my port', port);
});
