import Banner from "../banner/Banner";
import gor1 from "../../img/gor1.png";
import gor2 from "../../img/gor2.png";
import Logo1 from '../../img/Group.svg';

import fr1 from '../../img/icons8-yandex-zen-100 2.svg'
import fr2 from '../../img/icons8-вконтакте-144 2.svg'
import fr3 from '../../img/icons8-ютуб-100 2.svg'
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
export function Gornye() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-32 font-sans bg-white">
      
      {/* --- БАННЕР БӨЛҮМҮ --- */}
      <div className="mt-8 mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl transition hover:scale-[1.005] duration-500">
        <Banner />
      </div>

      {/* --- МААЛЫМАТ ЖАНА МАРШРУТТАР --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video relative group">
            <img 
              src={gor1} 
              alt="Горные прогулки" 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[40px] font-black text-[#009ee3] leading-[1.1] uppercase tracking-tighter">
              Следуйте указателям на вершине горы <br />
              <span className="text-gray-800">и наслаждайтесь прогулкой.</span>
            </h2>
            <p className="text-gray-500 text-lg border-l-4 border-[#9ac43c] pl-6 italic leading-relaxed">
              Для любителей горных и лесных прогулок расположены пешие тропы. На вершине горы Копанец открывается вид на национальные парки "Таганай" and "Зюраткуль".
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-[1.2] rounded-[2.5rem] overflow-hidden shadow-xl h-[400px] md:h-full">
            <img src={gor2} alt="Лесная тропа" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-6 self-center">
            {[
              { title: 'Маршрут "Легенда"', text: 'Протяженность 5 км. Проходит вдоль легендарной реки Ай у подножья горы Копанец.', color: '#009ee3' },
              { title: 'Маршрут "Горный"', text: 'Протяженность 5 км. Расположен на самой вершине. Следуйте указателям и следам.', color: '#9ac43c' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-[2rem] border-t-4 shadow-md transition-transform hover:-translate-y-1"
                style={{ borderTopColor: item.color }}
              >
                <h3 className="font-black text-gray-800 text-xl uppercase mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- КАРТА БӨЛҮМҮ (FIGMA STYLE) --- */}
      <div className="bg-[#9ac43c] rounded-[3.5rem] md:rounded-[5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>

        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start relative z-10">
          
          {/* Сол жак: Логотип жана Пешие тропы */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-5 rounded-[2rem] shadow-lg inline-block transition-transform hover:rotate-2">
              <img src={Logo1} alt="Евразия" className="h-10 md:h-12 w-auto" />
            </div>
            <div className="bg-[#009ee3] text-white p-8 rounded-[2.5rem] shadow-xl border-2 border-white/20 transform hover:-rotate-1 transition-transform">
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tighter italic">
                Пешие тропы
              </h2>
              <p className="text-xs font-bold opacity-80 tracking-[0.4em] block mt-2 uppercase">
                ЦАО «ЕВРАЗИЯ»
              </p>
            </div>
          </div>

          {/* Оң жак: Убакыт жана Текст */}
          <div className="lg:col-span-8 bg-white/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/20">
            <div className="flex flex-col xl:flex-row justify-between gap-10">
              
              {/* Таблица */}
              <div className="flex-1">
                <div className="flex items-center gap-16 mb-6">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl"><IoSunnySharp /></span>
                    <span className="text-[10px] font-black uppercase text-white/70">Восход</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl"> <IoMoonOutline /></span>
                    <span className="text-[10px] font-black uppercase text-white/70">Закат</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-1">
                  {[
                    ["ноябрь", "8:30", "17:00"],
                    ["декабрь", "9:30", "16:30"],
                    ["январь", "9:00", "17:00"],
                    ["февраль", "8:30", "18:00"],
                    ["март", "7:30", "19:00"],
                    ["апрель", "6:00", "20:00"],
                  ].map(([month, s, e], idx) => (
                    <div key={idx} className="flex items-center gap-8 py-1 border-b border-white/10 last:border-0 font-bold text-white text-sm">
                      <span className="w-20 opacity-80">{month}</span>
                      <span className="w-12 text-[#009ee3] bg-white/90 px-2 py-0.5 rounded text-center">{s}</span>
                      <span className="opacity-90">{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Эскертүү текст */}
              <div className="xl:w-[280px] flex flex-col justify-center gap-4 text-white text-[13px] font-bold leading-snug uppercase tracking-tight">
                <p className="bg-black/10 p-4 rounded-2xl border-l-4 border-white">
                  Перед отправлением на тропу, убедитесь в том, что вы одеты по погоде.
                </p>
                <p className="bg-black/10 p-4 rounded-2xl border-l-4 border-white">
                  Перед отправлением на тропу, ознакомьтесь со временем захода и восхода солнца.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="relative rounded-[3rem] md:rounded-[4.5rem] overflow-hidden bg-white shadow-inner border-[10px] border-white/20 h-[500px] md:h-[650px] group">
          <iframe
            title="Интерактивдүү карта"
            src="https://www.google.com/maps/embed?..." // Картанын шилтемесин коюңуз
            className="w-full h-full border-0 transition duration-700"
            loading="lazy"
          />
          {/* Overlay Label (Like Figma) */}
          <div className="absolute top-8 left-8 bg-[#fdb913] text-black px-4 py-2 rounded-full font-black text-xs uppercase shadow-lg animate-bounce">
            Держите путь левее
          </div>
        </div>

        {/* CONTACT SECTION (Көгүш панель) */}
        <div className="mt-12 flex justify-center relative z-10">
          <div className="bg-[#009ee3] text-white px-8 md:px-14 py-6 rounded-full flex flex-col md:flex-row items-center gap-6 md:gap-16 shadow-2xl border-4 border-white/30 transform hover:scale-[1.02] transition-all">
            <div className="flex items-center gap-5">
               <div className="bg-white text-red-600 w-14 h-14 rounded-full flex items-center justify-center font-black text-4xl shadow-lg">+</div>
               <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-black tracking-widest opacity-80">Служба спасения</span>
                 <span className="text-2xl md:text-3xl font-black italic">8 (3513) 79 09 79</span>
               </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] uppercase font-black tracking-widest opacity-80 leading-none mb-1">Информационный центр</span>
              <span className="text-2xl md:text-3xl font-black italic">8 (922) 7 288 288</span>
            </div>
          </div>
        </div>
      </div>

     <div className="flex justify-center gap-10 md:gap-8 mt-16">
            <a href="#" className="w-14 h-14 md:w-16 md:h-16 bg-[#009bd7] rounded-full flex items-center justify-center hover:scale-125 hover:rotate-6 hover:bg-[#007bb0] transition-all duration-300 shadow-md">
             <img src={fr2} alt="" />
            </a>
            <a href="#" className="w-14 h-14 md:w-16 md:h-16 bg-[#009bd7] rounded-full flex items-center justify-center hover:scale-125 hover:-rotate-6 hover:bg-[#ff0000] transition-all duration-300 shadow-md">
                <img src={fr3} alt="" />
            </a>
            <a href="#" className="w-14 h-14 md:w-16 md:h-16 bg-[#009bd7] rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md">
         <img src={fr1} alt="" />
            </a>
          </div>

    </div>
  );
}