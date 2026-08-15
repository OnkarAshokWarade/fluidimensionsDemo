import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteEffects from './components/RouteEffects';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Suspense fallback={<div className="min-h-screen bg-brand-bg" role="status" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Navigate to="/#industries" replace />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
