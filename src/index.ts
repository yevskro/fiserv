import App from './app';

/* start listening for connections */
new App().listen(Number(process.env.PORT));
