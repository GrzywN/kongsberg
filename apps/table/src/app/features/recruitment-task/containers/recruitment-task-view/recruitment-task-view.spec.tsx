import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RecruitmentTaskView from './recruitment-task-view';

describe('RecruitmentTaskView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <RecruitmentTaskView />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
