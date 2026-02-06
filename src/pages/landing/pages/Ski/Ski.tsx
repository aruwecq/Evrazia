import Icons from '../../ui/icons/Icons'
import Banner from '../../ui/banner/Banner'
import img1 from '../../img/Mask.png'
import img2 from '../../img/Mask (1).png'
import img3 from '../../img/Mask (2).png'
import img4 from '../../img/Mask (3).png'

import img5 from '../../img/ski group.png'
import img6 from '../../img/ski group (1).png'
import img7 from '../../img/ski group (2).png'
import img8 from '../../img/ski group (3).png'
import img9 from '../../img/ski group (4).png'
import img10 from '../../img/ski group (5).png'
import img11 from '../../img/ski group (6).png'
import img12 from '../../img/ski group (7).png'



import { Link } from 'react-router-dom'

interface ITour {
  id: number;
  title: string;
  category: string;
  note: string;
  days: number;
  nights: number;
  image: string;
  day: string;
  features: string[];
}

const tours: ITour[] = [
  {
    id: 1,
    title: "Снежные будни",
    category: "Горнолыжный тур",
    note: "*За исключением праздничных дней",
    days: 4,
    nights: 3,
    image: img1, // Haqiqiy rasm manzili bo'lsin
    day: 'с воскресенья по субботу',
    features: ["ПРОЖИВАНИЕ", "СКИПАСС", "ПРОКАТ", "ПИТАНИЕ"]
  },
  {
    id: 2,
    title: "Твои горы",
    category: "Горнолыжный tour",
    note: "*За исключением праздничных дней",
    days: 5,
    nights: 4,
    image: img2,
    day: 'с воскресенья по субботу',
    features: ["ПРОЖИВАНИЕ", "СКИПАСС", "ПРОКАТ", "ПИТАНИЕ"]
  },
  {
    id: 3,
    title: "Твои горы",
    category: "Горнолыжный тур",
    note: "*За исключением праздничных дней",
    days: 5,
    nights: 4,
    image: img3,
    day: 'с воскресенья по субботу',
    features: ["ПРОЖИВАНИЕ", "СКИПАСС", "ПРОКАТ", "ПИТАНИЕ"]
  },
  {
    id: 4,
    title: "Твои горы",
    category: "Горнолыжный тур",
    note: "*За исключением праздничных дней",
    days: 4,
    nights: 3,
    image: img4,
    day: 'с воскресенья по субботу',
    features: ["ПРОЖИВАНИЕ", "СКИПАСС", "ПРОКАТ", "ПИТАНИЕ"]
  }
];
interface IPromo {
  id: number;
  title: string;
  subtitle: string;
  timeInfo?: string;
  price?: string;
  priceSuffix?: string;
  highlight?: string;
  note: string;
  image: string;
  link: string;
}

const promoCards: IPromo[] = [
  {
    id: 1,
    title: 'Евробус - экспресс',
    subtitle: 'ЧЕЛЯБИНСК-КУСА',
    timeInfo: 'за 3 часа',
    note: '',
    image: img5,
    link: '/order/eurobus'
  },
  {
    id: 2,
    title: 'Снежные будни',
    subtitle: 'ПРОКАТ СНАРЯЖЕНИЯ + КРЕСЕЛЬНЫЙ ПОДЪЁМНИК',
    timeInfo: 'с понедельника по пятницу',
    price: '1400',
    priceSuffix: 'руб. 4 часа',
    note: '*За исключением праздничных дней',
    image: img6,
    link: '/order/snowy-weekdays'
  },
  {
    id: 3,
    title: 'Тариф "Блочный"',
    subtitle: 'СУББОТА ВЕЧЕР с 17.00 до 21.00',
    highlight: 'СКИДКИ',
    timeInfo: 'ПРОКАТ СНАРЯЖЕНИЯ + КРЕСЕЛЬНЫЙ ПОДЪЁМНИК',
    note: '*За исключением праздничных дней',
    image: img7,
    link: '/order/block-tariff'
  },
  {
    id: 4,
    title: 'Тариф "Бесплатная пятница"',
    subtitle: 'Катайтесь всю пятницу',
    highlight: 'БЕСПЛАТНО',
    note: '*За исключением праздничных дней',
    image: img8,
    link: '/order/free-friday'
  },
  {
    id: 5,
    title: 'Тариф "Местный"',
    subtitle: 'БУДНИЙ ДЕНЬ с 10.00 до 14.00 / ВЫХОДНОЙ ДЕНЬ с 10.00 do 12.00',
    price: '75',
    priceSuffix: 'руб.',
    timeInfo: 'ПРОКАТ СНАРЯЖЕНИЯ + КРЕСЕЛЬНЫЙ ПОДЪЁМНИК',
    note: '*За исключением праздничных дней',
    image: img9,
    link: '/order/local-tariff'
  },
  {
    id: 6,
    title: 'Тариф "Бархатный сезон"',
    subtitle: 'Скидки до',
    highlight: '50%',
    note: '*За исключением праздничных дней',
    image: img10,
    link: '/order/velvet-season'
  },
  {
    id: 7,
    title: 'Акция "Урок - все включено"',
    subtitle: 'При занятии с инструктором ПРОКАТ СНАРЯЖЕНИЯ + КРЕСЕЛЬНЫЙ ПОДЪЁМНИК',
    highlight: 'БЕСПЛАТНО',
    note: '*За исключением праздничных дней',
    image: img11,
    link: '/order/all-inclusive-lesson'
  },
  {
    id: 8,
    title: 'Акции на 100 купон',
    subtitle: 'Скидка до',
    highlight: '50%',
    note: '*За исключением праздничных дней',
    image: img12,
    link: '/order/coupon-100'
  }
];

function Ski() {
  const handleBooking = (tourTitle: string) => {
    const message = encodeURIComponent(`"${tourTitle}" я хочу забронировать этот тур.`);
    window.open(`https://t.me/ninje49?text=${message}`, '_blank');
  };
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Banner />

      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Sarlavha */}
        <div className="mb-10">
          <h2 className='text-3xl font-bold text-[#0093DD] uppercase '>
            Горнолыжные туры
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="relative rounded-[45px] overflow-hidden h-[580px] group shadow-2xl">
              <img src={tour.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={tour.title} />
              <div className="absolute inset-0 bg-black/30 p-10 flex flex-col text-white">

                <div className="mb-6">
                  <h2 className="text-[40px] font-black leading-none uppercase mb-4">{tour.title}</h2>
                  <p className="text-[15px] font-bold tracking-wide uppercase opacity-90">{tour.category}</p>
                </div>

                <div className="mt-8 flex flex-col h-full">
                  <p className="text-[12px] italic opacity-80 mb-10">{tour.note}</p>

                  <div className="flex justify-between items-start relative">

                    <div className="max-w-[200px]">
                      <h4 className="text-[20px] font-black leading-tight uppercase mb-6 tracking-tighter">
                        {tour.schedule}
                      </h4>

                      <div className="flex gap-6 items-baseline">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[72px] font-black leading-none">{tour.days}</span>
                          <span className="text-[16px] font-bold">Дня</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[72px] font-black leading-none">{tour.nights}</span>
                          <span className="text-[16px] font-bold">Ночи</span>
                        </div>
                      </div>
                    </div>

                    {/* O'ng tomonda: Features ro'yxati */}
                    <ul className="space-y-3 pt-2">
                      {tour.features.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-[13px] font-black tracking-widest uppercase">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Pastki qism: Faqat tugma */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleBooking(tour.title)}
                      className=" px-7 py-5 bg-[#00A3E1] hover:bg-[#0082b4] ml-25 text-white rounded-[20px] text-[14px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95"
                    >
                      Забронировать тур
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        {/* Aksiyalar bo'limi boshlanishi */}
        <div className="mt-20">
          <div className="mb-10">
            <h2 className='text-4xl font-bold text-[#0093DD]  uppercase tracking-tight'>
              Акции
            </h2>
            <div className="w-16 h-1 bg-[#0093DD] mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoCards.map((card) => (
              <div key={card.id} className="relative rounded-[45px] overflow-hidden h-[500px] shadow-lg group">
                <img src={card.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={card.title} />

                <div className="absolute inset-0 bg-black/30 p-10 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-[36px] font-black leading-tight uppercase mb-2">{card.title}</h3>
                    <p className="text-[14px] font-bold opacity-90 max-w-[280px] uppercase">{card.subtitle}</p>
                    {card.timeInfo && <p className="text-[14px] mt-4 font-medium italic opacity-80">{card.timeInfo}</p>}
                  </div>

                  <div>
                    {/* Narx yoki Highlight qismi */}
                    <div className="mb-4">
                      {card.price ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-[64px] font-black leading-none italic">от {card.price}</span>
                          <span className="text-[18px] font-bold">{card.priceSuffix}</span>
                        </div>
                      ) : card.highlight ? (
                        <span className="text-[64px] font-black leading-none italic uppercase tracking-tighter">
                          {card.highlight}
                        </span>
                      ) : null}
                    </div>

                    {card.note && <p className="text-[10px] mb-6 opacity-70 italic">{card.note}</p>}

                    <Link
                      to={card.link}
                      className="inline-block bg-[#00A3E1] hover:bg-white hover:text-[#00A3E1] text-white px-14 py-3 rounded-xl font-bold uppercase text-sm transition-all duration-300 shadow-md active:scale-95"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Icons />
    </div>
  )
}

export default Ski