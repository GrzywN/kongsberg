export const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export const getUserPostsEndpoint = (userId: string) => {
  return `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
};
