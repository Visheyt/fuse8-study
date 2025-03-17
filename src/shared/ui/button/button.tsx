import styles from './button.module.scss';
import { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'withIcon';

type CustomButtonProps = ComponentProps<'button'> & {
  variant: Variant;
  children: ReactNode;
};

export const Button = ({ variant, children, ...props }: CustomButtonProps) => {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};
