import { render } from '@testing-library/react';

import RecruitmentTaskButton from './recruitment-task-button';

describe('RecruitmentTaskButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecruitmentTaskButton />);
    expect(baseElement).toBeTruthy();
  });
});
