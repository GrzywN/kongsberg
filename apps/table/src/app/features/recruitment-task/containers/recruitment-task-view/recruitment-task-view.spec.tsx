import { render } from '@testing-library/react';

import RecruitmentTaskView from './recruitment-task-view';

describe('RecruitmentTaskView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecruitmentTaskView />);
    expect(baseElement).toBeTruthy();
  });
});
