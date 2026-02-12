import React, { useState } from 'react';
import { Save, Plus, Trash2, Briefcase, Phone, Mail } from 'lucide-react';

export const AdminVacansi = () => {
    const [vacancies, setVacancies] = useState([
        {
            id: 1,
            title: 'Повар со стажем работы',
            contact: '89193003744, Елена Владимировна',
            email: 'mail@euroasia.su'
        }
    ]);

    const addVacancy = () => {
        const newVac = {
            id: Date.now(),
            title: 'Новая вакансия',
            contact: 'Укажите контакт',
            email: 'mail@euroasia.su'
        };
        setVacancies([...vacancies, newVac]);
    };

    const deleteVacancy = (id: number) => {
        setVacancies(vacancies.filter(v => v.id !== id));
    };

    return (
        <div className="p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-xl font-black uppercase italic text-gray-800">Управление Вакансиями</h1>
                <button
                    onClick={addVacancy}
                    className="bg-[#009EE3] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all uppercase text-xs"
                >
                    <Plus size={18} /> Добавить вакансию
                </button>
            </div>

            {/* Vacancy List */}
            <div className="grid grid-cols-1 gap-4">
                {vacancies.map((v) => (
                    <div key={v.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="bg-blue-50 p-4 rounded-2xl text-[#009EE3]">
                                <Briefcase size={24} />
                            </div>

                            <div className="flex-1 space-y-4 w-full">
                                <div>
                                    <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Название должности</label>
                                    <input
                                        type="text"
                                        value={v.title}
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 font-bold text-gray-700 focus:ring-2 focus:ring-blue-100 outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block italic flex items-center gap-1">
                                            <Phone size={10} /> Контактное лицо и тел.
                                        </label>
                                        <input
                                            type="text"
                                            value={v.contact}
                                            className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-sm text-gray-600 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block italic flex items-center gap-1">
                                            <Mail size={10} /> Email для резюме
                                        </label>
                                        <input
                                            type="text"
                                            value={v.email}
                                            className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-sm text-blue-500 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row md:flex-col gap-2">
                                <button className="p-3 text-blue-400 hover:bg-blue-50 rounded-xl transition-colors">
                                    <Save size={20} />
                                </button>
                                <button
                                    onClick={() => deleteVacancy(v.id)}
                                    className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};