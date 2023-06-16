import {
  closeConnectionToUsersServer,
  listenToUsersServer,
} from '@kongsberg/shared/testing';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ReactQueryProvider } from '../../../../react-query';
import StepUsers from './step-users';

describe('StepUsers', () => {
  beforeAll(listenToUsersServer);

  afterAll(closeConnectionToUsersServer);

  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <MemoryRouter>
          <table>
            <StepUsers />
          </table>
        </MemoryRouter>
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
