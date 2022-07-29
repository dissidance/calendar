import Koa from 'koa';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import { Server } from 'http';
import initDB from './db';
import { Config } from './config';
import Repositories from './modules/repositories';
import Services from './modules/services';
import Controllers from './contollers';
import { MongoClient, Db } from 'mongodb';

export default class AppServer {

  server: Server | null = null;

  client: MongoClient | null = null;

  pool: Db | null = null;

  async run(config: Config): Promise<void> {
    this.pool = await initDB(config);
    const repositories = new Repositories(this.pool);
    const services = new Services(repositories);
    const api = new Controllers(services);

    const app = new Koa();

    this.server = app
      .use(koaBody())
      .use(cors())
      .use(api.routes)
      .listen(config.PORT, () => console.info(`server listen on ${ config.PORT }`));
  }

  async stop(): Promise<void>{
    this.client?.close();
    this.server?.close();
    console.info('server closed');
  }
}
