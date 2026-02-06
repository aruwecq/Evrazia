import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../ui/banner/Banner';
import Icons from '../../ui/icons/Icons';
import img1 from '../../img/hotel (1).png';
import img2 from '../../img/hotel (2).png'; 
import img3 from '../../img/hotel (3).png'; 

function Accommodation() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <Banner />

            {/* ASOSIY KONTEYNER */}
            <section className="max-w-7xl mx-auto px-4 mt-16 space-y-24">

                {/* 1-BLOK: КОРПУС "ГОРОД" */}
                <div>
                    <h2 className="text-[32px] font-black uppercase text-[#009EE3] mb-10">
                        Гостиница "Евразия" - корпус "Город"
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-1/2">
                            <img src={img1} alt="Hotel City" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <p className="text-[#009EE3] font-medium text-sm">10 минут на автобусе или автомобиле</p>
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A]">КОРПУС "ГОРОД"</h3>
                            <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
                                <p>Гости размещаются по 2, 3 и 4 человека в номере. В каждой комнате 2,3 кровати 1,5 спальные, большой шкаф, прихожая.</p>
                                <p>В каждом номере - душ, раковина, санузел. Расположен в 10 минутах от территории в городе Куса.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-6">
                                <button className="bg-[#009EE3] text-white px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#0087c2] transition-all">
                                    Забронировать
                                </button>
                                <Link to="/hotel" className="border-2 border-[#009EE3] text-[#009EE3] px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#f0f9ff] transition-all">
                                    Подробнее об отеле
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2-BLOK: КОРПУС "ГОРНЫЙ" */}
                <div className="pt-10 border-t border-gray-100">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-1/2">
                            <img src={img2} alt="Hotel Mountain" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <p className="text-[#009EE3] font-medium text-sm">600 метров от подъемника</p>
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A]">КОРПУС "ГОРНЫЙ"</h3>
                            <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
                                <p>В гостиничном комплексе (600 метров от подъемника и сервисного здания) мы можем предложить размещение в 54 двухместных, 12 одноместных и 12 спортивных номерах.</p>
                            </div>
                            <div className="flex pt-6">
                                <button className="bg-[#009EE3] text-white px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#0087c2] transition-all">
                                    Забронировать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3-BLOK: КОРПУС "ЛЕСНОЙ" */}
                <div className="pt-10 border-t border-gray-100">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-1/2">
                            <img src={img3} alt="Hotel Forest" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <p className="text-[#009EE3] font-medium text-sm">гостевой домик, 2 километра от подъемника</p>
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1A1A1A]">КОРПУС "ЛЕСНОЙ"</h3>
                            <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
                                <p>Также для размещения предлагается гостевой домик (2 км от подъемника и сервисного здания) для компаний до 16 человек.</p>
                            </div>
                            <div className="flex pt-6">
                                <button className="bg-[#009EE3] text-white px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#0087c2] transition-all">
                                    Забронировать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* INFO SECTION */}
            <section className="max-w-5xl mx-auto px-4 py-24 text-center space-y-12">
                <div className="pt-10 border-t border-gray-100 space-y-6">
                    <p className="text-[#009EE3] font-medium uppercase tracking-widest text-sm">
                        Заселение в гостиницу производится только при предъявлении паспорта.
                    </p>
                    <h3 className="text-2xl md:text-4xl font-black text-[#1A1A1A] uppercase leading-snug">
                        Обращаем Ваше внимание на то, что для <br />
                        постояльцев гостиницы действуют <br />
                        специальные тарифы на ски-пасс.
                    </h3>
                    <p className="text-gray-400 font-medium text-lg italic">
                        Бронирование осуществляется по предоплате.
                    </p>
                </div>
            </section>

            <Icons />
        </div>
    );
}

export default Accommodation;