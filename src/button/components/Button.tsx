import { ComponentProps, forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ children, ...props }, ref) => (
    <button
      className="cursor-pointer rounded-lg border bg-gray-500 p-2"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
