import express from "express";
import bodyParser from 'body-parser';
const app = express();
const port = 443;
const productsRouter = require('../routes/productRoutes');
import { handleError } from '../helpers/handleError';


var options = {
  inflate: true,
  limit: '10000kb',
  type: 'application/octet-stream'
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.raw(options));
app.use('/api/product', productsRouter);

app.get('/', (req, res) => {
  console.log('req in index', req)
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("INFO: App listening on " + port);
})

app.use((err: any, req: any, res: any, next: any) => { handleError(err, res, next) })

module.exports = app;
