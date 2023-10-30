import 'module-alias/register';
import '@bin/config';

import express from 'express';
import { RegisterRoutes } from './docs/routes';
import swaggerDoc from './docs/swagger.json';
 
// import * as swaggerJson from “./swagger.json”;
import swaggerUI from 'swagger-ui-express';
 
const { json, urlencoded } = express;
export const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
RegisterRoutes(app);


app.use(
    ["/openapi", "/docs", "/swagger"], 
    swaggerUI.serve, swaggerUI.setup(swaggerDoc));





const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);