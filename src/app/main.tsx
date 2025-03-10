/* eslint-disable no-undef */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from '@/shared/services/routes';
import { Main } from '@/pages/main/main';
import { RandomPost } from '@/pages/random-post/random-post';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.main.getLink()} element={<Main />} />
        <Route path={routes.randomPost.getLink()} element={<RandomPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
