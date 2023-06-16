import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SeeItInAction from './see-it-in-action';

describe('SeeItInAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <SeeItInAction />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
