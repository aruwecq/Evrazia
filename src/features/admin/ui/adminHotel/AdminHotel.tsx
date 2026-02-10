import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

export const AdminHotel = () => {
    const [pricing, setPricing] = useState([
        { type: 'Комната', guests: '2-3', weekday: '2500 руб.', weekend: '3850 руб.' },
        { type: 'Апартамент', guests: '7', weekday: '6000 руб.', weekend: '9800 руб.' },
    ]);

    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-xl font-black uppercase italic text-gray-800">Цены Гостевого домика</h1>
                <button className="bg-[#009EE3] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 uppercase text-xs">
                    <Save size={16} /> Сохранить прайс
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50">
                        <tr className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                            <th className="p-4">Тип</th>
                            <th className="p-4 text-center">Гости</th>
                            <th className="p-4 text-center">Будни</th>
                            <th className="p-4 text-center">Выходные</th>
                            <th className="p-4 text-right italic">Действия</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {pricing.map((row, idx) => (
                            <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                <td className="p-4"><input className="bg-transparent font-bold border-none focus:ring-0 text-sm" value={row.type} /></td>
                                <td className="p-4"><input className="bg-transparent text-center border-none focus:ring-0 text-sm" value={row.guests} /></td>
                                <td className="p-4 text-center text-blue-600 font-bold"><input className="bg-transparent text-center border-none focus:ring-0 text-sm" value={row.weekday} /></td>
                                <td className="p-4 text-center text-indigo-600 font-bold"><input className="bg-transparent text-center border-none focus:ring-0 text-sm" value={row.weekend} /></td>
                                <td className="p-4 text-right">
                                    <button className="text-red-300 hover:text-red-500"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="w-full p-4 text-blue-500 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-50 flex items-center justify-center gap-2">
                    <Plus size={14} /> Добавить новую строку
                </button>
            </div>
        </div>
    );
};