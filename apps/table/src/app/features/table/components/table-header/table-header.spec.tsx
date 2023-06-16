import { render } from '@testing-library/react';

import TableHeader from './table-header';

describe('TableHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <table>
        <TableHeader>
          <TableHeader.Column text="Column 1" isLoading={true} />
          <TableHeader.Column text="Column 2" isLoading={false} />
        </TableHeader>
      </table>
    );
    expect(baseElement).toBeTruthy();
  });
});
