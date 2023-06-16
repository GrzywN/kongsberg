import {
  closeConnectionToPostsServer,
  listenToPostsServer,
} from '@kongsberg/shared/testing';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ReactQueryProvider } from '../../../../react-query';
import StepPosts from './step-posts';

describe('StepPosts', () => {
  beforeAll(listenToPostsServer);

  afterAll(closeConnectionToPostsServer);
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <MemoryRouter>
          <table>
            <StepPosts />
          </table>
        </MemoryRouter>
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
