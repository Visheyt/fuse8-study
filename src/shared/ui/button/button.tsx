import styles from './button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  children: ReactNode;
}

export const Button = ({ variant, children, ...props }: CustomButtonProps) => {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};
