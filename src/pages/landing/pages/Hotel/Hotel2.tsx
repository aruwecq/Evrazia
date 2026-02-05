import React from 'react';
import Banner from '../../ui/banner/Banner';
import icons from '../../img/iconsText.svg'
import Icons from '../../ui/icons/Icons';
import hotel2 from '../../img/hotel2.png'; // Rasm nomi kodingizdagidek saqlandi

interface PricingRow {
    type: string;
    guests: string;
    price: string;
}

const Hotel2 = () => {
    // image_5f359e.png dagi jadval ma'lumotlari asosida (Город korpusi uchun ham o'xshash)
    const pricingData: PricingRow[] = [
        { type: 'Стандарт двухместный', guests: '2', price: '1600 руб.' },
        { type: 'Стандарт одноместный', guests: '1', price: '800 руб.' },
        { type: 'Эконом (4-5 местный)', guests: '4', price: '400 руб.' },
    ];

    return (
        <div className="bg-white">
            <Banner />
            
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">
                {/* Sahifa sarlavhasi */}
                <div className="mb-10">
                    <h1 className="text-[#0093DD] text-3xl md:text-[40px] font-extrabold uppercase tracking-tight">
                        Гостиница "Евразия" - корпус "Город"
                    </h1>
                </div>

                {/* Asosiy ma'lumot qismi */}
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-20">
                    {/* Chap tomon: Rasm */}
                    <div className="w-full lg:w-[50%]">
                        <div className="rounded-[30px] overflow-hidden shadow-sm">
                            <img
                                src={hotel2}
                                alt="Корпус Город"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* O'ng tomon: Tavsif */}
                    <div className="w-full lg:w-[50%] flex flex-col">
                        <span className="text-gray-400 text-xs md:text-sm uppercase mb-4 leading-relaxed">
                            в 8 минутах на автобусе или на машине <br /> от подъемника и сервисного здания
                        </span>

                        <h2 className="text-[#1A1A1A] text-3xl md:text-[46px] font-bold leading-[1.1] mb-8">
                            Гостиница "Евразия" <br /> – корпус "Город"
                        </h2>

                        <div className="space-y-5 text-[#333333] text-base md:text-[17px] leading-relaxed mb-8">
                            <p>
                                Корпус "Город" находится в городе Куса, в 8 минутах на автобусе или на машине от подъемника и сервисного здания. 
                                Гости размещаются по 2, 3 и 4 человека в номере.
                            </p>
                            <p className="font-bold text-[#1A1A1A]">
                                В каждой комнате 2,3 кровати 1,5 спальные (в 4-х местном номере 2 двухъярусные кровати), большой шкаф, прихожая.
                            </p>
                            <p>
                                В каждом номер – душ, раковина, санузел. Корпус "Город" расположен в 8-10 минутах от территории в городе Куса, ул. Декабристов, дом 9. 
                                Доставка осуществляется на 35-местном автобусе утром, днем и вечером.
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <a href="#" className="inline-flex items-center text-[#0093DD] font-bold text-lg hover:underline transition-all">
                                Другие места размещения                                 <span className="ml-2"><img src={icons} alt="Иконка" /></span>

                            </a>
                        </div>
                    </div>
                </div>

                {/* --- JADVAL QISMI (image_5f359e.png dagi dizayn asosida) --- */}
                <div className="mt-20">
                    <h3 className="text-[#0093DD] text-xl font-bold mb-8">
                        Прейскурант на услуги отеля
                    </h3>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-left border-none">
                            <thead>
                                <tr className="text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-50">
                                    <th className="py-4 font-normal">Тип номера</th>
                                    <th className="py-4 font-normal text-center">Основное кол-во гостей</th>
                                    <th className="py-4 font-normal text-right">Стоимость проживания</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {pricingData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-6 flex items-center">
                                            <div className="w-10 h-10 rounded-full bg-[#ADD8E6] mr-4 opacity-60"></div>
                                            <span className="text-[#1A1A1A] font-bold text-[16px]">{item.type}</span>
                                        </td>
                                        <td className="py-6 text-center text-gray-600 text-[16px]">{item.guests}</td>
                                        <td className="py-6 text-right font-bold text-[#1A1A1A] text-[16px]">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* --- QO'SHIMCHA MA'LUMOTLAR (image_5fb9f8.png) --- */}
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <p className="text-[#0093DD] font-bold text-sm">
                            Стоимость при 2-х местном размещении (при одноместном размещении оплата за 2-х человек).
                        </p>
                        
                        <h2 className="text-[#1A2B49] text-3xl md:text-[40px] font-black uppercase tracking-tight">
                            С 1 МАЯ ПО 1 НОЯБРЯ 2022 ГОДА
                        </h2>

                        <div className="text-[#333333] text-sm md:text-base leading-relaxed space-y-4">
                            <p>
                                Стоимость места в спорт номере при минимальном количестве 3 человек, 400 рублей с человека; 
                                Стоимость места в спорт номере при минимальном количестве 2 человек, 600 рублей с человека; 
                                Стоимость места в спорт номере при минимальном количестве 1 человек, 1200 рублей с человека.
                            </p>
                            <p className="text-gray-500 italic">
                                (1) - Стоимость номера "эконом" указана за койко-место без завтрака.
                            </p>
                            <p className="text-gray-500 italic">
                                (2) - В стоимость номера включен завтрак, за исключением номеров эконом-класса.
                            </p>
                        </div>
                    </div>
                </div>

                <Icons />
            </section>
        </div>
    );
};

export default Hotel2;