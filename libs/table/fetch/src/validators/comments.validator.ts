import { CommentSchema } from '../schemas';

export const parseAllComments = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => CommentSchema.parse(comment));
  }

  throw new Error('parseAllComments: Expected data to be an array');
};
