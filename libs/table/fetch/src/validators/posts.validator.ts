import { PostSchema } from '../schemas/posts.schema';

export const parsePosts = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => PostSchema.parse(comment));
  }

  return PostSchema.parse(data);
};
