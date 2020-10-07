import express from 'express';
import v1Controller from '../../controllers/api/v1';
/* sub route for handling api/v1 */
class Apiv1Router {
  public router = express.Router();

  constructor() {
    this.router.post('/', v1Controller.parseBody);
  }
}

export default Apiv1Router;
