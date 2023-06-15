import { forwardRef, useState } from 'react';

export interface TableRowAccordionProps {
  itemKey: string | number;
  onClick?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  cols: React.ReactNode[];
  detailsBody: React.ReactNode;
}

export const TableRowAccordion = forwardRef<
  HTMLElement,
  TableRowAccordionProps
>((props, ref) => {
  const { itemKey, onClick, onKeyDown, cols, detailsBody } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsOpen((prevState) => !prevState);

    if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsOpen((prevState) => !prevState);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <>
      <tr
        className="bg-white cursor-auto border-b-2 border-neutral-200 hover:bg-neutral-300 even:bg-neutral-50 odd:bg-neutral-100"
        role="button"
        tabIndex={0}
        key={itemKey}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {cols.map((col, idx) => {
          if (idx === 0) {
            return (
              <td className="px-6 py-4 w-full" key={idx}>
                {col}
              </td>
            );
          }

          if (idx === cols.length - 1) {
            return (
              <td className="pr-6 py-4 grid md:flex gap-2" key={idx} ref={ref}>
                {col}
              </td>
            );
          }

          return (
            <td className="px-6 py-4" key={idx}>
              {col}
            </td>
          );
        })}
      </tr>
      {isOpen && (
        <tr className="bg-white cursor-auto even:bg-neutral-50 odd:bg-neutral-100 border-b-2 border-neutral-400">
          <td className="px-6 py-4" colSpan={cols.length}>
            <p className="max-w-prose">{detailsBody}</p>
          </td>
        </tr>
      )}
    </>
  );
});

export default TableRowAccordion;
