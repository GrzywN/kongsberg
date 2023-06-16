import { render } from '@testing-library/react';

import TableNextStepButton from './table-next-step-button';

describe('TableNextStepButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableNextStepButton text="Button text" />);
    expect(baseElement).toBeTruthy();
  });
});
