import { render } from '@testing-library/react';

import UserInfoField from './user-info-field';

describe('UserInfoField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserInfoField />);
    expect(baseElement).toBeTruthy();
  });
});
