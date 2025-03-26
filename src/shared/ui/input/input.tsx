import styles from './input.module.scss';

import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'>;
export const Input = ({ ...props }: Props) => {
  return <input className={styles.input} {...props} />;
};
