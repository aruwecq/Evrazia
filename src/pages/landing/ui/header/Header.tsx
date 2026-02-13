import { useState } from 'react';
import Logo from '../../img/Group.svg';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Evrasiya logo"
              className="h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex gap-16 font-medium text-gray-700 items-center">
          <Link to="/resorts" className="hover:text-blue-600 transition">
            Курорт
          </Link>
          <Link to="/accommodation" className="hover:text-blue-600 transition">
            Проживание
          </Link>
          <Link to="/events" className="hover:text-blue-600 transition">
            Афиша
          </Link>
          <Link to="/business" className="hover:text-blue-600 transition">
            Мероприатие
          </Link>
          <Link to="/buy-online" className="hover:text-blue-600 transition">
            Купить онлайн
          </Link>
          <Link to="/signin" className="hover:text-blue-600 transition">
            Регистрация
          </Link>
          
          <div className="flex gap-5 items-center ml-2 text-black">
            <Link to="/favorites" className="hover:text-blue-600 transition">
              <Heart size={20} fill="currentColor" />
            </Link>
            <Link to="/cart" className="hover:text-blue-600 transition">
              <ShoppingCart size={20} fill="currentColor" />
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-4 text-black">
          <Link to="/favorites">
            <Heart size={20} fill="currentColor" />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={20} fill="currentColor" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t flex flex-col p-6 gap-4 font-medium text-gray-700">
          <Link to="/resorts" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">
            Курорт
          </Link>
          <Link to="/accommodation" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">
            Проживание
          </Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">
            Афиша
          </Link>
          <Link to="/business" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">
            Мероприатие
          </Link>
          <Link to="/buy-online" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2 border-b">
            Купить онлайн
          </Link>
          <Link to="/signin" onClick={() => setIsOpen(false)} className="hover:text-blue-600 py-2">
            Регистрация
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;