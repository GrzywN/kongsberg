import { render } from '@testing-library/react';

import MoreInfoComment from './more-info-comment';

describe('MoreInfoComment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MoreInfoComment
        comment={{
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
