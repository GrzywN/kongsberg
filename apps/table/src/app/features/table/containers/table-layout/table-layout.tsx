import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '../../components/navigation/breadcrumbs/breadcrumbs';

export function TableLayout() {
  return (
    <section className="mt-8 grid text-xs text-left text-neutral-700 font-semibold lg:text-sm">
      <Breadcrumbs />
      <div className="bg-white relative overflow-x-auto shadow-md rounded-md lg:rounded-lg h-[32rem]">
        <table className="w-full">
          <Outlet />
        </table>
      </div>
    </section>
  );
}

export default TableLayout;
