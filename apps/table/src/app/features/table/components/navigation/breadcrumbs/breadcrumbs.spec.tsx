import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Breadcrumbs />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
