import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import NavbarLight from '../components/NavbarLight';

export default function NotFound({ title = 'Page not found', message }) {
  return (
    <div className="min-h-screen bg-brand-bg">
      <NavbarLight />
      <main className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-xl text-center">
          <span className="font-heading font-black text-7xl sm:text-8xl text-accent/20" aria-hidden="true">404</span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-primary -mt-4">{title}</h1>
          <p className="mt-5 text-gray-500 leading-relaxed">{message || 'The page may have moved, or the address may be incorrect.'}</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-dark">
            <HiArrowLeft /> Back to homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
