import { Db } from 'mongodb';
import { IEventRepository } from '../domains/event';
import EventRepository from '../repositories/EventRepository';

export default class Repositories {
  readonly eventRepository: IEventRepository;

  constructor(pool: Db) {
    this.eventRepository = new EventRepository(pool);
  }
}
