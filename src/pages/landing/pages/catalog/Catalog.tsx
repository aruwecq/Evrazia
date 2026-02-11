import React, { useState } from 'react';
import lib1 from '../../img/lib 9.png';
import lib2 from '../../img/lib 9 (1).png';
import lib3 from '../../img/lib 9 (2).png';
import lib4 from '../../img/lib 9 (3).png';
import Cattalog from '../../ui/catalog/Cattalog';

const Catalog = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    // Mahsulotlar ro'yxati
    const products = [
        { id: 1, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 2, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '17392 ₽', oldPrice: '34392 ₽', discount: '-50%' },
        { id: 3, img: lib3, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 4, img: lib4, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 5, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 6, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
    ];

    return (
        
         
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                    <div className="w-full mb-10"><Cattalog /></div>

                    <div className='px-0 py-10 flex flex-col md:flex-row gap-8'>

            {/* LEFT SIDE: FILTERS (Chap tomon: Filtrlar) */}
            <aside className="hidden md:block w-[300px] flex-shrink-0 space-y-8 font-sans">
                <div className="space-y-10">

                    {/* Категории товаров */}
                    <div>
                        <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                            Категории товаров
                        </h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Сноуборды', count: 24, active: true },
                                { name: 'Крепления', count: 48 },
                                { name: 'Обувь', count: 60 },
                                { name: 'Наборы', count: 13 },
                                { name: 'Куртки', count: 81 },
                                { name: 'Штаны', count: 55 },
                                { name: 'Шлемы', count: 13 },
                                { name: 'Очки', count: 81 },
                                { name: 'Перчатки', count: 55 },
                            ].map((cat, i) => (
                                <label key={i} className="flex justify-between items-center cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all
                            ${cat.active ? 'border-[#FF5C5C] bg-[#FF5C5C]' : 'border-gray-300 group-hover:border-black'}`}>
                                            {cat.active && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className={`text-[15px] font-medium transition-colors 
                            ${cat.active ? 'text-[#FF5C5C]' : 'text-[#1A1A1A] group-hover:text-black'}`}>
                                            {cat.name}
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-sm font-normal">{cat.count}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Смотреть (Все товары / Только со скидкой) */}
                    <div>
                        <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                            Смотреть
                        </h3>
                        <div className="space-y-4">
                            <label className="flex justify-between items-center cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border border-[#FF5C5C] bg-white flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-[#FF5C5C] rounded-full"></div>
                                    </div>
                                    <span className="text-[15px] font-medium text-[#FF5C5C]">Все товары</span>
                                </div>
                                <span className="text-gray-400 text-sm">368</span>
                            </label>

                            <label className="flex justify-between items-center cursor-pointer group text-[#1A1A1A]">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center">
                                        {/* Bo'sh checkbox */}
                                    </div>
                                    <span className="text-[15px] font-medium group-hover:text-black">Только со скидкой</span>
                                </div>
                                <span className="text-gray-400 text-sm">48</span>
                            </label>
                        </div>
                    </div>
                    {/* 2. BREND, RAZMER VA NARX BLOKI */}
                    <div className="space-y-10">

                        {/* Бренд */}
                        <div>
                            <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                                Бренд
                            </h3>
                            {/* Brend qidirish inputi */}
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    placeholder="Поиск"
                                    className="w-full border-b border-gray-200 py-2 pr-8 focus:border-black outline-none text-[15px] placeholder:text-gray-400 transition-all"
                                />
                                <svg className="absolute right-0 top-2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Brendlar ro'yxati (Scroll bilan) */}
                            <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                                {[
                                    { name: 'DC Shoes', count: 24 },
                                    { name: 'Quiksilver', count: 48 },
                                    { name: 'BoardRiders', count: 60 },
                                    { name: 'Billabong', count: 13 },
                                    { name: 'The Tree', count: 81 },
                                    { name: 'Lib Tech', count: 55 },
                                ].map((brand, i) => (
                                    <label key={i} className="flex justify-between items-center cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center transition-all">
                                                {/* Tanlanganda qora nuqta chiqishi uchun */}
                                            </div>
                                            <span className="text-[15px] text-[#1A1A1A] group-hover:text-black">{brand.name}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm">{brand.count}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Размер */}
                        <div>
                            <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                                Размер
                            </h3>
                            <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                                {[
                                    { name: 'One Size', count: 24, active: true },
                                    { name: 'XS', count: 48 },
                                    { name: 'S', count: 60 },
                                    { name: 'S/M', count: 13 },
                                    { name: 'M', count: 81 },
                                    { name: 'M/L', count: 55 },
                                ].map((size, i) => (
                                    <label key={i} className="flex justify-between items-center cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all
                            ${size.active ? 'border-[#FF5C5C] bg-[#FF5C5C]' : 'border-gray-300 group-hover:border-black'}`}>
                                                {size.active && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`text-[15px] font-medium ${size.active ? 'text-[#FF5C5C]' : 'text-[#1A1A1A]'}`}>
                                                {size.name}
                                            </span>
                                        </div>
                                        <span className="text-gray-400 text-sm">{size.count}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Цена, ₽ */}
                        <div>
                            <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                                Цена, ₽
                            </h3>
                            <div className="flex items-center gap-2 mb-8">
                                <input
                                    type="number"
                                    defaultValue={5000}
                                    className="w-full border border-gray-200 p-2 text-center text-[14px] focus:border-black outline-none rounded-sm"
                                />
                                <span className="text-gray-400">—</span>
                                <input
                                    type="number"
                                    defaultValue={126456}
                                    className="w-full border border-gray-200 p-2 text-center text-[14px] focus:border-black outline-none rounded-sm"
                                />
                                <button className="bg-black text-white px-5 py-2 text-[14px] font-bold uppercase hover:bg-gray-800 transition-colors rounded-sm">
                                    OK
                                </button>
                            </div>

                            {/* Slayder qismi (Custom Range) */}
                            <div className="relative h-1 bg-gray-200 rounded-full mx-2">
                                <div className="absolute left-0 right-0 h-full bg-[#FF5C5C] rounded-full"></div>
                                <div className="absolute left-0 -top-2 w-5 h-5 bg-white border-2 border-[#FF5C5C] rounded-full cursor-pointer shadow-sm"></div>
                                <div className="absolute right-0 -top-2 w-5 h-5 bg-white border-2 border-[#FF5C5C] rounded-full cursor-pointer shadow-sm"></div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* 3. TEXNOLOGIYA, RANG VA DO'KONLAR BLOKI */}
                <div className="space-y-10">

                    {/* Технологии */}
                    <div>
                        <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                            Технологии
                        </h3>
                        <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar text-[#1A1A1A]">
                            {[
                                { name: 'BOA', count: 24 },
                                { name: 'Step On', count: 48 },
                                { name: 'Est', count: 60 },
                                { name: 'Magne Traction', count: 13 },
                                { name: 'The Channel', count: 81 },
                                { name: 'Recco', count: 55 },
                            ].map((tech, i) => (
                                <label key={i} className="flex justify-between items-center cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center transition-all">
                                        </div>
                                        <span className="text-[15px] group-hover:text-black">{tech.name}</span>
                                    </div>
                                    <span className="text-gray-400 text-sm">{tech.count}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Цвет */}
                    <div>
                        <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                            Цвет
                        </h3>
                        <div className="space-y-4 text-[#1A1A1A]">
                            {[
                                { name: 'Черный', color: 'bg-black', count: 24 },
                                { name: 'Белый', color: 'bg-white border border-gray-300', count: 48 },
                                { name: 'Красный', color: 'bg-[#FF5C5C]', count: 60 },
                                { name: 'Синий', color: 'bg-[#2D8CFF]', count: 13 },
                                { name: 'Желтый', color: 'bg-[#FFD600]', count: 81 },
                                { name: 'Оранжевый', color: 'bg-[#FF8A00]', count: 55 },
                            ].map((c, i) => (
                                <label key={i} className="flex justify-between items-center cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center">
                                        </div>
                                        <div className={`w-1.5 h-4 rounded-full ${c.color}`}></div>
                                        <span className="text-[15px] group-hover:text-black">{c.name}</span>
                                    </div>
                                    <span className="text-gray-400 text-sm">{c.count}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Забрать сейчас: Москва */}
                    <div>
                        <h3 className="font-bold text-[18px] mb-6 uppercase tracking-tight text-[#1A1A1A]">
                            Забрать сейчас: Москва
                        </h3>
                        <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <label key={item} className="flex gap-3 cursor-pointer group">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 group-hover:border-black flex items-center justify-center transition-all">
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-[#1A1A1A] group-hover:text-black leading-tight">
                                            Название магазина
                                        </span>
                                        <span className="text-[11px] uppercase tracking-wider text-gray-400 mt-1">
                                            ул. энтузиастов 45, метро бабушкинская
                                        </span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

                        </aside>

                        {/* Mobile filters (collapsible) - visible only on small screens */}
                        <div className="block md:hidden w-full">
                            <details className="mb-6 border rounded-lg">
                                <summary className="px-4 py-3 bg-white font-semibold cursor-pointer">Фильтры</summary>
                                <div className="p-4 space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Категории</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Сноуборды','Крепления','Обувь','Наборы','Куртки','Штаны'].map((n,i)=>(
                                                <label key={i} className="flex items-center justify-between px-2 py-1 border rounded">{n} <span className="text-xs text-gray-400">12</span></label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Бренд</h4>
                                        <input type="text" placeholder="Поиск" className="w-full border-b border-gray-200 py-2 outline-none" />
                                    </div>
                                </div>
                            </details>
                        </div>

                        {/* RIGHT SIDE: PRODUCT GRID (O'ng tomon: Mahsulotlar) */}
            <main className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {products.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            {/* Card Image Part */}
                            <div className="bg-[#F8F8F8] relative rounded-lg p-6 sm:p-10 h-56 sm:h-[350px] flex items-center justify-center group">
                                <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </button>
                                {item.discount && (
                                    <span className="absolute bottom-4 left-4 bg-[#FF5C5C] text-white text-xs font-bold px-2 py-1 rounded">
                                        {item.discount}
                                    </span>
                                )}
                                <img src={item.img} alt="" className="max-h-full w-auto object-contain transition-transform group-hover:scale-105" />
                            </div>

                            {/* Info Part */}
                            <div className="mt-4">
                                <h3 className="font-bold text-gray-900">{item.brand}</h3>
                                <p className="text-gray-500 text-sm">{item.title}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="font-bold text-lg">{item.price}</span>
                                    {item.oldPrice && <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            </div>
        </div>
    );
};

export default Catalog;