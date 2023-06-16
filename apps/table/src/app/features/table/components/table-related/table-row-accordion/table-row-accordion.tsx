import { useMediaQuery } from '@mantine/hooks';
import { forwardRef, useState } from 'react';

export interface TableRowAccordionProps {
  itemKey: string | number;
  onClick?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  cols: React.ReactNode[];
  detailsBody: React.ReactNode;
}

export const TableRowAccordion = forwardRef<
  HTMLTableRowElement,
  TableRowAccordionProps
>((props, ref) => {
  const { itemKey, onClick, onKeyDown, cols, detailsBody } = props;
  const [isOpen, setIsOpen] = useState(false);
  const shouldDisplayDetailsOnly = useMediaQuery('(max-width: 1023px)');

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
        ref={ref}
      >
        {!shouldDisplayDetailsOnly &&
          cols?.map((col, idx) => (
            <td
              className={`px-6 py-4 ${
                idx === cols.length - 1
                  ? 'px-6 py-4 grid md:flex justify-end gap-2'
                  : ''
              }`}
              key={idx}
            >
              {col}
            </td>
          ))}
      </tr>
      {(shouldDisplayDetailsOnly || isOpen) && (
        <tr className="bg-white cursor-auto even:bg-neutral-50 odd:bg-neutral-100 border-b-2 border-neutral-400">
          <td className="px-6 py-4" colSpan={cols.length}>
            {detailsBody}
          </td>
        </tr>
      )}
    </>
  );
});

export default TableRowAccordion;
