import axios, { AxiosResponse } from 'axios';

import {
  getAllCommentsEndpoint,
  getPostCommentsEndpoint,
} from '../endpoints/comments.endpoint';

export async function fetchComments(
  page: number,
  postId?: string
): Promise<unknown> {
  let response: AxiosResponse;

  if (postId) {
    response = await axios.get(getPostCommentsEndpoint(postId, page, 11));
  } else {
    response = await axios.get(getAllCommentsEndpoint(page, 11));
  }

  // await new Promise((resolve) => setTimeout(resolve, 500));
  return response.data;
}
