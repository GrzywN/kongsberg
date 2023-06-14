import { UserSchema } from '../schemas';

export const parseOneUser = (data: unknown) => {
  return UserSchema.parse(data);
};

export const parseAllUsers = (data: unknown) => {
  if (Array.isArray(data)) {
    return data.map((comment) => UserSchema.parse(comment));
  }

  throw new Error('parseUsers: Expected data to be an array');
};
