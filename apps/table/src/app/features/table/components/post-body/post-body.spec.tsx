import { render } from '@testing-library/react';

import PostBody from './post-body';

describe('PostBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PostBody
        post={{
          userId: 2,
          id: 11,
          title: 'et ea vero quia laudantium autem',
          body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
