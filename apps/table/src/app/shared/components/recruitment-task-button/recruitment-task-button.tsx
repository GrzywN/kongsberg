import { Link } from 'react-router-dom';

import { routes } from '../../utils/routes';

export function RecruitmentTaskButton() {
  return (
      <nav className="fixed left-8 top-8">
        <Link className="font-bold uppercase no-underline cursor-pointer transition-colors bg-white hover:bg-neutral-100 text-primary-900 p-4 rounded-lg md:w-max" to={routes.home.path}>← Recruitment task</Link>
      </nav>
  );
}

export default RecruitmentTaskButton;
