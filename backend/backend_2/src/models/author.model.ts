import { Entity, model, property } from '@loopback/repository';

@model()
export class Author extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  author_id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
    jsonSchema: {
      format: 'email',
      maxLength: 100,
    }
  })
  email?: string;

  @property({
    type: 'string',
  })
  avatar?: string;

  @property({
    type: 'date',
  })
  created_At?: string;

  @property({
    type: 'date',
  })
  updated_At?: string;


  constructor(data?: Partial<Author>) {
    super(data);
  }
}

export interface AuthorRelations {
  // describe navigational properties here
}

export type AuthorWithRelations = Author & AuthorRelations;
