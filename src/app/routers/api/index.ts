import express from 'express';
/* sub routes */
import Apiv1Router from './v1';
import Apiv2Router from './v2';

class ApiRouter {
  public router = express.Router();

  constructor() {
    this.router.use('/v1', new Apiv1Router().router);
    this.router.use('/v2', new Apiv2Router().router);
  }
}

export default ApiRouter;
