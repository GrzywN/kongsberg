import {
  closeConnectionToCommentsServer,
  closeConnectionToPostsServer,
  closeConnectionToUsersServer,
  listenToCommentsServer,
  listenToPostsServer,
  listenToUsersServer,
} from '@kongsberg/shared/testing';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeAll(() => {
    listenToUsersServer();
    listenToPostsServer();
    listenToCommentsServer();
  });

  afterAll(() => {
    closeConnectionToUsersServer();
    closeConnectionToPostsServer();
    closeConnectionToCommentsServer();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
