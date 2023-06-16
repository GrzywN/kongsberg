import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

export function Table() {
  return (
    <section className="grid text-sm text-left text-neutral-700 font-semibold">
      <Breadcrumbs />
      <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg h-[37.125rem]">
        <table className="w-full">
          <Outlet />
        </table>
      </div>
    </section>
  );
}

export default Table;
