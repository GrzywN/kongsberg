import {
  getAllPostsEndpoint,
  getUserPostsEndpoint,
} from '@kongsberg/table/fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { posts } from '../../data/posts.json';
import { getEndpointWithoutParams } from '../../utils/getEndpointWithoutParams';

const userPostsEndpoint = getEndpointWithoutParams(
  getUserPostsEndpoint('1', 1, 1)
);

const allPostsEndpoint = getEndpointWithoutParams(getAllPostsEndpoint(1, 1));

const server = setupServer(
  rest.get(userPostsEndpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),

  rest.get(allPostsEndpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  })
);

export const listenToPostsServer = () => server.listen();

export const closeConnectionToPostsServer = () => server.close();
