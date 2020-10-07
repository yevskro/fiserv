import express from 'express';
import v2Controller from '../../controllers/api/v2';
/* sub route for handling api/v2 */
class Apiv2Router {
  public router = express.Router();

  constructor() {
    this.router.post('/', v2Controller.parseBody);
  }
}

export default Apiv2Router;
