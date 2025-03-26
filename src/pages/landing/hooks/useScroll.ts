import { RefObject } from 'react';

export const useScroll = () => {
  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return scrollTo;
};
