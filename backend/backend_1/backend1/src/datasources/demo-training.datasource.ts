import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Demo_training',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123456',
  database: 'Demo_training'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DemoTrainingDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Demo_training';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Demo_training', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
