import React, { useState } from 'react';
import { Save, Upload, Trash2, Image as ImageIcon } from 'lucide-react';

export const AdminCafe = () => {
    const [cafeData, setCafeData] = useState({
        title: 'Кафе-ресторан',
        subtitle: 'Уютная атмосфера и обильный выбор блюд',
        description: 'В среду, четверг, пятницу...',
        averageCheck: '350 рублей',
        banquetPrice: '1500 рублей/персона'
    });

    return (
        <div className="p-8 space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-xl font-black uppercase italic text-gray-800">Управление Кафе</h1>
                <button className="bg-[#009EE3] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all uppercase text-xs">
                    <Save size={16} /> Сохранить всё
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Asosiy ma'lumotlar */}
                <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                    <h2 className="text-sm font-black uppercase text-blue-500 mb-4">Основные тексты</h2>
                    <div>
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Заголовок</label>
                        <input type="text" value={cafeData.title} className="w-full bg-gray-50 p-3 rounded-xl border-none font-bold text-gray-700" />
                    </div>
                    <div>
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Описание</label>
                        <textarea rows={6} value={cafeData.description} className="w-full bg-gray-50 p-3 rounded-xl border-none text-sm text-gray-600" />
                    </div>
                </div>

                {/* Narxlar */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                    <h2 className="text-sm font-black uppercase text-blue-500 mb-4">Цены и Контакты</h2>
                    <div>
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Средний чек</label>
                        <input type="text" value={cafeData.averageCheck} className="w-full bg-gray-50 p-3 rounded-xl border-none font-bold" />
                    </div>
                    <div>
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Банкет (от сум)</label>
                        <input type="text" value={cafeData.banquetPrice} className="w-full bg-gray-50 p-3 rounded-xl border-none font-bold" />
                    </div>
                </div>
            </div>
        </div>
    );
};