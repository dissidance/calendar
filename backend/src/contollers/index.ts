/* eslint-disable no-underscore-dangle */
import Router from 'koa-router';
import { errorHandler } from '../middlewares';
import Services from '../modules/services';
import EventController from './events/routes';

export default class Controllers {
  private eventController: EventController;

  constructor(services: Services) {
    this.eventController = new EventController(services.eventService);
  }

  get routes() {
    return new Router()
      .use(errorHandler)
      .get('/healthcheck', ctx => { ctx.body = 'OK! v.0.0.1'; })
      .use('/events', this.eventController.router.routes())
      .routes();
  }
}
