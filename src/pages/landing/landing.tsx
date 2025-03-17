import './landing.scss';
import { useRef } from 'react';
import { EyeIcon } from '@/shared/icons/eye.icon';
import { AlertIcon } from '@/shared/icons/alert.icon';
import { LandingScreen } from './landing-screen/landing-screen';
import { cardData } from './data/card-data';
import { useScroll } from './hooks/useScroll';

export const Landing = () => {
  const firstScreenRef = useRef<HTMLDivElement>(null);
  const secondScreenRef = useRef<HTMLDivElement>(null);

  const scrollTo = useScroll();

  return (
    <div className="example-homework">
      <LandingScreen ref={firstScreenRef}>
        <LandingScreen.Title>
          Интересные факты про эту страницу
        </LandingScreen.Title>
        <LandingScreen.Content>
          <p>В ней нет смысла</p>
        </LandingScreen.Content>
        <LandingScreen.ScrollButton onClick={() => scrollTo(secondScreenRef)}>
          <span>Перейти дальше</span>
          <EyeIcon />
        </LandingScreen.ScrollButton>
      </LandingScreen>
      <LandingScreen ref={secondScreenRef}>
        <LandingScreen.Title>Смотрите какие карточки</LandingScreen.Title>
        <LandingScreen.Content style={{ backgroundColor: '#e0e0e0' }}>
          <LandingScreen.CardsContainer cards={cardData} />
        </LandingScreen.Content>
      </LandingScreen>
      <LandingScreen>
        <LandingScreen.Title>Интерактив?</LandingScreen.Title>
        <LandingScreen.Content>
          <input type="text" placeholder="Напишите тут что-нибудь" />
        </LandingScreen.Content>
        <LandingScreen.ScrollButton onClick={() => scrollTo(firstScreenRef)}>
          <span> Вывести текст в alert</span>
          <AlertIcon />
        </LandingScreen.ScrollButton>
      </LandingScreen>
    </div>
  );
};
