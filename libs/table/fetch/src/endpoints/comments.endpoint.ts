export const commentsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export const getPostCommentsEndpoint = (postId: string) => {
  return `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
};
