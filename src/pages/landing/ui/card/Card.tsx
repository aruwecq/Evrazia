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
    // Ma'lumotlarni ko'paytirdik (Karusel ishlashi uchun kamida 5-6 ta bo'lishi kerak)
    const [products] = useState<Product[]>([
        { id: 1, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 2, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '17392 ₽', oldPrice: '34392 ₽', discount: '-50%' },
        { id: 3, img: lib3, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 4, img: lib4, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '34392 ₽' },
        { id: 5, img: lib1, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '25000 ₽' },
        { id: 6, img: lib2, brand: 'LIB TECH', title: 'Мужской Сноуборд', price: '12000 ₽' },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorites, setFavorites] = useState<number[]>([]);

    // Bir vaqtning o'zida nechta karta ko'rinishi (Desktopda 4 ta)
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

            {/* Karusel asosi */}
            <div className="relative overflow-visible">

                {/* Chapga tugmasi - endi konteyner ichida va aniq ko'rinadi */}
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

                {/* Kartalar sig'adigan joy */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {products.map((item) => (
                            <div key={item.id} className="min-w-[25%] px-3 box-border">
                                <div className="bg-[#F8F8F8] relative rounded-lg p-8 h-[380px] flex items-center justify-center transition-transform hover:shadow-md">

                                    {/* Yulduzcha */}
                                    <button
                                        onClick={() => toggleFavorite(item.id)}
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

                                    <img src={item.img} alt={item.title} className="max-h-full w-auto object-contain" />
                                </div>

                                <div className="mt-5 space-y-1">
                                    <h3 className="font-bold text-lg text-[#1A1A1A]">{item.brand}</h3>
                                    <p className="text-gray-500 text-sm">{item.title}</p>
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

                {/* O'ngga tugmasi */}
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

            <div className="flex justify-center mt-16">
                <Link to="/catalog"> <button className="bg-black text-white px-16 py-4 font-bold uppercase tracking-[0.2em] hover:bg-[#333] transition-all active:scale-95">
                    Показать больше
                </button> </Link>
            </div>
        </section>
    );
};

export default Card;