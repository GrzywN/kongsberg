import { PostSchema } from '../schemas';

export const parsePosts = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => PostSchema.parse(comment));
  }

  throw new Error('parsePosts: Expected data to be an array');
};
