import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from '@/shared/services/routes';
import { Main } from '@/pages/main/main';
import { RandomPost } from '@/pages/random-post/random-post';
import App from './App';
import { Landing } from '@/pages/landing/landing';
import { Navigation } from '@/pages/navigation/navigation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={routes.main.pathName} element={<Main />} />
          <Route path={routes.randomPost.pathName} element={<RandomPost />} />
          <Route path={routes.landing.pathName} element={<Landing />} />
          <Route path={routes.navigation.pathName} element={<Navigation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
