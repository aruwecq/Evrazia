import React, { useState } from 'react';
import { Search, Trash2, Eye, CheckCircle, Clock } from 'lucide-react';

const AdminApplications = () => {
    // Vaqtincha ma'lumotlar (Test uchun)
    const [applications, setApplications] = useState([
        { id: 1, name: 'Иван Иванов', phone: '+7 999 123-45-67', date: '10.10.2023', status: 'Новый', service: 'Прокат лыж' },
        { id: 2, name: 'Мария Петрова', phone: '+7 900 555-00-11', date: '09.10.2023', status: 'В обработке', service: 'Бронирование отеля' },
        { id: 3, name: 'Алексей Сидоров', phone: '+7 912 345-67-89', date: '08.10.2023', status: 'Завершено', service: 'Ски-пасс' },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">Список заявок</h2>
                    <p className="text-gray-400 text-sm font-medium">Управляйте входящими запросами клиентов</p>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Поиск по имени или телефону..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#009EE3] outline-none transition-all text-sm"
                    />
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase italic">Клиент</th>
                            <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase italic">Услуга</th>
                            <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase italic">Дата</th>
                            <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase italic">Статус</th>
                            <th className="px-6 py-4 text-[13px] font-bold text-gray-400 uppercase italic text-right">Действия</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {applications.map((app) => (
                            <tr key={app.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">{app.name}</span>
                                        <span className="text-xs text-gray-400">{app.phone}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600 font-medium">{app.service}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                                    {app.date}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${app.status === 'Новый' ? 'bg-blue-50 text-blue-500' :
                                            app.status === 'В обработке' ? 'bg-orange-50 text-orange-500' :
                                                'bg-green-50 text-green-500'
                                        }`}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-100 text-gray-400 hover:text-[#009EE3] transition-all">
                                            <Eye size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-100 text-gray-400 hover:text-red-500 transition-all">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {applications.length === 0 && (
                    <div className="p-20 text-center">
                        <Clock className="mx-auto text-gray-200 mb-4" size={48} />
                        <p className="text-gray-400 font-medium">Новых заявок пока нет</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminApplications;