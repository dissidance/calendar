import { ParameterizedContext, Context } from 'koa';
import Router from 'koa-router';
import EventService from '../../services/events';
import { validate } from '../../middlewares';
import { createEventRequest, updateEventRequest } from './validators';
import { Event } from '../../../../shared/types/events';

export default class EventController {

  readonly service: EventService;

  constructor(productService: EventService) {
    this.service = productService;
  }

  createEvent = async (ctx: ParameterizedContext) => {
    const { body } = ctx.state;
    const event = await this.service.createEvent(body);
    ctx.body = event;
  };

  updateEvent = async (ctx: Context) => {
    const { body } = ctx.state;
    const event = await this.service.updateEvent(body);
    ctx.body = event;
  };

  getEventsList = async (ctx: Context) => {
    ctx.body = await this.service.getEventsList();
  };

  getEventById = async (ctx: Context) => {
    ctx.body = await this.service.getEventById(ctx.params);
  };

  get router(): Router {
    return new Router()
      .put(
        '/',
        validate<Event>(updateEventRequest),
        this.updateEvent
      )

      .get(
        '/',
        this.getEventsList
      )

      .get('/:id', this.getEventById)

      .post(
        '/',
        validate<Event>(createEventRequest),
        this.createEvent
      );
  }
}
