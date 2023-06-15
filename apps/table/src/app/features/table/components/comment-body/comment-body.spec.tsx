import { render } from '@testing-library/react';

import CommentBody from './comment-body';

describe('CommentBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommentBody />);
    expect(baseElement).toBeTruthy();
  });
});
