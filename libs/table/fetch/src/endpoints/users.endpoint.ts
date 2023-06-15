const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

export const getUsersPageEndpoint = (page: number, limit: number) =>
  `${usersEndpoint}?_page=${page}&_limit=${limit}`;
