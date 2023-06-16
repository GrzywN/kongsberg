import {
  closeConnectionToCommentsServer,
  listenToCommentsServer,
} from '@kongsberg/shared/testing';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ReactQueryProvider } from '../../../../react-query';
import StepComments from './step-comments';

describe('StepComments', () => {
  beforeAll(listenToCommentsServer);

  afterAll(closeConnectionToCommentsServer);
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <MemoryRouter>
          <table>
            <StepComments />
          </table>
        </MemoryRouter>
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
