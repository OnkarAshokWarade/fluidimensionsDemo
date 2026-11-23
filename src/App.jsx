import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteEffects from './components/RouteEffects';
import { contentPages } from './data/site';

const Home = lazy(() => import('./pages/Home'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Suspense fallback={<div className="min-h-screen bg-brand-bg" role="status" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {contentPages.map((page) => (
            <Route key={page.path} path={page.path.replace(/\/$/, '')} element={<ContentPage page={page} />} />
          ))}
          <Route path="/industries" element={<Navigate to="/#industries" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
