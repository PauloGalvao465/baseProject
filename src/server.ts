import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from '../ormconfig';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  return app.listen(process.env.APP_PORT, () => console.log('Servidor is ON!'));
});
