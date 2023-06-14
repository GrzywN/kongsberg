import { PostSchema } from '../schemas';

export const parseAllPosts = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => PostSchema.parse(comment));
  }

  throw new Error('parseAllPosts: Expected data to be an array');
};
