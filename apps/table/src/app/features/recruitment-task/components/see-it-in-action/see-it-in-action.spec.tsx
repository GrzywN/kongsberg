import { render } from '@testing-library/react';

import SeeItInAction from './see-it-in-action';

describe('SeeItInAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeeItInAction />);
    expect(baseElement).toBeTruthy();
  });
});
