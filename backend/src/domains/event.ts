import { Collection } from 'mongodb';
import Joi, { ValidationResult } from 'joi';
import { Event } from '../../../shared/types/events';

export interface IEventRepository {
  collection: Collection<Event>
  create(data: Event): Promise<Event | null>
  find(): Promise<Event[]>
  updateById(id: Event['id'], data: Partial<Event>): Promise<Event | null>
  findById(id: string): Promise<Event>
}

const createEventValidation = () => Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  start: Joi.date().required(),
  end: Joi.date().required(),
  address: Joi.string().optional(),
  site: Joi.string().optional()
});

const updateEventValidation = () => Joi.object({
  id: Joi.string().required(),
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  start: Joi.date().optional(),
  end: Joi.date().optional(),
  address: Joi.string().optional(),
  site: Joi.string().optional()
});

export function validateCreateEvent(x: unknown): ValidationResult<Event> {
  return createEventValidation().validate(x, { stripUnknown: true });
}

export function validateUpdateEvent(x: unknown): ValidationResult<Event> {
  return updateEventValidation().validate(x, { stripUnknown: true });
}