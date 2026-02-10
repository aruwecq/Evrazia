import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
        <input 
          type="text" 
          placeholder="Поиск по панели..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl border-none outline-none text-sm focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-[#009EE3] transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-gray-100"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-800 leading-none">Администратор</p>
            <p className="text-[11px] text-green-500 font-medium mt-1 uppercase tracking-tighter">В сети</p>
          </div>
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#009EE3]">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};