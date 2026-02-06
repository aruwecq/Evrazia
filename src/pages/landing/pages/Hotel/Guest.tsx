import React from 'react';
import Banner from '../../ui/banner/Banner';
import icons from '../../img/iconsText.svg'
import guestHouseImg from '../../img/guest.png';
import Icons from '../../ui/icons/Icons';

interface PricingRow {
    type: string;
    guests: string;
    weekdayPrice: string;
    weekendPrice: string;
}

const Guest: React.FC = () => {
    const pricingData: PricingRow[] = [
        { type: 'Комната', guests: '2-3', weekdayPrice: '2500 руб.', weekendPrice: '3850 руб.' },
        { type: 'Апартамент', guests: '7', weekdayPrice: '6000 руб.', weekendPrice: '9800 руб.' },
        { type: 'Гостевой дом', guests: '14', weekdayPrice: '11400 руб.', weekendPrice: '18500 руб.' },
    ];

    return (
        <div className="bg-white">
            <Banner />
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">

                <div className="mb-10">
                    <h1 className="text-[#0093DD] text-3xl md:text-[40px] font-extrabold uppercase tracking-tight">
                        Гостевой домик ЦАО "Евразия"
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-20">
                    <div className="w-full lg:w-[55%]">
                        <div className="rounded-[30px] overflow-hidden shadow-lg">
                            <img
                                src={guestHouseImg}
                                alt="Гостевой домик"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-[45%] flex flex-col">
                        <span className="text-gray-400 text-xs md:text-sm uppercase mb-4 leading-relaxed">
                            сосновом бору в 2 км от подъемnika <br /> и сервисного здания
                        </span>

                        <h2 className="text-[#1A1A1A] text-3xl md:text-[46px] font-bold leading-[1.1] mb-8">
                            Гостевой домик <br /> ЦАО "Евразия"
                        </h2>

                        <div className="space-y-5 text-[#333333] text-base md:text-[17px] leading-relaxed mb-8">
                            <p>
                                Гостевой доmiк расположился в тихом, сосновом бору в 2 км от подъемника и сервисного здания.
                                Идеальный вариант для отдыха всей семьей или большой компанией до 16 человек.
                            </p>
                            <p>
                                Домик разделен на 2 апартамента, каждый из которых вмещает до 8 человек.
                                Входы в апартаменты раздельные, и соседи ни как не потревожат ваш отдых.
                                В каждом апартаменте 3 спальные комнаты, кухонная зона, душевая кабинка и санузел.
                            </p>
                            <p>
                                Период размещения от 2-х суток. Стоимость указана за 1 сутки.
                            </p>
                            <p className="font-bold text-[#1A1A1A]">
                                Идеальный вариант для отдыха всей семьей
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <a
                                href="#"
                                className="inline-flex items-center text-[#0093DD] font-bold text-lg hover:text-[#007bbd] transition-colors"
                            >
                                Другие места размещения
                                <span className="ml-2"><img src={icons} alt="Иконка" /></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- NARXLAR JADVALI (image_ccc383.png) --- */}
                <div className="mt-20">
                    <h3 className="text-[#0093DD] text-lg font-bold mb-8">
                        Прейскурант на услуги отеля
                    </h3>

                    <div className="overflow-x-auto mb-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-400 text-[11px] uppercase tracking-wider">
                                    <th className="py-4 font-normal">Тип размещения</th>
                                    <th className="py-4 font-normal text-center">Основное кол-во гостей</th>
                                    <th className="py-4 font-normal text-center">Стоимость проживания (будни)</th>
                                    <th className="py-4 font-normal text-right">Стоимость проживания (выходные)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {pricingData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-6 flex items-center">
                                            <div className="w-10 h-10 rounded-full bg-[#ADD8E6] mr-4 opacity-70"></div>
                                            <span className="text-[#1A1A1A] font-bold text-[16px]">{item.type}</span>
                                        </td>
                                        <td className="py-6 text-center text-gray-600 text-[16px]">{item.guests}</td>
                                        <td className="py-6 text-center text-[#1A1A1A] text-[16px]">{item.weekdayPrice}</td>
                                        <td className="py-6 text-right font-bold text-[#1A1A1A] text-[16px]">{item.weekendPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                        <div className="py-10 text-center space-y-4 bg-transparent">
                            <p className="text-[#0093DD] font-bold text-sm md:text-[15px]">
                                Стоимость дополнительного размещения за 1 человека - 500 рублей / сутки.
                            </p>
                            <h2 className="text-[#1A2B49] text-3xl md:text-[48px]  leading-tight tracking-tight">
                                При бронировании за 2 недели до заезда, <br />
                                скидка 10% от стоимости*.
                            </h2>
                            <div className="pt-4">
                                <p className="text-gray-400 text-[15px]">
                                    Стоимость дополнительного размещения за 1 человека - 500 рублей / сутки.
                                </p>
                                <p className="text-[#1A2B49] text-base mt-2">
                                    Праздничные дни: 1-8 января 2023 / 23-25 февраля 2023
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
            <Icons />
        </div>
    );
};

export default Guest;