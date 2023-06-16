import { render } from '@testing-library/react';

import TableHeaderColumn from './table-header-column';

describe('TableHeaderColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <table>
        <thead>
          <tr>
            <TableHeaderColumn text="Column 1" isLoading={true} />
          </tr>
          <tr>
            <TableHeaderColumn text="Column 2" isLoading={false} />
          </tr>
        </thead>
      </table>
    );
    expect(baseElement).toBeTruthy();
  });
});
