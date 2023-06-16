import { render } from '@testing-library/react';

import Instruction from './instruction';

describe('Instruction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Instruction />);
    expect(baseElement).toBeTruthy();
  });
});
