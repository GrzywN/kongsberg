import { TableHeaderColumn as Column } from '../table-header-column/table-header-column';

export interface TableHeaderProps {
  children: React.ReactNode;
}

export function TableHeader(props: TableHeaderProps) {
  const { children } = props;

  return (
    <thead className="sticky top-0 text-base text-primary-900 uppercase bg-neutral-50 font-bold">
      <tr>{children}</tr>
    </thead>
  );
}

TableHeader.Column = Column;

export default TableHeader;
