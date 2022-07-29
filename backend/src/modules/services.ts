import Repositories from './repositories';
import EventService from '../services/events';

export default class Services {
  readonly eventService: EventService;

  constructor(repositories: Repositories) {
    this.eventService = new EventService(repositories.eventRepository);
  }
}
