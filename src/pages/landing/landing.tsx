import { useRef, useState } from 'react';
import { EyeIcon } from '@/shared/icons/eye.icon';
import { AlertIcon } from '@/shared/icons/alert.icon';
import { LandingScreen } from './landing-screen/landing-screen';
import { cardData } from './data/card-data';
import { useScroll } from './hooks/useScroll';
import { Input } from '@/shared/ui/input/input';

export const Landing = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const firstScreenRef = useRef<HTMLDivElement>(null);
  const secondScreenRef = useRef<HTMLDivElement>(null);
  const scrollTo = useScroll();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInteractiveClick = () => {
    if (inputValue) {
      alert(inputValue);
      setInputValue('');
    }
    scrollTo(firstScreenRef);
  };

  return (
    <div>
      <LandingScreen ref={firstScreenRef}>
        <LandingScreen.Title>
          Интересные факты про эту страницу
        </LandingScreen.Title>
        <LandingScreen.Content>
          <p>В ней нет смысла</p>
          <LandingScreen.ScrollButton onClick={() => scrollTo(secondScreenRef)}>
            Перейти дальше
            <EyeIcon />
          </LandingScreen.ScrollButton>
        </LandingScreen.Content>
      </LandingScreen>
      <LandingScreen ref={secondScreenRef} variant="gray">
        <LandingScreen.Title>Смотрите какие карточки</LandingScreen.Title>
        <LandingScreen.CardsContainer cards={cardData} />
      </LandingScreen>
      <LandingScreen>
        <LandingScreen.Title>Интерактив?</LandingScreen.Title>
        <LandingScreen.Content>
          <Input
            type="text"
            placeholder="Напишите тут что-нибудь"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <LandingScreen.ScrollButton onClick={handleInteractiveClick}>
            Вывести текст в alert
            <AlertIcon />
          </LandingScreen.ScrollButton>
        </LandingScreen.Content>
      </LandingScreen>
    </div>
  );
};
