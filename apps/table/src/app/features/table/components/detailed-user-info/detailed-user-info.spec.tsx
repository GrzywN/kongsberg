import { render } from '@testing-library/react';

import DetailedUserInfo from './detailed-user-info';

describe('DetailedUserInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailedUserInfo />);
    expect(baseElement).toBeTruthy();
  });
});
