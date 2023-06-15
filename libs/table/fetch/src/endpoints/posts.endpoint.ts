const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostsEndpoint = (page: number, limit: number) => {
  return `${postsEndpoint}?_page=${page}&_limit=${limit}`;
};

export const getUserPostsEndpoint = (
  userId: string,
  page: number,
  limit: number
) => {
  return `https://jsonplaceholder.typicode.com/users/${userId}/posts?_page=${page}&_limit=${limit}`;
};
