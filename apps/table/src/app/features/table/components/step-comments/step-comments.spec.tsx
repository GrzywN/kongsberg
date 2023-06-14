import { render } from '@testing-library/react';

import StepComments from './step-comments';

describe('StepComments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepComments />);
    expect(baseElement).toBeTruthy();
  });
});
