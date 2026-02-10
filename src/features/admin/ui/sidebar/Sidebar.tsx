import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ImageIcon, Users, Hotel, Coffee, Map, LogOut } from 'lucide-react';
import img1 from '../../../../pages/landing/img/Group.svg'
const adminMenu = [
  { name: 'Главная', path: '/admin/home', icon: <LayoutDashboard size={20} /> },
  { name: 'Баннеры', path: '/admin/banners', icon: <ImageIcon size={20} /> },
  { name: 'Отель', path: '/admin/hotel', icon: <Hotel size={20} /> },
  { name: 'Кафе', path: '/admin/cafe', icon: <Coffee size={20} /> },
  { name: 'Трассы', path: '/admin/tracks', icon: <Map size={20} /> },
  { name: 'Вакансии', path: '/admin/vacancies', icon: <Users size={20} /> },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 min-w-[256px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3">
          <img src={img1} alt="Evrazia Logo" className="h-10" />

        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {adminMenu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-[#009EE3] text-white shadow-md shadow-blue-100'
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                }`}
            >
              {item.icon}
              <span className="text-[14px] font-bold uppercase tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-50">
        <Link to="/" className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-red-500 transition-colors text-xs font-bold uppercase">
          <LogOut size={16} />
          Выйти на сайт
        </Link>
      </div>
    </aside>
  );
};