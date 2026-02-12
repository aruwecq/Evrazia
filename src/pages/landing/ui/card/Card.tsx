import React, { useState } from 'react';
import lib1 from '../../img/lib 9.png';
import lib2 from '../../img/lib 9 (1).png';
import lib3 from '../../img/lib 9 (2).png';
import lib4 from '../../img/lib 9 (3).png';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    img: string;
    brand: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
}

const Card = () => {
    const [products] = useState<Product[]>([
        { id: 1, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд GNU Asym Carbon Credit', price: '34392 ₽' },
        { id: 2, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд Capita Black Edition', price: '17392 ₽', oldPrice: '34392 ₽', discount: '-50%' },
        { id: 3, img: lib3, brand: 'LIB TECH', title: 'Мужской Сноуборд Lib Tech Fire', price: '34392 ₽' },
        { id: 4, img: lib4, brand: 'LIB TECH', title: 'Мужской Сноуборд Burton Skeleton Key', price: '34392 ₽' },
        { id: 5, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд Custom X', price: '25000 ₽' },
        { id: 6, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд Process FV', price: '12000 ₽' },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const visibleCards = 4;

    const nextSlide = () => {
        if (currentIndex < products.length - visibleCards) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="max-w-7xl mx-auto px-10 py-20 relative">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tight text-[#1A1A1A]">
                Новинки
            </h2>

            <div className="relative overflow-visible">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute -left-12 top-1/2 -translate-y-1/2 z-20 p-2 transition-all 
                    ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
                >
                    <svg width="30" height="50" viewBox="0 0 24 44" fill="none" className="stroke-black">
                        <path d="M22 2L2 22L22 42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {products.map((item) => (
                            <div key={item.id} className="min-w-[25%] px-3 box-border">
                                <div 
                                    onClick={() => setSelectedProduct(item)}
                                    className="bg-[#F8F8F8] relative rounded-lg p-8 h-[380px] flex items-center justify-center transition-transform hover:shadow-md cursor-pointer group"
                                >
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            toggleFavorite(item.id);
                                        }}
                                        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm"
                                    >
                                        <svg
                                            width="20" height="20" viewBox="0 0 24 24"
                                            fill={favorites.includes(item.id) ? "black" : "none"}
                                            stroke="black" strokeWidth="2"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </button>

                                    {item.discount && (
                                        <span className="absolute bottom-4 left-4 bg-[#FF5C5C] text-white text-xs font-bold px-2 py-1 rounded-sm">
                                            {item.discount}
                                        </span>
                                    )}

                                    <img src={item.img} alt={item.title} className="max-h-full w-auto object-contain transition-transform group-hover:scale-105" />
                                </div>

                                <div className="mt-5 space-y-1 cursor-pointer" onClick={() => setSelectedProduct(item)}>
                                    <h3 className="font-bold text-lg text-[#1A1A1A]">{item.brand}</h3>
                                    <p className="text-gray-500 text-sm truncate">{item.title}</p>
                                    <div className="flex gap-3 items-center pt-1">
                                        <span className={`font-bold text-lg ${item.discount ? 'text-[#FF5C5C]' : 'text-[#1A1A1A]'}`}>
                                            {item.price}
                                        </span>
                                        {item.oldPrice && (
                                            <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= products.length - visibleCards}
                    className={`absolute -right-12 top-1/2 -translate-y-1/2 z-20 p-2 transition-all 
                    ${currentIndex >= products.length - visibleCards ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
                >
                    <svg width="30" height="50" viewBox="0 0 24 44" fill="none" className="stroke-black">
                        <path d="M2 2L22 22L2 42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
{selectedProduct && (
    <div className="fixed inset-0 bg-white z-[200] overflow-y-auto animate-in slide-in-from-right duration-500">
        <div className="max-w-[1440px] mx-auto min-h-screen relative flex flex-col">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md z-[210] px-6 py-4 flex items-center border-b border-blue-100">
                <button 
                    onClick={() => setSelectedProduct(null)}
                    className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">Назад в каталог</span>
                </button>
                
                <div className="ml-auto flex items-center gap-6">
                    <span className="text-sm font-black italic tracking-tighter text-2xl text-blue-600">LIB TECH</span>
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Сол тарап: Сүрөт бөлүмү */}
                <div className="lg:w-3/5 p-6 lg:p-12 flex flex-col items-center gap-8 bg-blue-50/30">
                    <div className="w-full flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]">
                        <div className="bg-white rounded-3xl p-6 lg:p-10 relative shadow-sm border border-blue-100 flex items-center justify-center w-full max-w-md mx-auto">
                            <img 
                                src={selectedProduct.img} 
                                alt={selectedProduct.title} 
                                className="max-h-[450px] lg:max-h-[550px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                            />
                            
                            {selectedProduct.discount && (
                                <div className="absolute top-4 left-4 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-lg rotate-12 shadow-xl border-4 border-white z-10">
                                    {selectedProduct.discount}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Кичинекей сүрөттөр (thumbnails) */}
                    <div className="flex gap-4 overflow-x-auto pb-4 w-full justify-center">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="min-w-[100px] h-[120px] bg-white rounded-2xl p-2 border border-blue-100 cursor-pointer hover:border-blue-600 transition-all shadow-sm">
                                <img src={selectedProduct.img} alt="thumb" className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Оң тарап: Маалымат бөлүмү */}
                <div className="lg:w-2/5 p-6 lg:p-16 flex flex-col bg-white">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">New Collection</span>
                            <div className="flex text-blue-400 text-sm">★★★★★ <span className="text-blue-300 ml-2">(42 отзыва)</span></div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black uppercase leading-none tracking-tighter text-blue-900 mb-6">
                            {selectedProduct.title}
                        </h1>
                        <p className="text-blue-400 text-sm leading-relaxed max-w-md">
                            Профессиональный сноуборд для фристайла и паудера. Технология Magne-Traction обеспечивает невероятный контроль кантов в любых условиях.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mb-12">
                        <div className="flex flex-col">
                            <span className="text-sm text-blue-300 font-bold uppercase tracking-widest">Цена:</span>
                            <span className="text-5xl font-black text-blue-600 tracking-tighter">{selectedProduct.price}</span>
                        </div>
                        {selectedProduct.oldPrice && (
                            <div className="flex flex-col opacity-40">
                                <span className="text-sm font-bold uppercase tracking-widest text-blue-300">Раньше:</span>
                                <span className="text-2xl font-bold line-through text-blue-900">{selectedProduct.oldPrice}</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-10 mb-12">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Выберите размер (ростовка)</p>
                            <div className="grid grid-cols-4 gap-3">
                                {['152', '155', '158', '161W'].map((size, i) => (
                                    <button key={i} className={`py-4 rounded-xl font-bold border-2 transition-all ${size === '158' ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' : 'border-blue-50 text-blue-600 hover:border-blue-600'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button className="w-full bg-blue-600 text-white py-6 rounded-2xl text-xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-10 border-t border-blue-50">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Доставка</span>
                            <p className="text-sm font-bold text-blue-600 italic">Бесплатно по РФ</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Гарантия</span>
                            <p className="text-sm font-bold text-blue-600 italic">2 года от производителя</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}  
            <div className="flex justify-center mt-16">
                <Link to="/catalog"> 
                <button className="bg-blue-500 rounded-2xl text-white px-16 py-4 font-bold uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            Показать больше
        </button>
                </Link>
            </div>
        </section>
    );
};

export default Card;