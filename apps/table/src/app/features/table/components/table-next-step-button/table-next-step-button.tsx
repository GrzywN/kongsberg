export interface TableNextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
}

export function TableNextStepButton(props: TableNextStepButtonProps) {
  const { type = 'button', className, ...passThroughProps } = props;

  return (
    <button
      className={`cursor-pointer transition-colors bg-neutral-600 hover:bg-neutral-700 text-neutral-50 p-4 rounded-lg md:w-max ${className}`}
      type={type}
      {...passThroughProps}
    >
      See its posts
    </button>
  );
}

export default TableNextStepButton;
