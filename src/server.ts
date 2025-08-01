import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

import app from './app';
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(con => {
    console.log('Db connection successful');
  });

const port = parseInt(process.env.PORT || '3000', 10);
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`App running in port ${process.env.PORT || port}...`);
});
