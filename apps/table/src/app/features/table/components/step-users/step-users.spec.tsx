import { render } from '@testing-library/react';

import StepUsers from './step-users';

describe('StepUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepUsers />);
    expect(baseElement).toBeTruthy();
  });
});
