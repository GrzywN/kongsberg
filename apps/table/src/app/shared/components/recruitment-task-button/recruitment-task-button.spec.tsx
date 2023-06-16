import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RecruitmentTaskButton from './recruitment-task-button';

describe('RecruitmentTaskButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <RecruitmentTaskButton />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
