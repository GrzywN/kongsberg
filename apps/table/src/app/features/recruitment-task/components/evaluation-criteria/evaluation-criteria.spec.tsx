import { render } from '@testing-library/react';

import EvaluationCriteria from './evaluation-criteria';

describe('EvaluationCriteria', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EvaluationCriteria />);
    expect(baseElement).toBeTruthy();
  });
});
