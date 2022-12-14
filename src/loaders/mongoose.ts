import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config/index';

export default async (): Promise<any> => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log('connected');
  return connection.connection.db;
};
