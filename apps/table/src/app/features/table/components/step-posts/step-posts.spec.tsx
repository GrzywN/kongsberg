import { render } from '@testing-library/react';

import StepPosts from './step-posts';

describe('StepPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepPosts />);
    expect(baseElement).toBeTruthy();
  });
});
