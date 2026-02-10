import React from 'react';
import { FileText, Download, ExternalLink, Filter } from 'lucide-react';

const AdminContracts = () => {
    const contracts = [
        { id: 'CTR-2023-01', client: 'ООО "Вектор"', sum: '150 000 ₽', date: '01.10.2023', type: 'Корпоратив' },
        { id: 'CTR-2023-02', client: 'ИП Иванов А.В.', sum: '45 000 ₽', date: '05.10.2023', type: 'Прокат' },
        { id: 'CTR-2023-03', client: 'Медведева Ольга', sum: '12 800 ₽', date: '12.10.2023', type: 'Обучение' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-[#1A1A1A] uppercase italic">Контракты и счета</h2>
                <button className="text-gray-400 hover:text-[#009EE3] flex items-center gap-2 font-bold text-sm transition-colors">
                    <Filter size={18} /> ФИЛЬТРЫ
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {contracts.map((item, index) => (
                    <div key={item.id} className={`p-6 flex flex-wrap items-center justify-between gap-4 ${index !== contracts.length - 1 ? 'border-b border-gray-50' : ''
                        } hover:bg-gray-50/50 transition-colors`}>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 text-[#009EE3] rounded-xl">
                                <FileText size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">{item.id}</p>
                                <h4 className="font-bold text-gray-800">{item.client}</h4>
                            </div>
                        </div>

                        <div className="flex items-center gap-12">
                            <div className="text-right">
                                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Сумма</p>
                                <p className="font-black text-[#1A1A1A]">{item.sum}</p>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Тип</p>
                                <p className="text-sm font-medium text-gray-600">{item.type}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2.5 text-gray-400 hover:text-[#009EE3] hover:bg-white rounded-xl border border-transparent hover:border-gray-100 transition-all">
                                    <Download size={20} />
                                </button>
                                <button className="p-2.5 text-gray-400 hover:text-[#009EE3] hover:bg-white rounded-xl border border-transparent hover:border-gray-100 transition-all">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminContracts;