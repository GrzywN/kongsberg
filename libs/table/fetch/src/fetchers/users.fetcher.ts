import axios from 'axios';

import { getUsersPageEndpoint } from '../endpoints/users.endpoint';

export async function fetchUsers(page: number): Promise<unknown> {
  const response = await axios.get(getUsersPageEndpoint(page, 6));

  // await new Promise((resolve) => setTimeout(resolve, 500));
  return response.data;
}
