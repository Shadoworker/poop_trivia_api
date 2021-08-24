import {Entity, model, property, hasMany} from '@loopback/repository';
import {Badge} from './badge.model';

@model({settings: {strict: false}})
export class Player extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  age?: number;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'number',
    default: 0,
  })
  best_score?: number;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  active?: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  avatar?: number;

  @property({
    type: 'number',
    default: 0,
  })
  level?: number;

  @hasMany(() => Badge)
  badges: Badge[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Player>) {
    super(data);
  }
}

export interface PlayerRelations {
  // describe navigational properties here
}

export type PlayerWithRelations = Player & PlayerRelations;
