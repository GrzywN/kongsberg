const commentsEndpoint = 'https://jsonplaceholder.typicode.com/comments';

export const getAllCommentsEndpoint = (page: number, limit: number) => {
  return `${commentsEndpoint}?_page=${page}&_limit=${limit}`;
};

export const getPostCommentsEndpoint = (
  postId: string,
  page: number,
  limit: number
) => {
  return `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_page=${page}&_limit=${limit}`;
};
