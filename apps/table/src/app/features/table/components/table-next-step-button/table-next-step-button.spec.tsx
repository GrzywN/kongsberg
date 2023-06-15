import { render } from '@testing-library/react';

import TableNextStepButton from './table-next-step-button';

describe('TableNextStepButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableNextStepButton />);
    expect(baseElement).toBeTruthy();
  });
});
