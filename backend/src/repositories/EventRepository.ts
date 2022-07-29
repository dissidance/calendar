import { Collection, Db } from 'mongodb';
import { Event } from '../../../shared/types/events';
import { ErrorMessage } from '../constants/errorMessage';
import { IEventRepository } from '../domains/event';
import NotFoundError from '../errors/NotFoundError';

export default class EventRepository implements IEventRepository {
  public collection: Collection<Event>;

  constructor(pool: Db) {
    this.collection = pool.collection<Event>('events');
  }

  async findById(id: string): Promise<Event> {
    const spot = await this.collection.findOne({ id }, { projection: { _id: 0 } });

    if (!spot) throw new NotFoundError(ErrorMessage.eventNotFound);

    return spot;
  }

  async find(): Promise<Event[]> {
    const spots = await this.collection.find({}).toArray();

    return spots;
  }

  async create(data: Event): Promise<Event | null> {
    const createdSpot = await this.collection.insertOne(data);
    return this.collection.findOne({ _id: createdSpot.insertedId }, { projection: { _id: 0 } });
  }

  async updateById(id: Event['id'], data: Partial<Event>): Promise<Event | null> {
    const isSpotExist = await this.collection.findOne({ id });
    if (!isSpotExist) throw new NotFoundError(ErrorMessage.eventNotFound);
    await this.collection.updateOne({ id }, { $set: { ...data } });
    return this.collection.findOne({ id }, { projection: { _id: 0 } });
  }
}
