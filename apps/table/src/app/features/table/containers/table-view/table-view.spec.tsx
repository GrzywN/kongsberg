import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { TableView } from './table-view';

describe('TableView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <TableView />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
