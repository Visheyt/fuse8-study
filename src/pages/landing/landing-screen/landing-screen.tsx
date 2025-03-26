import styles from './landing-screen.module.scss';
import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';
import { Button } from '@/shared/ui/button/button';
import { Card } from '../types/card';

type LandingScreenProps = ComponentPropsWithRef<'div'> & {
  variant?: 'gray';
};

export const LandingScreen = ({
  children,
  variant,
  ref,
  ...props
}: LandingScreenProps) => {
  return (
    <div
      className={`${styles.screen} ${variant ? styles[variant] : ''}`}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
};

type TitleProps = ComponentPropsWithoutRef<'h2'>;
LandingScreen.Title = function Title({ children, ...props }: TitleProps) {
  return <h2 {...props}>{children}</h2>;
};

type ContentProps = ComponentPropsWithoutRef<'div'>;
LandingScreen.Content = function Content({ children, ...props }: ContentProps) {
  return (
    <div className={styles.content} {...props}>
      {children}
    </div>
  );
};

type ButtonProps = ComponentPropsWithoutRef<'button'>;
LandingScreen.Button = function LandingButton({
  children,
  ...props
}: ButtonProps) {
  return (
    <Button variant="withIcon" {...props}>
      {children}
    </Button>
  );
};

type CardProps = ComponentPropsWithoutRef<'div'> & Card;
LandingScreen.Card = function Card({ title, text, ...props }: CardProps) {
  return (
    <div className={styles.card} {...props}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

type CardsContainerProps = ComponentPropsWithoutRef<'div'> & {
  cards: Card[];
};
LandingScreen.CardsContainer = function CardsContainer({
  cards,
  ...props
}: CardsContainerProps) {
  return (
    <div className={styles.cardsContainer} {...props}>
      {cards.map((card) => (
        <LandingScreen.Card key={card.title} {...card} />
      ))}
    </div>
  );
};
