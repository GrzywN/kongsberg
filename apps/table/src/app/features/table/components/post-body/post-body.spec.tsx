import { render } from '@testing-library/react';

import PostBody from './post-body';

describe('PostBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostBody />);
    expect(baseElement).toBeTruthy();
  });
});
