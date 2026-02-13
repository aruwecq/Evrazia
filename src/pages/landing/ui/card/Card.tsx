import { useState } from 'react';
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

    const getVisibleCards = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
        }
        return 4;
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

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
        <section className="max-w-7xl mx-auto px-4 sm:px-10 py-10 lg:py-20 relative">
            <h2 className="text-2xl sm:text-4xl font-black text-center mb-8 lg:mb-16 uppercase tracking-tight text-[#1A1A1A]">
                Новинки
            </h2>

            <div className="relative group">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute -left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 transition-all 
                    ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
                >
                    <svg width="24" height="40" viewBox="0 0 24 44" fill="none" className="stroke-black">
                        <path d="M22 2L2 22L22 42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {products.map((item) => (
                            <div key={item.id} className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-2 sm:px-3 box-border">
                                <div 
                                    onClick={() => setSelectedProduct(item)}
                                    className="bg-[#F8F8F8] relative rounded-lg p-4 sm:p-8 h-[300px] sm:h-[380px] flex items-center justify-center transition-transform hover:shadow-md cursor-pointer group"
                                >
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            toggleFavorite(item.id);
                                        }}
                                        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-sm"
                                    >
                                        <svg
                                            width="18" height="18" viewBox="0 0 24 24"
                                            fill={favorites.includes(item.id) ? "black" : "none"}
                                            stroke="black" strokeWidth="2"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </button>

                                    {item.discount && (
                                        <span className="absolute bottom-3 left-3 bg-[#FF5C5C] text-white text-[10px] font-bold px-2 py-1 rounded-sm">
                                            {item.discount}
                                        </span>
                                    )}

                                    <img src={item.img} alt={item.title} className="max-h-full w-auto object-contain transition-transform group-hover:scale-105" />
                                </div>

                                <div className="mt-4 sm:mt-5 space-y-1 cursor-pointer" onClick={() => setSelectedProduct(item)}>
                                    <h3 className="font-bold text-base sm:text-lg text-[#1A1A1A]">{item.brand}</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm truncate">{item.title}</p>
                                    <div className="flex gap-2 sm:gap-3 items-center pt-1">
                                        <span className={`font-bold text-base sm:text-lg ${item.discount ? 'text-[#FF5C5C]' : 'text-[#1A1A1A]'}`}>
                                            {item.price}
                                        </span>
                                        {item.oldPrice && (
                                            <span className="text-gray-400 line-through text-xs sm:text-sm">{item.oldPrice}</span>
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
                    className={`absolute -right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 transition-all 
                    ${currentIndex >= products.length - visibleCards ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
                >
                    <svg width="24" height="40" viewBox="0 0 24 44" fill="none" className="stroke-black">
                        <path d="M2 2L22 22L2 42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-white z-[200] overflow-y-auto">
                    <div className="max-w-[1440px] mx-auto min-h-screen relative flex flex-col">
                        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-[210] px-4 sm:px-6 py-4 flex items-center border-b border-blue-100">
                            <button 
                                onClick={() => setSelectedProduct(null)}
                                className="group flex items-center gap-2 text-blue-600"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                </div>
                                <span className="font-bold uppercase tracking-widest text-[10px] sm:text-xs">Назад</span>
                            </button>
                            
                            <div className="ml-auto flex items-center gap-4 sm:gap-6">
                                <span className="text-lg sm:text-2xl font-black italic text-blue-600">LIB TECH</span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="lg:w-3/5 p-4 sm:p-6 lg:p-12 flex flex-col items-center gap-6 lg:gap-8 bg-blue-50/30">
                                <div className="w-full flex justify-center items-center relative min-h-[300px] lg:min-h-[600px]">
                                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 lg:p-10 relative shadow-sm border border-blue-100 flex items-center justify-center w-full max-w-md mx-auto">
                                        <img 
                                            src={selectedProduct.img} 
                                            alt={selectedProduct.title} 
                                            className="max-h-[350px] lg:max-h-[550px] w-auto object-contain drop-shadow-2xl" 
                                        />
                                        {selectedProduct.discount && (
                                            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-sm sm:text-lg rotate-12 shadow-xl border-2 sm:border-4 border-white z-10">
                                                {selectedProduct.discount}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 w-full justify-start lg:justify-center px-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="min-w-[80px] sm:min-w-[100px] h-[100px] sm:h-[120px] bg-white rounded-xl p-2 border border-blue-100 shadow-sm">
                                            <img src={selectedProduct.img} alt="thumb" className="w-full h-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-2/5 p-6 lg:p-16 flex flex-col bg-white">
                                <div className="mb-6 lg:mb-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-blue-600 text-white px-2 py-1 text-[8px] sm:text-[10px] font-bold uppercase">New Collection</span>
                                        <div className="flex text-blue-400 text-xs sm:text-sm">★★★★★</div>
                                    </div>
                                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black uppercase leading-tight text-blue-900 mb-4 sm:mb-6">
                                        {selectedProduct.title}
                                    </h1>
                                    <p className="text-blue-400 text-xs sm:text-sm leading-relaxed max-w-md">
                                        Профессиональный сноуборд для фристайла и паудера. Технология Magne-Traction обеспечивает контроль кантов.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-6 mb-8 lg:mb-12">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-blue-300 font-bold uppercase">Цена:</span>
                                        <span className="text-3xl sm:text-5xl font-black text-blue-600 tracking-tighter">{selectedProduct.price}</span>
                                    </div>
                                    {selectedProduct.oldPrice && (
                                        <div className="flex flex-col opacity-40">
                                            <span className="text-[10px] font-bold uppercase text-blue-300">Раньше:</span>
                                            <span className="text-lg sm:text-2xl font-bold line-through text-blue-900">{selectedProduct.oldPrice}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6 sm:space-y-10 mb-8 lg:mb-12">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">Размер (ростовка)</p>
                                        <div className="grid grid-cols-4 gap-2 sm:gap-3">
                                            {['152', '155', '158', '161W'].map((size, i) => (
                                                <button key={i} className={`py-3 sm:py-4 rounded-xl font-bold border-2 text-xs sm:text-base ${size === '158' ? 'bg-blue-600 text-white border-blue-600' : 'border-blue-50 text-blue-600'}`}>
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-4 sm:py-6 rounded-2xl text-base sm:text-xl font-black uppercase tracking-widest active:scale-95 transition-all">
                                        Добавить в корзину
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-50">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] sm:text-[10px] font-black text-blue-300 uppercase">Доставка</span>
                                        <p className="text-xs sm:text-sm font-bold text-blue-600">Бесплатно</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[8px] sm:text-[10px] font-black text-blue-300 uppercase">Гарантия</span>
                                        <p className="text-xs sm:text-sm font-bold text-blue-600">2 года</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  

            <div className="flex justify-center mt-10 lg:mt-16">
                <Link to="/catalog" className="w-full sm:w-auto px-4"> 
                    <button className="w-full sm:w-auto bg-blue-500 rounded-2xl text-white px-8 lg:px-16 py-3 lg:py-4 font-bold uppercase tracking-widest text-xs sm:text-base hover:bg-blue-700 active:scale-95 transition-all">
                        Показать больше
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Card;    