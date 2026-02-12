import { Link } from 'react-router-dom';
import Logo from '../../img/Group.svg';

function Footer() {
    return (
        <footer className="bg-[#D9D9D9] text-[#4B5563] pt-10 pb-12 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. TEPADAGI BLOK: Logo va Kontaktlar (Flex bilan ikki chekkada) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-300 pb-8">
                    {/* Logo qismi */}
                    <div className="mb-6 md:mb-0">
                        <img src={Logo} alt="Евразия" className="h-16 md:h-20 object-contain" />
                    </div>

                    {/* Kontaktlar va Schema qismi */}
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-6 text-[13px] font-bold">
                            <Link to="/map" className="hover:text-black">Схема проезда</Link>
                            <div className="flex items-center gap-4">
                                <a href="tel:+79227288288" className="hover:text-black flex items-center gap-1">
                                     +79227288288
                                </a>
                                <a href="tel:+73513790979" className="hover:text-black flex items-center gap-1">
                                     +73513790979
                                </a>
                            </div>
                        </div>
                        {/* Rasmdagi qizil nuqta */}
                    </div>
                </div>

                {/* 2. PASTKI BLOK: Linklar va Ma'lumotlar (Grid bilan) */}
                <div className="grid grid-cols-2 md:grid-cols-4">

                    {/* Ustun 1 */}
                    <div className="space-y-3 ml-10 text-[14px]">
                        <ul className="space-y-2">
                            <li><Link to="/services" className="hover:underline">Услуги</Link></li>
                            <li><Link to="/tracks" className="hover:underline">Трассы</Link></li>
                            <li><Link to="/cafe" className="hover:underline">Кафе</Link></li>
                            <li><Link to="/hotel" className="hover:underline">Гостиница</Link></li>
                            <li><Link to="/about" className="hover:underline">О комплексе</Link></li>
                        </ul>
                    </div>

                    {/* Ustun 2 */}
                    <div className="space-y-3 text-[14px]">
                        <ul className="space-y-2">
                            <li><Link to="/news" className="hover:underline">Новости</Link></li>
                            <li><Link to="/tariffs" className="hover:underline">Тарифы</Link></li>
                            <li><Link to="/rent" className="hover:underline">Прокат</Link></li>
                            <li><Link to="/tours" className="hover:underline">Акции и туры</Link></li>
                            <li><Link to="/prices" className="hover:underline">Цены на услуги</Link></li>
                            <li><Link to="/map" className="hover:underline">Схема проезда</Link></li>
                        </ul>
                    </div>

                    {/* Ustun 3 */}
                    <div className="space-y-3 text-[14px]">
                        <ul className="space-y-2">
                            <li><Link to="/tours-list" className="hover:underline">Туры</Link></li>
                            <li><Link to="/accommodation" className="hover:underline">Проживание</Link></li>
                            <li><Link to="/booking" className="hover:underline">Забронировать номер</Link></li>
                            <li><Link to="/kids" className="hover:underline">Детям</Link></li>
                            <li><Link to="/promo" className="hover:underline">Акции</Link></li>
                            <li><Link to="/webcams" className="hover:underline">Веб-камеры</Link></li>
                        </ul>
                    </div>

                    {/* Ustun 4: Ish vaqti va Kontaktlar */}
                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-gray-700 text-[14px] mb-2 uppercase tracking-tighter">Режим работы:</p>
                            <p className="text-[14px]">Пн-пт: 10.00-21.00</p>
                            <p className="text-[14px]">Сб-вс: 9.00-21.00</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-[14px] mb-2 uppercase tracking-tighter">Контакты</p>
                            <p className="text-[11px] leading-tight text-gray-500 italic">
                                Всесезонный центр спорта и отдыха - находится в рекреационной зоне на границе с заповедниками «Таганай» и «Зюраткуль» всего в 30 минутах езды от Златоуста, и в 1,5 часах от Челябинска.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;