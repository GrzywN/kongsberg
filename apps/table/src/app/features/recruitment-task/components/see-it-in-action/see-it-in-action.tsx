import { Link } from 'react-router-dom';

import { routes } from '../../../../shared/utils/routes';

export function SeeItInAction() {
  return (
    <Link
      to={routes.table.users.path}
      className="no-underline cursor-pointer transition-colors bg-white hover:bg-neutral-100 text-primary-900 p-4 rounded-lg md:w-max"
    >
      See it in action
    </Link>
  );
}

export default SeeItInAction;
