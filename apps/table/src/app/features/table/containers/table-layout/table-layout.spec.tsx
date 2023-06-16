import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TableLayout } from './table-layout';

describe('TableLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <TableLayout />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
