import snowcat from "../../img/showcat.png";
import lift from "../../img/lift.png";
import jump from "../../img/jump.png";
import mountains from "../../img/mountains-white.png"; 
import Banner from "../banner/Banner";
import fr1 from '../../img/icons8-yandex-zen-100 2.svg'
import fr2 from '../../img/icons8-вконтакте-144 2.svg'
import fr3 from '../../img/icons8-ютуб-100 2.svg'

export function Kurort1() {
return (
    <section className="max-w-[1400px] mx-auto px-4 py-12 font-sans text-[#333]">
      
      <div className="mb-12 rounded-[2.5rem] overflow-hidden transition-transform duration-500 hover:shadow-2xl">
        <Banner />
      </div>

      <div className="max-w-[1230px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group rounded-[2.5rem] overflow-hidden shadow-sm">
            <img 
              src={snowcat} 
              alt="Snowcat" 
              className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="group rounded-[2.5rem] overflow-hidden shadow-sm">
            <img 
              src={lift} 
              alt="Lift" 
              className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
        </div>

        <h2 className="text-[#009bd7] text-[22px] md:text-[27px] font-extrabold leading-tight mb-12 transition-colors duration-300 hover:text-[#333]">
          Ежегодно центр расширяет инфраструктуру, применяет современное
          оборудование и технологии, предоставляет новые услуги.
        </h2>

        <div className="relative bg-[#009bd7] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden mb-20 min-h-[300px] flex items-center shadow-lg transition-all duration-500 hover:shadow-2xl group">
          <div className="absolute left-0 bottom-0 h-full w-auto pointer-events-none select-none overflow-hidden">
            <img 
              src={mountains} 
              alt="Mountains background" 
              className="h-full w-auto object-contain object-left-bottom transform scale-110 origin-bottom-left transition-transform duration-1000 group-hover:scale-125"
            />
          </div>
          
          <div className="relative z-10 ml-auto w-full md:w-[62%] lg:w-[58%] p-8 md:p-16 transition-transform duration-500 group-hover:-translate-x-2">
            <p className="text-white text-[16px] md:text-[20px] leading-[1.6] font-medium">
              Всесезонный центр спорта и отдыха — находится в рекреационной зоне на
              границе с заповедниками «Таганай» и «Зюраткуль» всего в 30 минутах езды
              от Златоуста, и в 1,5 часах от Челябинска. Комплекс работает 12 месяцев
              в году, предоставляя уникальные возможности для массовых занятий
              портом и современного отдыха на природе.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
          <div className="group rounded-[3rem] overflow-hidden shadow-md">
            <img 
              src={jump} 
              alt="Snowboarder jumping" 
              className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>

          <div className="text-[14px] md:text-[15px] leading-[1.8] text-[#444] space-y-6">
            <p className="transition-colors duration-300 hover:text-black">
              Горнолыжный центр <strong>«Евразия»</strong> предлагает условия для активного отдыха и занятий спортом круглый год. Уральская природа, чистый воздух и современные технологии составляют гармоничный союз, создавая каждый раз новые ощущения от отдыха.
            </p>
            <p className="transition-colors duration-300 hover:text-black border-l-4 border-transparent hover:border-[#009bd7] pl-4">
              Проведение семинаров, тренингов, конференций – рано или поздно у каждой развивающейся современной компании возникает необходимость в организации таких мероприятий. И сразу встает вопрос определения подходящего помещения, сочетающего достойный уровень и приемлемые цены.
            </p>
            <p className="transition-colors duration-300 hover:text-black">
              ЦАО «Евразия» рад предложить клиентам все условия для проведения деловых встреч. Отличное комфортное помещение, зал вместимостью до 250 человек, современное оборудование и разумные цены отличают нас от большинства предложений на рынке.
            </p>
            <p className="transition-colors duration-300 hover:text-black">
              Кроме того, в «Евразии» вас ждет несколько вариантов питания: от ресторанного угощения до обедов в режиме фаст-фуд. К услугам гостей также новая гостиница на 140 мест (70 уютных двухместных номеров).
            </p>
            <p className="transition-colors duration-300 hover:text-black">
              Выезд в «Евразию» – это отличный способ обеспечить высокий уровень любого мероприятия, порадовать партнеров и сотрудников достойной организацией, а, главное – отвлечься от городской суеты и сосредоточиться на теме деловой встречи.
            </p>
          </div>
        </div>

        <div className="mt-16 pb-12">
          <h3 className="text-[#009bd7] text-[28px] md:text-[45px] font-black leading-[1.1] mb-12 tracking-tight">
            Ждем ваши запросы <br />
            на электронный ящик <a href="mailto:mail@euroasia.su" className="inline-block underline decoration-[#009bd7] decoration-2 underline-offset-[10px] hover:text-[#007bb0] hover:-translate-y-1 transition-all duration-300">mail@euroasia.su</a>
          </h3>

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
      </div>
    </section>
  );
}
