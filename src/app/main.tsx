import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { routes } from '@/shared/services/routes';
import { Main } from '@/pages/main/main';
import { RandomPost } from '@/pages/random-post/random-post';
import App from './App';
import { Landing } from '@/pages/landing/landing';
import { Navigation } from '@/pages/navigation/ui/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CreateArticle } from '@/pages/articles/pages/create-article/create-article';
import { Articles } from '@/pages/articles/articles';
import { ArticlesList } from '@/pages/articles/pages/articles-list/articles-list';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={routes.main.pathName} element={<Main />} />
            <Route path={routes.randomPost.pathName} element={<RandomPost />} />
            <Route path={routes.landing.pathName} element={<Landing />} />
            <Route path={routes.navigation.pathName} element={<Navigation />} />
            <Route path={routes.articles.pathName} element={<Articles />}>
              <Route
                index
                element={
                  <Navigate
                    to={routes.articles.routes!.articlesList.pathName}
                    replace
                  />
                }
              />
              <Route
                path={routes.articles.routes!.articlesList.pathName}
                index
                element={<ArticlesList />}
              />
              <Route
                path={routes.articles.routes!.createArticle.pathName}
                element={<CreateArticle />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
