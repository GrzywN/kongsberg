import axios, { AxiosResponse } from 'axios';

import {
  getAllPostsEndpoint,
  getUserPostsEndpoint,
} from '../endpoints/posts.endpoint';

export async function fetchPosts(
  page: number,
  userId?: string
): Promise<unknown> {
  let response: AxiosResponse;

  if (userId) {
    response = await axios.get(getUserPostsEndpoint(userId, page, 7));
  } else {
    response = await axios.get(getAllPostsEndpoint(page, 7));
  }

  // await new Promise((resolve) => setTimeout(resolve, 500));
  return response.data;
}
