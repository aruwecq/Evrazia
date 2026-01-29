import React from 'react';
import Banner from '../../ui/banner/Banner';

// Swiper kutubxonasi slider uchun
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import icons1 from '../../img/icons8-вконтакте-144 2.svg'
import icons2 from '../../img/icons8-ютуб-100 2.svg'
import icons3 from '../../img/icons8-yandex-zen-100 2.svg'

// Rasmlar
import cafeImg1 from '../../img/Image (6).png';
import cafeImg2 from '../../img/Column.png';
import cafeImg3 from '../../img/Image (7).png';
import cafeImg4 from '../../img/Image (8).png';
import cafeImg5 from '../../img/Image (9).png';
import cafeImg6 from '../../img/Image (10).png';
import cafeImg7 from '../../img/Image (11).png';

function Cafe() {
    // Slider uchun rasmlar ro'yxati
    const galleryImages = [cafeImg1, cafeImg3, cafeImg4, cafeImg5, cafeImg6, cafeImg7];

    return (
        <div className="bg-white pb-20">
            <Banner />

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <p className="text-center text-[#00AEEF] font-medium mb-4">Уютная атмосфера и обильный выбор блюд</p>
                <h1 className="text-4xl font-black text-center text-[#2D2D2D] mb-16">Кафе-ресторан</h1>

                {/* 1-SEKSIYA */}
                <div className="flex flex-col md:flex-row gap-10 mb-24">
                    <div className="flex-1">
                        <div className="rounded-3xl overflow-hidden mb-8 h-[200px]">
                            <img src={cafeImg1} alt="Cafe interior" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-2xl font-black text-[#00AEEF] leading-tight mb-6">
                            Кафе-ресторан «Евразия» самый настоящий <br />
                            “гастрономический рай” con обильным выбором блюд!
                        </h2>
                        <div className="text-[#555] text-[15px] leading-relaxed space-y-4">
                            <p>В среду , четверг, пятницу, субботу и воскресенье в кафе работает линия "быстрого питания", где без потери времени на отдых и, поверьте, совсем не дорого вы сможете попробовать легкие салаты, аппетитное второе, свежую выпечку и горячий чай. Средний чек в кафе составляет 350 рублей. <br />
                                <br />
                                По выходным в кафе действует меню ресторана. Интерьер, доброжелательный персонал, лакомое меню, доступные цены удовлетворят даже самых искушенных посетителей.</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="rounded-[40px] overflow-hidden h-full min-h-[400px]">
                            <img src={cafeImg2} alt="Food display" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* 2-SEKSIYA: Korporativlar */}
                <div className="flex flex-col md:flex-row  items-start mb-24">
                    <div className="flex-1">
                        <div className="rounded-[30px] overflow-hidden w-130 h-160">
                            <img src={cafeImg3} alt="Corporate event" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-black text-[#00AEEF] mb-6">Корпоративы и банкеты</h2>
                        <div className="text-[#444] text-[15px] leading-relaxed space-y-5 font-medium">
                            <p>Праздники зачастую сопровождаются корпоративными мероприятиями с коллегами, партнерами, друзьями и членами семьи. Мы поможем Вам в организации этих мероприятий. <br /> <br />
                                Загородный курорт «Евразия» приглашает Вас провести незабываемый день за городом или провести банкет в честь Вашего праздника. Комфортные условия и гостеприимная атмосфера курорта дадут Вам возможность в полной мере испытать праздничные эмоции. Проведение корпоративных мероприятий от профессионалов гарантирует Вам неповторимый отдых. <br /> <br />
                                Центр активного отдыха «Евразия» предоставляет все условия для хорошего отдыха большой компанией и дружным коллективом. <br /> <br />
                                К услугам клиентов курорта: кафе-ресторан и гостиница, горнолыжные склоны, тюбинговая трасса, каток, прокат снаряжения, детский клуб и опытные инструкторы для любителей активных видов спорта и многое другое. <br /> <br />
                                Центр активного отдыха «Евразия» предлагает оптимальные условия для Вашего комфортного проживания и сбалансированного питания. К Вашим услугам предоставляется гостиничный комплекс у подножья склонов и ресторан в стиле альпийского шале. Правильное питание – залог хорошего самочувствия. На выбор гостей наши кулинарные мастера предложат меню на любой вкус.</p>
                        </div>
                    </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="text-center mt-20 border-t pt-16 border-gray-100">
                    <p className="text-[#00AEEF] font-bold mb-8 text-lg">Забронировать банкет и задать любые вопросы Вы можете по</p>
                    <div className="text-4xl font-[1000] text-[#2D2D2D] space-y-4">
                        <p className="underline underline-offset-8 decoration-gray-200">+7 (3513) 79-09-79;</p>
                        <p className="underline underline-offset-8 decoration-gray-200">+7 (922) 7-288-288;</p>
                    </div>
                    <p className="text-gray-400 mt-10 font-medium text-lg">mail@euroasia.su</p>
                </div>

                {/* NARX VA TUGMA */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 rounded-2xl mb-24 border border-gray-100">
                    <div className="text-left">
                        <p className="text-[17px] font-bold text-[#00AEEF]">
                            Стоимость* проведения банкета <span className="text-gray-500 font-normal">— от 1 500 рублей/персона.</span>
                        </p>
                        <p className="text-[12px] text-gray-400 mt-2">*В стоимость не включено использование музыкального и светового оборудования.</p>
                    </div>
                    <button className="mt-6 md:mt-0 px-10 py-3 border-2 border-[#00AEEF] text-[#00AEEF] font-bold rounded-full hover:bg-[#00AEEF] hover:text-white transition-all">
                        Забронировать
                    </button>
                </div>


                <div className="flex flex-col md:flex-row  items-center mb-32">
                    <div className="flex-1">
                        <div className="rounded-[2 0px] ml-20 overflow-hidden ">
                            <img src={cafeImg4} alt="Night event" className="w-100 h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-black text-[#00AEEF] mb-6">Вечерние мероприятия</h2>
                        <p className="text-[#555] mb-4">Сказочная атмосфера с наступлением вечера не утихает, а отнють, набирает обороты и со склонов переносится в уютное кафе "Евразия". <br /> <br />
                            Каждый вечер субботы, а также в праздничные дни, на территории кафе "Евразия" проводятся музыкальные и развлекательные программы с участием приглашенных артистов, ди-джеев и ведущих. <br /> <br />
                        </p>
                        <p className="font-bold text-[#00AEEF]">Вход - свободный.</p>

                        <h2 className="text-2xl font-bold mt-5 mb-5 text-[#00AEEF]">Комплексное меню для организованных групп (3-х разовое питание)</h2>

                        <p>По согласованию.</p>
                    </div>
                </div>

               {/* 4-SEKSIYA: Grill bar (RASM KICHRAYTIRILDI) */}
                <div className="mb-32 max-w-5xl mx-auto">
                    <p className="text-center text-[#00AEEF] font-bold italic mb-2 text-sm">В бар ходят отдохнуть и расслабиться</p>
                    <h2 className="text-4xl font-[1000] text-center text-[#2D2D2D] mb-12 uppercase">Гриль-бар</h2>
                    
                    <div className="block overflow-hidden">
                        {/* Rasm: sezilarli darajada kichraytirildi (350px) va float berildi */}
                        <div className="float-left mr-10 mb-4 w-full md:w-[350px]">
                            <div className="rounded-[40px] overflow-hidden shadow-md">
                                <img 
                                    src={cafeImg5} 
                                    alt="Grill bar" 
                                    className="w-full h-[280px] object-cover" 
                                />
                            </div>
                        </div>

                        {/* Matn: Rasm atrofini chiroyli o'rab turadi */}
                        <div className="text-[#555] text-[16px] leading-relaxed font-medium">
                            <p className="mb-6">Мы знаем, что горнолыжный центр без хорошего бара – это как коньяк без лимона… вкус есть, а послевкусие пропало… Мы знаем, что правильная еда – это честная еда. Вкус должен вставлять, завораживать!</p>
                            <p className="mb-6">Наш шеф-повар понимает вкус жизни и знает, как порадовать самых искушенных и требовательных гостей. Наше меню содержит блюда, которые привлекут веселую компанию голодных друзей или порадуют семейство любителей шашлыка. Мы знаем, чем удивить влюбленную парочку в поисках романтического уединения или охотников до приключений в пятницу вечером.</p>
                            <p>В бар ходят отдохнуть и расслабиться. Весь пар предлагаем выпустить на трассе, здесь вам не придется напрягаться – мы продумали для Вас всё: удобные столики, приятные цены, внимательный персонал.</p>
                        </div>
                    </div>
                </div>

                {/* --- AVTOMATIK SLIDER (RASMLAR KATTAYTIRILDI) --- */}
                <div className="mb-24">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30} // Masofa ko'paytirildi
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2.2 }, // Rasmlar ekranda katta ko'rinishi uchun
                        }}
                        className="rounded-[40px] overflow-hidden !pb-12"
                    >
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                {/* Balandlik 500px qilib kattaytirildi */}
                                <div className="h-[450px] md:h-[550px] rounded-[50px] overflow-hidden shadow-xl">
                                    <img 
                                        src={img} 
                                        alt={`Slide ${index}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 mt-16">
                    <a href="#" className="w-14 h-14 bg-[#00AEEF] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                        <img src={icons1} alt="VK" className="w-7 h-7 object-contain brightness-0 invert" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-[#00AEEF] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                        <img src={icons2} alt="YouTube" className="w-7 h-7 object-contain brightness-0 invert" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-[#00AEEF] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                        <img src={icons3} alt="Yandex Zen" className="w-7 h-7 object-contain brightness-0 invert" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cafe;