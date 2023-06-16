import { render } from '@testing-library/react';

import TaskRequirements from './task-requirements';

describe('TaskRequirements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskRequirements />);
    expect(baseElement).toBeTruthy();
  });
});
