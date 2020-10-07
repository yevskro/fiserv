import express, { NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import ApiRouter from './routes/api';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json()); /* handle json body */
    /* setup up routes for v1 and v2 */
    this.app.use('/api', new ApiRouter().router);
    this.app.use(App.globalErrorHandler);
  }

  public listen(port: number): Server {
    return this.app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is listening on port:`, port);
    });
  }

  private static globalErrorHandler(
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) {
    /* express global error handler */
    /* delegate to default error handler when error in the 
    middle of writing a response */
    if (res.headersSent) return next(err);
    return res.status(500).send(err.message);
  }
}

export default App;
