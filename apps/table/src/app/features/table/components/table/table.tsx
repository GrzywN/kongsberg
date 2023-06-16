import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

export function Table() {
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

export default Table;
