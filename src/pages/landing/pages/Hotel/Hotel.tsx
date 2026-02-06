import React from 'react';
import Banner from '../../ui/banner/Banner';
import hotelImage from '../../img/hotel (1).png';
import Icons from '../../ui/icons/Icons';
import icons from '../../img/iconsText.svg'
import { Link } from 'react-router-dom';

interface RoomRate {
    type: string;
    guests: number;
    price: string;
}

const Hotel: React.FC = () => {
    const roomRates: RoomRate[] = [
        { type: 'Стандарт двухместный', guests: 2, price: '1600 руб.' },
        { type: 'Стандарт одноместный', guests: 1, price: '800 руб.' },
        { type: 'Эконом (4-5 местный)', guests: 4, price: '400 руб.' },
    ];



    return (
        <div className="bg-white">
            <Banner />

            <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans">
                <h1 className="text-[#0093DD] text-3xl md:text-4xl font-extrabold mb-10">
                    Отель "Евразия" - корпус Горный
                </h1>
                
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
                            <img
                                src={hotelImage}
                                alt="Отель Евразия корпус Горный"
                                className="w-full h-auto object-cover min-h-[400px]"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider mb-4 block">
                            В 600 метрах от подъемnika и сервисного здания
                        </span>
                        <h2 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.1] mb-8">
                            Корпус "Горный" находится на территории курорта "Евразия"
                        </h2>
                        <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
                            <p>
                                В гостиничном комплексе мы можем предложить размещение в 54 двухместных,
                                12 одноместных и 12 спортивных номерах.
                            </p>
                            <p className="font-bold text-[#1A1A1A]">
                                У подножья горы "Копанец"
                            </p>
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <a href="#" className="inline-flex items-center text-[#0093DD] font-bold text-lg hover:text-[#007bbd] transition-colors group">
                                Другие места размещения <span className="ml-2"><img src={icons} alt="Иконка" /></span>
                            </a>
                        </div>
                    </div>
                </div>

                <h3 className="text-[#0093DD] text-lg mt-16 font-bold mb-8">
                    Прейскурант на услуги отеля
                </h3>

                <div className="overflow-x-auto mb-10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-400 text-[11px] uppercase tracking-wider">
                                <th className="py-4 font-normal">Тип номера</th>
                                <th className="py-4 font-normal text-center">Основное кол-во гостей</th>
                                <th className="py-4 font-normal text-right">Стоимость проживания</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {roomRates.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-5 flex items-center">
                                        <div className="w-9 h-9 rounded-full bg-[#ADD8E6] mr-4 opacity-70"></div>
                                        <span className="text-[#1A1A1A] font-medium text-[15px]">{item.type}</span>
                                    </td>
                                    <td className="py-5 text-center text-gray-600 text-[15px]">{item.guests}</td>
                                    <td className="py-5 text-right font-bold text-[#667085] text-[15px]">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- NARXLAR IZOHI (image_5fb9f8.png) --- */}
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                    <p className="text-[#0093DD] text-sm font-bold">
                        Стоимость при 2-х местном размещении (при одноместном размещении оплата за 2-х человек).
                    </p>
                    <h2 className="text-[#1A2B49] text-3xl md:text-[42px] font-black uppercase mb-8">
                        С 1 МАЯ ПО 1 НОЯБРЯ 2022 ГОДА
                    </h2>
                    <div className="text-gray-500 text-[15px] leading-relaxed space-y-4">
                        <p>
                            Стоимость места в спорт номере при минимальном количестве 3 человек, 400 рублей с человека;
                            Стоимость места в спорт номере при минимальном количестве 2 человек, 600 рублей с человека;
                            Стоимость места в спорт номере при минимальном количестве 1 человек, 1200 рублей с человека.
                        </p>
                        <p>(1) - Стоимость номера "эконом" указана за койко-место без завтрака.</p>
                        <p>(2) - В стоимость номера включен завтрак, за исключением номеров эконом-класса.</p>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <Link to="/hotel/rooms" className=" text-[#0093DD]  text-3xl rounded-lg font-medium hover:text-[#007bbd] transition-colors">
                    Посмотреть Гостевой 
                    </Link>
                    <Link to="/hotel/booking" className=" text-[#0093DD]  text-3xl rounded-lg font-medium hover:text-[#007bbd] transition-colors">
                    Посмотреть Гостница
                    </Link>
                </div>

                <Icons />
                
            </section>
        </div>
    );
};

export default Hotel;