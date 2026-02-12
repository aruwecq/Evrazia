import React, { useState } from 'react';
import Logo from '../../img/Group.svg';
import { Link } from 'react-router-dom';

import { Heart, ShoppingCart, Menu, X } from 'lucide-react'; // Menu жана X кошулду

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Менюнун абалы

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Evrasiya logo"
              className="h-12 md:h-14 w-auto cursor-pointer"
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

        {/* --- MOBILE CONTROLS (Бургер жана Иконкалар) --- */}
        <div className="flex lg:hidden items-center gap-4 text-black">
          <Link to="/favorites">
            <Heart size={20} fill="currentColor" />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={20} fill="currentColor" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}

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