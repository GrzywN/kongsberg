import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Table from './table';

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
