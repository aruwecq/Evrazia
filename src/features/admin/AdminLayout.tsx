import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './ui/sidebar/Sidebar';
import { AdminHeader } from './ui/adminHeader/AdminHeader';

export const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-40 md:hidden" />
      )}

      <div className="flex-1 md:ml-64 flex flex-col min-w-0">
        <AdminHeader onToggleSidebar={() => setSidebarOpen(o => !o)} />

        <main className="flex-1 p-0 overflow-x-hidden overflow-y-auto bg-white">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};