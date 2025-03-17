import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from '@/shared/services/routes';
import { Main } from '@/pages/main/main';
import { RandomPost } from '@/pages/random-post/random-post';
import App from './App';
import { Landing } from '@/pages/landing/landing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={routes.main.getLink()} element={<Main />} />
          <Route path={routes.randomPost.getLink()} element={<RandomPost />} />
          <Route path={routes.landing.getLink()} element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
