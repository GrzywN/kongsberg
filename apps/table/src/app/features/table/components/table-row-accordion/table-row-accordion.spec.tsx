import { render } from '@testing-library/react';

import TableRowAccordion from './table-row-accordion';

describe('TableRowAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableRowAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
