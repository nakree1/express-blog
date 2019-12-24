import { Router } from 'express';
import auth from './auth';
import account from './account';


export default Router()
  .use('/auth', auth)
  .use('/account', account);

// async function attachRoutes() {
//   const path = __dirname;
//
//   console.log(fse.);
//
// }
//
//
// attachRoutes();
