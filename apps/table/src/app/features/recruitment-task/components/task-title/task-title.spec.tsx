import { render } from '@testing-library/react';

import TaskTitle from './task-title';

describe('TaskTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskTitle />);
    expect(baseElement).toBeTruthy();
  });
});
