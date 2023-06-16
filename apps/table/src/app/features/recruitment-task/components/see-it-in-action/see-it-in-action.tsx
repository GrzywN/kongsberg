import { Button } from '@kongsberg/shared/ui';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../../../shared/utils/routes';

export function SeeItInAction() {
  const navigate = useNavigate();

  return (
    <Button color="light" onClick={() => navigate(routes.table.users.path)}>
      See it in action
    </Button>
  );
}

export default SeeItInAction;
