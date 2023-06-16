import { render } from '@testing-library/react';

import TableHeaderColumn from './table-header-column';

describe('TableHeaderColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableHeaderColumn />);
    expect(baseElement).toBeTruthy();
  });
});
