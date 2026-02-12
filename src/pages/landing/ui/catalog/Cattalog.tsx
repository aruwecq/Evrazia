import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SnowboardImg from '../../img/image 9.png';
import BindingImg from '../../img/image 60.png';
import ShoesImg from '../../img/image 61.png';

function Catalog() {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedItem]);

    const catalogData = [
        { id: 1, name: "Сноуборды", img: SnowboardImg, brand: "LIB TECH", price: "34 392 ₽", type: "МУЖСКОЙ СНОУБОРД" },
        { id: 2, name: "Крепления", img: BindingImg, brand: "UNION", price: "17 392 ₽", type: "КРЕПЛЕНИЯ FIRE" },
        { id: 3, name: "Обувь", img: ShoesImg, brand: "VANS", price: "24 500 ₽", type: "БОТИНКИ HI-STANDARD" },
        { id: 4, name: "Наборы", img: SnowboardImg, brand: "CAPITA", price: "59 395 ₽", type: "КОМПЛЕКТ BLACK EDITION" },
        { id: 5, name: "Куртки", img: BindingImg, brand: "DC", price: "12 000 ₽", type: "КУРТКА ЗИМНЯЯ" },
        { id: 6, name: "Штаны", img: ShoesImg, brand: "ROXY", price: "9 000 ₽", type: "ШТАНЫ МЕМБРАННЫЕ" },
        { id: 7, name: "Шлемы", img: SnowboardImg, brand: "SMITH", price: "5 000 ₽", type: "ШЛЕМ ЗАЩИТНЫЙ" },
        { id: 8, name: "Очки", img: BindingImg, brand: "OAKLEY", price: "7 500 ₽", type: "МАСКА ГОРНОЛЫЖНАЯ" },
    ];

    return (
        <div className="bg-white py-12 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={15}
                    slidesPerView={3}
                    navigation={{ nextEl: '.next-c', prevEl: '.prev-c' }}
                    breakpoints={{
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 8 },
                    }}
                    className="mb-10"
                >
                    {catalogData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => setSelectedItem(item)}
                                className="flex flex-col items-center cursor-pointer group"
                            >
                                <div className="w-28 h-28 md:w-32 md:h-32 bg-[#F7F7F7] rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                                    <img src={item.img} alt="" className="w-[70%] h-[70%] object-contain transition-transform group-hover:scale-110" />
                                </div>
                                <span className="text-sm font-bold text-[#2D2D2D] uppercase tracking-tight">{item.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="prev-c absolute left-0 top-16 z-10 opacity-30 hover:opacity-100 transition-opacity"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg></button>
                <button className="next-c absolute right-0 top-16 z-10 opacity-30 hover:opacity-100 transition-opacity"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></button>
            </div>
         {selectedItem && (
    <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto animate-in fade-in duration-300">
        {/* Top Navigation */}
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <button
                onClick={() => setSelectedItem(null)}
                className="flex items-center gap-2 text-blue-400 font-bold uppercase text-[9px] tracking-[0.2em] hover:text-blue-600 transition-all group"
            >
                <div className="w-7 h-7 rounded-full border border-blue-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </div>
                Назад
            </button>
            <div className="font-black italic text-lg tracking-tighter text-blue-600">
                LIB TECH<span className="text-blue-300">.</span>
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-start pt-4 pb-16">
            
            {/* Сол тарап: Сүрөт (Компакттуу блок) */}
            <div className="relative bg-blue-50/30 rounded-[30px] flex items-center justify-center p-8 md:h-[450px] border border-blue-50/50">
                {/* Кичирейтилген Стикери */}
                <div className="absolute top-5 left-5 w-14 h-14 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-sm rotate-[-10deg] z-10">
                    -50%
                </div>
                
                <img
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="h-full max-h-[150px] object-contain drop-shadow-2xl animate-in zoom-in-95 duration-500"
                />
            </div>

            {/* Оң тарап: Тексттер */}
            <div className="flex flex-col pt-2">
                <div className="flex items-center gap-3 mb-5">
                    <span className="bg-blue-600 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                        New Collection
                    </span>
                    <div className="flex items-center gap-1.5 text-blue-400 text-[10px]">
                        ★★★★★ <span className="text-blue-200 ml-1 font-medium">(42)</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-2 text-blue-900">
                    {selectedItem.type}
                </h1>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-blue-100 mb-6">
                    {selectedItem.brand} FIRE
                </h2>

                <p className="text-blue-400/70 font-medium leading-relaxed max-w-xs mb-10 text-[11px] uppercase tracking-tight">
                    Профессиональный сноуборд для фристайла и паудера. 
                    Обеспечивает невероятный контроль в любых условиях.
                </p>

                <div className="flex items-baseline gap-6 mb-10">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black text-blue-200 mb-1 uppercase tracking-widest">Цена:</span>
                        <span className="text-5xl font-black text-blue-600 tracking-tighter">
                            {selectedItem.price}
                        </span>
                    </div>
                    <div className="flex flex-col opacity-20">
                        <span className="text-[8px] font-bold uppercase text-blue-900">Раньше:</span>
                        <span className="text-lg font-bold line-through italic text-blue-900">
                            34 392 ₽
                        </span>
                    </div>
                </div>

                {/* Баскычтар */}
                <div className="flex flex-col gap-3 max-w-sm">
                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-blue-700 transition-all active:scale-[0.97] shadow-lg shadow-blue-100">
                        Добавить в корзину
                    </button>
                    <button className="w-full py-2 text-blue-400 font-bold uppercase tracking-[0.15em] text-[9px] hover:text-blue-600 transition-colors">
                        Купить в 1 клик
                    </button>
                </div>
            </div>
        </div>
    </div>
)}
        </div>
    );
}

export default Catalog;