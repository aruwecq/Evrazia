import { Link } from 'react-router-dom';

import Logo from '../../img/Group.svg';



function Footer() {

    return (

        <footer className="bg-gray-200 text-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-7">
                <div className="py-8">
                    <div className=" items-center gap-3 mb-10 ">
                        <div className=" border-gray-300   text-sm flex flex-col md:flex-row justify-between items-center gap-2">
                            <img src={Logo} alt="Евразия" className="h-14 mt-4" />
                            <div className="flex gap-4">
                                <p>Схема проезда</p>
                                <span>+7 922 728 82 88</span>
                                <span>+7 351 739 09 79</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between">

                        <div className='flex gap-30'>
                            <div>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/services" className="hover:text-blue-600">Услуги</Link></li>
                                    <li><Link to="/tracks" className="hover:text-blue-600">Трассы</Link></li>
                                    <li><Link to="/cafe" className="hover:text-blue-600">Кафе</Link></li>
                                    <li><Link to="/hotel" className="hover:text-blue-600">Гостиница</Link></li>
                                    <li><Link to="/about" className="hover:text-blue-600">О комплексе</Link></li>
                                    <li><Link to="/vacansi" className="hover:text-blue-600">Вакансии</Link></li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/news" className="hover:text-blue-600">Новости</Link></li>
                                    <li><Link to="/tarif" className="hover:text-blue-600">Тарифы</Link></li>
                                    <li><Link to="/rent" className="hover:text-blue-600">Прокат</Link></li>
                                    <li><Link to="/actions" className="hover:text-blue-600">Акции и туры</Link></li>
                                    <li><Link to="/price-list" className="hover:text-blue-600">Цены на услуги</Link></li>
                                    <li><Link to="/documentss" className="hover:text-blue-600">Документы </Link></li>

                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/tours" className="hover:text-blue-600">Туры</Link></li>
                                    <li><Link to="/living" className="hover:text-blue-600">Проживание</Link></li>
                                    <li><Link to="/booking" className="hover:text-blue-600">Забронировать номер</Link></li>
                                    <li><Link to="/kids" className="hover:text-blue-600">Детям</Link></li>
                                    <li><Link to="/contact" className="hover:text-blue-600">Контакты</Link></li>
                                    <li><Link to="/slu" className="hover:text-blue-600">Служба</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-8  space-y-4">
                            <div>
                                <p className="font-semibold mt-1 mb-3">Режим работы:</p>
                                <p className='mb-2'>Пн–пт: 10:00–21:00</p>
                                <p>Сб–вс: 9:00–21:00</p>
                            </div>
                            <div className="mb-8 ml-6 mr-6">
                                <p className="font-semibold mb-3 text-xl">Контакты</p>
                                <p className='text-xs'>Всесезонный центр <br />
                                    спорта и активного отдыха <br />
                                    находится в <br /> рекреационной зоне на <br />
                                    границе с заповедниками <br />
                                    «Таганай» и «Зюраткуль» <br />
                                    всего в 30 минутах езды <br />
                                    от Златоуста, и в 1,5 часах <br />
                                    от Челябинска.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    );

}

export default Footer;