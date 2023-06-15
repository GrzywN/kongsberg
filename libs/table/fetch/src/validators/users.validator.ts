import { UserSchema } from '../schemas';

export const parseUser = (data: unknown) => {
  return UserSchema.parse(data);
};

export const parseUsers = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => parseUser(comment));
  }

  throw new Error('parseUsers: Expected data to be an array');
};
