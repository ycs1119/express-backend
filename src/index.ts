import Express from "express";
const app = Express();
const port = 443;
const productsRouter = require('../routes/productRoutes');
import { handleError } from '../helpers/handleError';

app.disable('x-powered-by');
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use('/api/product', productsRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("INFO: App listening on " + port);
})

app.use((err: any, req: any, res: any, next: any) => { handleError(err, res, next) })

module.exports = app;
