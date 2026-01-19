import { Link } from 'react-router-dom';
import Banner from '../../ui/banner/Banner';
// rasmlar
import img1 from '../../img/Image.png';
import img2 from '../../img/Image (1).png';
import img3 from '../../img/Image (2).png';
import img4 from '../../img/Image (3).png';
import img5 from '../../img/Image (4).png';
import img6 from '../../img/Image (5).png';
// ikonlar
import icons1 from '../../img/icons8-вконтакте-144 2.svg'
import icons2 from '../../img/icons8-ютуб-100 2.svg'
import icons3 from '../../img/icons8-yandex-zen-100 2.svg'

function NewsPages() {
    const newsData = [
        {
            image: img1,
            date: '20 Января 2023',
            title: 'В ЦАО "Евразия" состоялось Первенство Челябинской области и УрФО по горнолыжному спорту сезона 2022-2023',
            desc: 'В период с 23 по 28 января 2023 года в городе Куса (Челябинская область) в ЦАО «Евразия» состоялось Первенство Уральского Федерального округа и Первенство Челябинской области по горнолыжному спорuту в дисциплинах слалом и слалом-гигант.',
            link: '/news/1',
        },
        {

            image: img2,
            date: '18 Января 2023',
            title: 'В ЦАО "Евразия" состоялось Первенство России по сноуборду в дисциплине Big-Air',
            desc: 'С 12 по 16 января 2023 в ЦАО "Евразия" успешно состоялось Первенство России по сноуборду в дисциплине Big-Air. Данное мероприятие проводилось в Кусе впервые, а подготовка к этому мероприятию началась еще в июле.',
            link: '/news/2',
        },
        {
            image: img3,
            date: '17 Января 2023',
            title: 'Всероссийские соревнования и Первенство города Куса по сноуборду в дисциплинах PSL и PGS в ЦАО "Евразия" 8-11 февраля 2023',
            desc: 'Региональное отделение Челябинской области «Федерация сноуборда России» и Центр активного отдыха «Евразия» приглашают Вас принять участие во Всероссийских соревнованиях.',
            link: '/news/3',
        },
        {
            image: img4,
            date: '17 Января 2023',
            title: 'В ЦАО "Евразия" состоится Чемпионат и Первенство Челябинской области по горнолыжному спорту',
            desc: 'С 23 января по 28 января 2023 года, на территории ЦАО "Евразия" состоится Чемпионат и Первенство Челябинской области по горнолыжному спорту.',
            link: '/news/4',
        },
        {
            image: img5,
            date: '16 Января 2023',
            title: '"Кубок Уральских гор 2023" в ЦАО "Евразия"',
            desc: 'С 17 по 20 января на территории ЦАО "Евразия" состоится Кубок Уральских гор по горнолыжному спорту среди следующих возрастных категорий: юноши, девушки 2007 – 2008г.р.',
            link: '/news/5',
        },
        {
            image: img6,
            date: '28 Января 2023',
            title: '30 декабря открытие 2 склоna! Какие еще трассы будут работать с 30 декабря?',
            desc: '30 декабря в ЦАО "Евразия" состоится тестовое открытие 2 склона. К новогодним праздникам уже подготовлено 5 больших склонов и учебная трасса.',
            link: '/news/1',
        },
    ];

    const socialIcons = [
        { icon: icons1, link: 'https://vk.com', alt: 'VK' },
        { icon: icons2, link: 'https://youtube.com', alt: 'YouTube' },
        { icon: icons3, link: 'https://zen.yandex.ru', alt: 'Yandex Zen' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10 mb-20">
            <div className="mb-20">
                <Banner />
            </div>

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20 mb-24">
                {newsData.map((item, index) => (
                    <Link key={index} to={item.link} className="group block">
                        <div className="flex flex-col h-full">
                            <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden mb-6 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-col flex-grow px-1">
                                <p className="text-[14px] font-bold text-[#20B2FF] mb-4 tracking-tight uppercase">
                                    {item.date}
                                </p>

                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <h3 className="font-[900] text-[22px] leading-[1.2] text-gray-800 group-hover:text-[#20B2FF] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <span className="text-[#20B2FF] mt-1.5 shrink-0 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>

                                <p className="text-[15px] text-[#707070] leading-[1.6] line-clamp-4 font-normal">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* SOCIAL ICONS SECTION - Eng pastki qism */}
            <div className="flex justify-center items-center gap-4 py-10 border-t border-gray-100">
                {socialIcons.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#20B2FF] rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md"
                    >
                        <img
                            src={item.icon}
                            alt={item.alt}
                            className="w-6 h-6 object-contain brightness-0 invert"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default NewsPages;