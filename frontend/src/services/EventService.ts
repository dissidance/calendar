import { Event } from '../../../shared/types/events';
import api from '../api';

export default class EventService {
  public static getEventsList = (): Promise<Event[]> =>
    api.get('/events');

  public static createEvent = (spot: Event): Promise<Event> =>
    api.post('/events', spot);

  public static updateEvent = (spot: Event): Promise<Event> =>
    api.put('/events', spot);

  public static deleteEvent = (id: Event['id']): Promise<Event> =>
    api.del(`/events/${id}`);
}
