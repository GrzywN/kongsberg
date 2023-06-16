import { Button } from '@kongsberg/shared/ui';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../utils/routes';

export function RecruitmentTaskButton() {
  const navigate = useNavigate();

  return (
    <nav className="fixed left-8 top-8">
      <Button color="light" onClick={() => navigate(routes.home.path)}>
        ← Recruitment task
      </Button>
    </nav>
  );
}

export default RecruitmentTaskButton;
