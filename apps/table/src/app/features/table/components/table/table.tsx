import { Outlet } from "react-router-dom";

export interface TableProps {
  children?: React.ReactNode;
}

export function Table(props: TableProps) {
  const { children = "" } = props;

  return (
    <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg h-[37.125rem]">
      <table className="w-full text-sm text-left text-neutral-700 font-semibold">
        {children}
        <Outlet />
      </table>
    </div>
  );
}

export default Table;
