import { getUsersPageEndpoint } from '@kongsberg/table/fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { users } from '../../data/users.json';
import { getEndpointWithoutParams } from '../../utils/getEndpointWithoutParams';

const usersPageEndpoint = getEndpointWithoutParams(getUsersPageEndpoint(1, 1));

const server = setupServer(
  rest.get(usersPageEndpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  })
);

export const listenToUsersServer = () => server.listen();

export const closeConnectionToUsersServer = () => server.close();
