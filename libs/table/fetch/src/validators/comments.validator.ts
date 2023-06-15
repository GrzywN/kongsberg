import { CommentSchema } from '../schemas';

export const parseComments = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => CommentSchema.parse(comment));
  }

  throw new Error('parseComments: Expected data to be an array');
};
