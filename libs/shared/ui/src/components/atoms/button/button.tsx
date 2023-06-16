const buttonColors = {
  dark: 'bg-neutral-600 hover:bg-neutral-700 text-neutral-50',
  light: 'bg-white hover:bg-neutral-100 text-primary-900',
};

export type ButtonColors = keyof typeof buttonColors;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color: ButtonColors;
}

export function Button(props: ButtonProps) {
  const {
    color = 'light',
    className = '',
    children,
    ...passThroughProps
  } = props;

  return (
    <button
      className={`font-semibold no-underline cursor-pointer transition-colors p-4 rounded-lg md:w-max ${className} ${buttonColors[color]}`}
      {...passThroughProps}
    >
      {children}
    </button>
  );
}

export default Button;
