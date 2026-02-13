import React from 'react';
import { Plus, Mail, Phone, MoreVertical, UserPlus } from 'lucide-react';

const AdminStaff = () => {
    const staff = [
        { id: 1, name: 'Александр Громов', role: 'Инструктор', email: 'gromov@evrazia.ru', status: 'На смене' },
        { id: 2, name: 'Елена Уварова', role: 'Администратор', email: 'uvarova@evrazia.ru', status: 'В отпуске' },
        { id: 3, name: 'Дмитрий Волков', role: 'Менеджер по бронированию', email: 'volkov@evrazia.ru', status: 'На смене' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-black text-[#1A1A1A] uppercase italic">Сотрудники</h2>
                    <p className="text-gray-400 text-sm font-medium">Управление персоналом и доступом</p>
                </div>
                <button className="bg-[#009EE3] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-200 transition-all">
                    <UserPlus size={18} />
                    ДОБАВИТЬ
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map((person) => (
                    <div key={person.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-[#009EE3] font-bold text-xl">
                                {person.name[0]}
                            </div>
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${person.status === 'На смене' ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-400'
                                }`}>
                                {person.status}
                            </span>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg">{person.name}</h3>
                        <p className="text-[#009EE3] text-sm font-medium mb-4">{person.role}</p>

                        <div className="space-y-2 border-t border-gray-50 pt-4">
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={14} /> {person.email}
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={14} /> +7 (999) 000-00-00
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminStaff;