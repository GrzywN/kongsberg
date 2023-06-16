import { LoadingSpinner } from '@kongsberg/shared/ui';

export interface TableHeaderColumnProps {
  text: React.ReactNode;
  isLoading: boolean;
  alignRight?: boolean;
}

export function TableHeaderColumn(props: TableHeaderColumnProps) {
  const { text, isLoading, alignRight } = props;

  return (
    <th scope="col" className={`${alignRight ? 'text-right' : ''} px-6 py-3`}>
      <p className="inline-flex items-center gap-2">
        {text} <LoadingSpinner isLoading={isLoading} />
      </p>
    </th>
  );
}

export default TableHeaderColumn;
