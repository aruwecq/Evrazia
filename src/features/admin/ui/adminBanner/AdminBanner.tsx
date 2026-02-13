import React, { useState } from 'react';
import { Save, Upload, Trash2, Plus, LayoutGrid, Newspaper } from 'lucide-react';

export const AdminBanner = () => {
  // Frontend kodingdagi bannerlar strukturasini boshlang'ich holat sifatida olamiz
  const [bannersList, setBannersList] = useState([
    { id: 1, title: '30 декабря в ЦАО "Евразия" состоится открытие...', desc: 'К новогодним праздникам...', image: null, isNews: false },
    { id: 2, title: 'Новый сезон – новые горизонты', desc: 'Центра активного отдыха...', image: null, isNews: false },
    { id: 3, title: 'О курорте', desc: 'Мы рады приветствовать...', image: null, isNews: false },
    { id: 4, title: 'Новости', desc: '', image: null, isNews: true },
  ]);

  const handleInputChange = (id: number, field: string, value: any) => {
    setBannersList(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const handleImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(id, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Sahifa sarlavhasi */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-[#009EE3] rounded-xl flex items-center justify-center font-bold text-xl">
            E
          </div>
          <div>
            <h1 className="text-xl font-black uppercase italic tracking-tight text-gray-800">Управление Баннерами</h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Главная страница / Слайдер</p>
          </div>
        </div>
        <button className="bg-[#009EE3] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100 uppercase text-sm">
          <Save size={18} /> Сохранить изменения
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {bannersList.map((banner, idx) => (
          <div key={banner.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">
            {/* Banner Header */}
            <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
              <span className="flex items-center gap-2 text-xs font-black uppercase italic text-gray-400">
                {banner.isNews ? <Newspaper size={14} /> : <LayoutGrid size={14} />}
                Баннер #{idx + 1} {banner.isNews && "(НОВОСТИ)"}
              </span>
              <div className="flex gap-2">
                <button className="p-1.5 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Rasm qismi */}
              <div className="w-full md:w-48 h-32 relative group/img cursor-pointer bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-[#009EE3] transition-all">
                {banner.image ? (
                  <img src={banner.image} className="w-full h-full object-cover" alt="preview" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <Upload size={24} />
                  </div>
                )}
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(banner.id, e)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>

              {/* Matnlar qismi */}
              <div className="flex-1 space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block italic">Заголовок</label>
                  <input
                    type="text"
                    value={banner.title}
                    onChange={(e) => handleInputChange(banner.id, 'title', e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>

                {!banner.isNews && (
                  <div>
                    <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block italic">Описание</label>
                    <textarea
                      value={banner.desc}
                      onChange={(e) => handleInputChange(banner.id, 'desc', e.target.value)}
                      rows={2}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-sm font-medium text-gray-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Yangi banner qo'shish tugmasi */}
        <button className="border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center p-8 text-gray-300 hover:text-[#009EE3] hover:border-[#009EE3] transition-all group">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={24} />
          </div>
          <span className="mt-3 font-bold uppercase italic text-xs tracking-widest">Добавить новый баннер</span>
        </button>
      </div>
    </div>
  );
};