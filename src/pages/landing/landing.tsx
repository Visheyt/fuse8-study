import { ChangeEvent, useRef, useState } from 'react';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInteractiveClick = () => {
    if (inputValue) {
      alert(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1 className="visually-hidden">Лэндинг</h1>
      <LandingScreen ref={firstScreenRef}>
        <LandingScreen.Title>
          Интересные факты про эту страницу
        </LandingScreen.Title>
        <LandingScreen.Content>
          <p>В ней нет смысла</p>
          <LandingScreen.Button onClick={() => scrollTo(secondScreenRef)}>
            Перейти дальше
            <div style={{ color: 'black', display: 'flex' }}>
              <EyeIcon />
            </div>
          </LandingScreen.Button>
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
          <LandingScreen.Button onClick={handleInteractiveClick}>
            Вывести текст в alert
            <div style={{ color: 'tomato', display: 'flex' }}>
              <AlertIcon />
            </div>
          </LandingScreen.Button>
        </LandingScreen.Content>
      </LandingScreen>
    </div>
  );
};
