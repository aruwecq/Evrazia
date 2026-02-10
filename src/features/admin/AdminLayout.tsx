import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './ui/sidebar/Sidebar';
import { AdminHeader } from './ui/adminHeader/AdminHeader';

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      
      <Sidebar />

      
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <AdminHeader />
        
        <main className="flex-1 p-0 overflow-x-hidden overflow-y-auto bg-white">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};