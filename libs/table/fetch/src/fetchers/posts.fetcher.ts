import axios, { AxiosResponse } from 'axios';

import {
  getUserPostsEndpoint,
  postsEndpoint,
} from '../endpoints/posts.endpoint';

export async function fetchAllPosts(userId?: string): Promise<unknown> {
  let response: AxiosResponse;

  if (userId) {
    response = await axios.get(getUserPostsEndpoint(userId));
  } else {
    response = await axios.get(postsEndpoint);
  }

  return response.data;
}
