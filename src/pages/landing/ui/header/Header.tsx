import Logo from '../../img/Group.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        {/* LOGO → HOME */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Evrasiya logo"
              className="h-12 md:h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link to="/resorts" className="hover:text-blue-600 transition">Курорт</Link>
          <Link to="/accommodation" className="hover:text-blue-600 transition">Проживание</Link>
          <Link to="/events" className="hover:text-blue-600 transition">Афиша</Link>
          <Link to="/business" className="hover:text-blue-600 transition">Мероприатие</Link>
          <Link to="/buy-online" className="hover:text-blue-600 transition">Купить онлайн</Link>
          <Link to="/signin" className="hover:text-blue-600 transition">Регистрация</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(o => !o)} aria-label="menu" className="bg-[#00AEEF] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg ring-1 ring-blue-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/resorts" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Курорт</Link>
            <Link to="/accommodation" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Проживание</Link>
            <Link to="/events" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Афиша</Link>
            <Link to="/business" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Мероприатие</Link>
            <Link to="/buy-online" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Купить онлайн</Link>
            <Link to="/signin" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Регистрация</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
