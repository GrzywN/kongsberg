import {
  getAllCommentsEndpoint,
  getPostCommentsEndpoint,
} from '@kongsberg/table/fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { comments } from '../../data/comments.json';
import { getEndpointWithoutParams } from '../../utils/getEndpointWithoutParams';

const postCommentsEndpoint = getEndpointWithoutParams(
  getPostCommentsEndpoint('1', 1, 1)
);

const allCommentsEndpoint = getEndpointWithoutParams(
  getAllCommentsEndpoint(1, 1)
);

const server = setupServer(
  rest.get(postCommentsEndpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(comments));
  }),

  rest.get(allCommentsEndpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(comments));
  })
);

export const listenToCommentsServer = () => server.listen();

export const closeConnectionToCommentsServer = () => server.close();
