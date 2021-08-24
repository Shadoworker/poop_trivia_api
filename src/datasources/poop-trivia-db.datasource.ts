import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'poop_trivia_db',
  connector: 'mongodb',
  url: 'mongodb://utdpnfjkgavulcooqufe:GJXYAfaeBz9Mh6lkK1Mj@bezhvn0eyrrurzh-mongodb.services.clever-cloud.com:27017/bezhvn0eyrrurzh',
  host: 'bezhvn0eyrrurzh-mongodb.services.clever-cloud.com',
  port: 27017,
  user: 'utdpnfjkgavulcooqufe',
  password: 'GJXYAfaeBz9Mh6lkK1Mj',
  database: 'bezhvn0eyrrurzh',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PoopTriviaDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'poop_trivia_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.poop_trivia_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
