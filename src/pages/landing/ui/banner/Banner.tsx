import { useState, useEffect } from 'react';
import banner1 from '../../img/image.png';
import banner2 from '../../img/image.png';
import banner3 from '../../img/image.png';
import banner4 from '../../img/image.png'; 
import icons1 from '../../img/icons1.svg';
import icons2 from '../../img/icons2.svg';
import icons3 from '../../img/icons3.svg';
import icons4 from '../../img/icons4.svg';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: '30 декабря в ЦАО "Евразия"состоится тестовое открытие 2 склона.',
    desc: 'К новогодним праздникам уже подготовлено 5 больших склонов и учебная трасса, а также тюбинговая горка.',
    image: banner1,
  },
  {
    id: 2,
    title: 'Новый сезон – новые горизонты',
    desc: 'Центра активного отдыха «Евразия» – активный отдых в гармонии с природой.',
    image: banner2,
  },
  {
    id: 3,
    title: 'О курорте',
    desc: 'Мы рады приветствовать любителей активного отдыха в горнолыжном курорте “Евразия”, в одном из наиболее динамично развивающихся горнолыжных центров Южного Урала.',
    image: banner3,
  },
  {
    id: 4,
    title: 'Новости', // Faqat shu yozuv bo'ladi
    isNews: true,    // Bu maxsus flag (belgi)
    image: banner4,
  },
];

function Banner() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">
      <div
        className="relative h-[360px] rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${banners[index].image})` }}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="relative z-10 h-full flex items-center justify-between p-8 text-white">
          
          {/* Shartli kontent chiqarish */}
          {banners[index].isNews ? (
            /* 4-banner uchun: Faqat "Новости" yozuvi pastda */
            <div className="mt-auto mb-4">
               <h2 className="text-4xl font-bold uppercase tracking-wider">
                {banners[index].title}
              </h2>
            </div>
          ) : (
            /* Oddiy bannerlar uchun kontent */
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-10">
                {banners[index].title}
              </h2>
              <p className="opacity-90 text-2xl">
                {banners[index].desc}
              </p>
            </div>
          )}

          {/* O'ng tarafdagi menyu bloki (Agar 4-bannerda kerak bo'lmasa, buni ham shartga olishingiz mumkin) */}
          {!banners[index].isNews && (
            <div className="hidden md:block bg-white text-gray-800 rounded-xl mr-10 p-4 py-10 w-50">
              <ul className="space-y-3 text-sm">
                <li className='pb-4'>
                  <Link to="/lifts" className="flex items-center gap-2 hover:text-blue-600 transition">
                    <img src={icons1} alt="lift" className="w-4 h-4" />
                    <span>Канатные дороги</span>
                  </Link>
                </li>
                <li className='pb-4'>
                  <Link to="/tickets" className="flex items-center gap-2 hover:text-blue-600 transition">
                    <img src={icons2} alt="ticket" className="w-4 h-4" />
                    <span>Билеты</span>
                  </Link>
                </li>
                <li className='pb-3'>
                  <Link to="/map" className="flex items-center gap-2 hover:text-blue-600 transition">
                    <img src={icons3} alt="map" className="w-4 h-4" />
                    <span>Карта</span>
                  </Link>
                </li>
                <hr className="my-2" />
                <li className="flex items-center gap-2 font-semibold">
                  <Link to="/rent" className="flex items-center gap-2 hover:text-blue-600 transition">
                    <img src={icons4} alt="rent" className="w-4 h-4" />
                    <span>-10</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Tugmalar */}
        <button onClick={prevSlide} className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full text-black">‹</button>
        <button onClick={nextSlide} className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full text-black">›</button>
      </div>

      {/* Nuqtalar (Dots) */}
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;