import axios, { AxiosResponse } from 'axios';

import {
  commentsEndpoint,
  getPostCommentsEndpoint,
} from '../endpoints/comments.endpoint';

export async function fetchAllComments(postId?: string): Promise<unknown> {
  let response: AxiosResponse;

  if (postId) {
    response = await axios.get(getPostCommentsEndpoint(postId));
  } else {
    response = await axios.get(commentsEndpoint);
  }

  return response.data;
}
