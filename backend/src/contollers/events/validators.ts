import { ValidationResult } from 'joi';
import { Context } from 'koa';
import { Event } from '../../../../shared/types/events';
import { validateCreateEvent, validateUpdateEvent } from '../../domains/event';

export type CreateEventRequest = {
  body: Event
};

export function createEventRequest(ctx: Context): ValidationResult<Event>{
  return validateCreateEvent(ctx.request.body);
}

export function updateEventRequest(ctx: Context): ValidationResult<Event>{
  return validateUpdateEvent(ctx.request.body);
}
