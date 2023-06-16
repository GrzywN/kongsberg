import { Button } from '@kongsberg/shared/ui';

export interface TableNextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
}

export function TableNextStepButton(props: TableNextStepButtonProps) {
  const { className, text, ...passThroughProps } = props;

  return (
    <Button color="dark" {...passThroughProps}>
      {text}
    </Button>
  );
}

export default TableNextStepButton;
