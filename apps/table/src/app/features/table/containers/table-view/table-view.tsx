import { Hero } from '@kongsberg/shared/ui';

import { TableLayout } from '../table-layout/table-layout';

export function TableView() {
  return (
    <>
      <Hero
        title="Browse all users and extend for more info."
        subtitle={
          <>
            Then you can check out their posts and the comments on those posts.{' '}
            <span role="img" aria-label="Shushing Face">
              😇
            </span>
          </>
        }
      />
      <TableLayout />
    </>
  );
}

export default TableView;
