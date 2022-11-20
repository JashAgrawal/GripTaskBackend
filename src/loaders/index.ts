import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
// import jobsLoader from './jobs';
import Logger from './logger';
import customers from '../models/customers/customers';
//We have to import at least all the events once so they can be triggered
import './events';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  const customersModel = {
    name: 'customersModel',
    // Notice the require syntax and the '.default'
    model: require('../models/customers/customers').default,
  };
  const transfersModel = {
    name: 'transfersModel',
    // Notice the require syntax and the '.default'
    model: require('../models/customers/transfers').default,
  };
  //content will be added here ................

  // It returns the agenda instance because it's needed in the subsequent loaders
  const res = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      customersModel,
      transfersModel,
      //models will be listed here ................
      // salaryModel,
      // whateverModel
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');

  // await jobsLoader({ agenda });
  Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
