import axios from 'axios';

import { usersEndpoint } from '../endpoints/users.endpoint';

export async function fetchOneUser(id: string): Promise<unknown> {
  const response = await axios.get(`${usersEndpoint}/${id}`);

  return response.data;
}

export async function fetchAllUsers(): Promise<unknown> {
  const response = await axios.get(usersEndpoint);

  return response.data;
}
