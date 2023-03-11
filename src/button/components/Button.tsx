import { ComponentProps, forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ children, ...props }, ref) => (
    <button
      className="absolute bottom-12 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-lg border-black bg-neutral-700 p-2 text-neutral-300 hover:scale-110 motion-safe:transition md:static"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
