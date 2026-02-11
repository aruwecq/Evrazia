import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/navigation';

// Rasmlar importi (Siz ko'rsatgan fayl nomlari bo'yicha)
import SnowboardImg from '../../img/image 9.png';
import BindingImg from '../../img/image 60.png';
import ShoesImg from '../../img/image 61.png';
// Qolgan rasmlarni ham shu tartibda qo'shishingiz mumkin

function Catalog() {
    const catalogData = [
        { id: 1, name: "Сноуборды", img: SnowboardImg },
        { id: 2, name: "Крепления", img: BindingImg },
        { id: 3, name: "Обувь", img: ShoesImg },
        { id: 4, name: "Наборы", img: SnowboardImg },
        { id: 5, name: "Куртки", img: BindingImg },
        { id: 6, name: "Штаны", img: ShoesImg },
        { id: 7, name: "Шлемы", img: SnowboardImg },
        { id: 8, name: "Очки", img: BindingImg },
        { id: 9, name: "Перчатки", img: ShoesImg },
    ];

    return (
        <div className="bg-white py-10 relative group">
            <div className="max-w-7xl mx-auto px-4 relative">
                
                <Swiper
                    modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 8 },
                    }}
                    className="py-4"
                >
                    {catalogData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col items-center cursor-pointer group/item">
                                {/* Dumaloq oq fon ichidagi rasm */}
                                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-[#F7F7F7] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/item:scale-110">
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        className="w-[70%] h-[70%] object-contain"
                                    />
                                </div>
                                {/* Kategoriya nomi */}
                                <span className="text-[14px] font-medium text-[#2D2D2D] text-center">
                                    {item.name}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Chap tomondagi strelka */}
                <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {/* O'ng tomondagi strelka */}
                <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

            </div>
        </div>
    );
}

export default Catalog;