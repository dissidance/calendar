import { v4 as uuidv4 } from 'uuid';
import { Event } from '../../../shared/types/events';
import { IEventRepository } from "../domains/event";

export default class EventService {
  private repository: IEventRepository;

  constructor(repository: IEventRepository) {
    this.repository = repository;
  }

  async createEvent(
    data: Event
  ): Promise<Event | null> {
    const id = uuidv4();

    return this.repository.create({ id, ...data });
  }

  async updateEvent(
    data: Event
  ): Promise<Event | null> {

    return this.repository.updateById(data.id, data);
  }

  getEventById(params: { id: string }): Promise<Event> {
    return this.repository.findById(params.id);
  }

  getEventsList(): Promise<Event[]> {
    return this.repository.find();
  }

}
