import { CommentSchema } from '../schemas/comments.schema';

export const parseComments = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => CommentSchema.parse(comment));
  }

  return CommentSchema.parse(data);
};
