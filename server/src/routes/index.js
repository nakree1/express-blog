import { Router } from 'express';
import auth from './auth';
// import fse from 'fs-extra';

export default Router().use('/auth', auth);

// async function attachRoutes() {
//   const path = __dirname;
//
//   console.log(fse.);
//
// }
//
//
// attachRoutes();
