import Banner from "../banner/Banner";
import tra1 from '../../img/tra1.png'; 
import tra11 from '../../img/tra11.png'
import tra12 from '../../img/tra12.png'
import tra13 from '../../img/tra13.png'
import tra14 from '../../img/tra14.png'
import fr1 from '../../img/icons8-yandex-zen-100 2.svg'
import fr2 from '../../img/icons8-вконтакте-144 2.svg'
import fr3 from '../../img/icons8-ютуб-100 2.svg'

export function Trassa() {
  const tracks = [
    { id: '1', name: 'трасса', length: '1,650 метров', color: 'bg-green-500' },
    { id: '1A', name: 'трасса', length: '175 метров', color: 'bg-green-500' },
    { id: '1B', name: 'трасса', length: '270 метров', color: 'bg-lime-500' },
    { id: '2', name: 'трасса', length: '1,420 метров', color: 'bg-green-500' },
    { id: '3', name: 'трасса', length: '1,230 метров', color: 'bg-green-500' },
    { id: '4', name: 'трасса', length: '1,500 метров',  color: 'bg-gray-400' },
    { id: '5', name: 'трасса', length: '1,500 метров', color: 'bg-green-500' },
    { id: '5A', name: 'трасса', length: '370 метров', color: 'bg-green-500' },
    { id: '6', name: 'трасса', length: '200 метров', color: 'bg-green-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-12 rounded-[2.5rem] overflow-hidden transition-transform duration-500 hover:shadow-2xl">
        <Banner />
      </div>

     <h1 className="text-4xl font-bold text-sky-500 mb-8">Горнолыжные трассы</h1>

      {/* gap-2 менен аралык жакындатылды, lg:gap-4 чоң экранда бир аз боштук берет */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start">
        
        {/* Сол жагы: Трассалардын тизмеси - чоңойтулду */}
        <div className="flex-1 w-full space-y-3">
          <h2 className="text-2xl font-semibold text-sky-500 mb-4">Трассы</h2>
          
          {tracks.map((track) => (
            <div key={track.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className={`${track.color} text-white font-bold w-14 h-12 flex items-center justify-center rounded-lg italic text-xl shadow-sm`}> {track.id} </div>
              <div className="border-2 border-sky-100 rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex-1 text-center sm:text-left text-gray-500 font-bold">
                {track.name}
              </div>
              <div className="border-2 border-sky-100 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-center sm:text-left text-gray-700 font-extrabold text-sm sm:text-lg">
                {track.length}
              </div>
            </div>
          ))}

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-3">
               <div className="bg-yellow-500 w-14 h-12 rounded-lg flex items-center justify-center text-2xl shadow-sm">🏔️</div>
            <div className="border-2 border-sky-100 rounded-lg px-3 py-2 flex-grow text-gray-600 font-bold max-w-full">неподготовленный склон</div>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-sky-700 w-14 h-12 rounded-lg flex items-center justify-center text-2xl shadow-sm">👣</div>
            <div className="border-2 border-sky-100 rounded-lg px-3 py-2 flex-grow text-gray-600 font-bold max-w-full">тропа снежного человека</div>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-orange-400 w-14 h-3 rounded-full shadow-sm"></div>
            <div className="border-2 border-sky-100 rounded-lg px-3 py-2 flex-grow text-gray-600 font-bold max-w-full">сноу парк</div>
            </div>
          </div>
        </div>

        <div className="flex-[1.6] w-full">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-sky-50">
            <img src={tra1} alt="Схема ЦАО Евразия" className="w-full h-auto object-cover" />
          </div>

          <div className="mt-6 p-4 bg-sky-50/50 rounded-3xl">
            <h3 className="text-xl font-bold text-sky-500 mb-4">Сложность</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-sky-500 text-white p-4 rounded-2xl flex flex-col items-center min-w-[80px] sm:min-w-[120px] shadow-md">
                 <div className="border-b-4 border-white w-10 mb-2"></div>
                 <span className="text-sm font-black uppercase">легкая</span>
               </div>
              <div className="bg-sky-600 text-white p-4 rounded-2xl flex flex-col items-center min-w-[80px] sm:min-w-[120px] shadow-md">
                 <div className="border-b-4 border-white w-14 mb-2"></div>
                 <span className="text-sm font-black uppercase">средняя</span>
               </div>
              <div className="bg-sky-700 text-white p-4 rounded-2xl flex flex-col items-center min-w-[80px] sm:min-w-[120px] shadow-md">
                 <div className="border-b-4 border-red-500 w-12 mb-2"></div>
                 <span className="text-sm font-black uppercase">высокая</span>
               </div>
              <div className="bg-sky-500 text-white p-4 rounded-2xl flex flex-col items-center min-w-[80px] sm:min-w-[120px] shadow-md">
                 <div className="border-4 border-white rounded-full w-7 h-7 flex items-center justify-center font-bold mb-1">O</div>
                 <span className="text-sm font-black uppercase text-center">тюбинг</span>
               </div>
            </div>
          </div>
        </div>
      </div>

 <div className="mt-14">
  <h2 className="text-2xl font-bold text-sky-600 mb-6">Обозначения на схеме</h2>
  <div className="flex flex-col lg:flex-row gap-10 items-start">
    
    {/* Сол жагы: Көк блок (Фигмадагыдай 4+3 катар) */}
    <div className="bg-[#009ee3] rounded-[2rem] p-6 md:p-8 text-white w-full lg:w-[620px] shadow-lg">
      <div className="flex flex-col gap-8">
        
        {/* Үстүнкү 4 катар (4 columns) */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-3 text-[13px] font-medium leading-tight">
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">P</div> Парковка</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-[10px] font-bold">+</div> Мед. пункт</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">☕</div> Apres ski</div>
          
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">🎫</div> Кассы</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">⛷️</div> Прокат</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">🛒</div> Магазин</div>
          
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">WC</div> Туалет</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">📦</div> Хранение</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">🧒</div> Детский клуб</div>
          
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">🍴</div> Кафе</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">👕</div> Раздевалка</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-sky-800 rounded flex items-center justify-center text-[10px] font-bold">🎓</div> Инструкторы</div>
        </div>

        {/* Астынкы 3 катар (Кененирээк элементтер) */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-white/20 text-[13px] font-medium">
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-[10px]">i</div> Администрация</div>
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[10px]">🚠</div> Бугельный подъемник</div>
          
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[10px]">🏨</div> Гостиница</div>
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[10px]">👣</div> Трасса для ходьбы</div>
          
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[10px]">🚡</div> Кресельный подъемник</div>
          <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-[10px]">🧗</div> Скалодром</div>
        </div>
      </div>
    </div>

    {/* Оң жагы: Статустар жана баскычтар */}
    <div className="flex-1 space-y-8">
      <div className="flex items-start gap-4">
        <div className="bg-[#009ee3] text-white px-6 py-2 rounded-xl text-sm font-bold uppercase min-w-[90px] text-center">open</div>
        <p className="text-sm text-gray-700 leading-snug">
          Трасса открыта и полностью подготовлена к катанию. Огорожена сетями безопасности. Трассу ежедневно обрабатывает снегоуплотнительная техника.
        </p>
      </div>
      <div className="flex items-start gap-4">
        <div className="bg-[#95c11f] text-white px-6 py-2 rounded-xl text-sm font-bold uppercase min-w-[90px] text-center">close</div>
        <p className="text-sm text-gray-700 leading-snug">
          Трасса закрыта для катания. Не огорожена сетями безопасности. Недостаточно снежного покрова для безопасного катания.
        </p>
      </div>
      <div className="flex items-start gap-4">
        <div className="bg-[#fbbf24] w-[90px] h-10 rounded-xl flex items-center justify-center shrink-0">
          <div className="w-6 h-6 bg-white rotate-45 rounded-sm"></div>
        </div>
        <p className="text-sm text-gray-700 leading-snug">
          Трасса частично подготовлена. Трасса работает в формате неподготовленного склона. Катание осуществляется на страх и риск отдыхающих.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-[#009ee3] text-white px-6 py-3 rounded-xl text-sm font-bold">Скачать карту</button>
        <button className="bg-[#009ee3] text-white px-6 py-3 rounded-xl text-sm font-bold">Скачать карту троп</button>
      </div>
    </div>

  </div>
</div>
      <div className="mt-20 space-y-12 pb-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">1 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-full md:max-w-5xl">трасса для "Новичков", продолжительностью 1,650 метров. Склон оснащен системой искусственного освещения. По бокам трассы установлены небольшие трамплины. Рельеф склона отлично подходит для обучения технике катания и трассового фристайла. Пересекает "2 трассу" и "секретную трассу". Окончание трассы имеет 2 направления: 1А - более крутой спуск, 1B - более пологий спуск;</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">2 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Среднего" уровня катания, продолжительностью 1,420 метров. Склон оснащен системой искусственного освещения. Рельеф склона отлично подходит для совершенствования техники катания: карвинг, "фан" карвинг, трассовый фристайл и многое другое. Пересекает "1 трассу" и "3 трассу";</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">3 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Высокого" уровня катания, продолжительностью 1,230 метров. Рельеф склона отлично подходит для спортивного катания;</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">4 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Среднего" уровня катания, продолжительностью 1,500 метров. СНЕГ ЕСТЕСТВЕННЫЙ. Меняющийся угол склона дает возможность научиться смене техники катания и проверить свои силы на постоянно меняющемся рельефе.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">5 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Среднего" уровня катания, продолжительностью 1,500 метров. СНЕГ ИСКУССТВЕННЫЙ. На протяжении всей трассы установлены снежные фигуры: контруклоны, трамплины, бугры и другие неровности. Рельеф склона подходит для обучения техники катания в дисциплине "ски-кросс" и "бордер-кросс". Спуск по трассе можно начинать как с трассы 5, так и с трассы 5А.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">6 трасса</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для "Начального" обучения, продолжительностью 200 метров. Рельеф и продолжительность склона идеально подходит для обучения основам техники катания на лыжах и сноуборде.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">Сноу парк</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Среднего" и "Высокого" уровня катания, продолжительностью 850 метров. Серия трамплинов, различные джиббовые фигуры и бугры позволят освоить технику фристайла и отлично провести время в кругу друзей. Парк находится на 1 склоне.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">Тропа снежного человека</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трасса для райдеров "Среднего уровня" катания и выше, протяженностью 800 метров. Трасса открыта нашими клиентами и имеет предназначение "веселого спуска". Бугры, свисающие деревья и контруклоны дают возможность освоить технику внетрассового катания. АДМИНИСТРАЦИЯ НЕ НЕСЕТ ОТВЕТСТВЕННОСТЬ ЗА ТРАВМЫ ИЛИ ПОЛОМКУ СНАРЯЖЕНИЯ ПОЛУЧЕННЫЕ ПРИ СПУСКЕ ПО ЭТИМ ТРАССАМ.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-sky-500">Трассы "Фрирайд" (неподготовленные склоны)</h2>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-5xl">трассы для райдеров "Высокого уровня" катания расположены на 4, 5, 5А, 7 и 8 склонах и между ними в лесной зоне, а также в лесных зонах между 1, 2 и 3 склонами. Трассы имеют предназначение для спуска по необработанной местности. Бугры, свисающие деревья, контруклоны, "дропы" дают возможность освоить технику внетрассового катания. АДМИНИСТРАЦИЯ НЕ НЕСЕТ ОТВЕТСТВЕННОСТЬ ЗА ТРАВМЫ ИЛИ ПОЛОМКУ СНАРЯЖЕНИЯ ПОЛУЧЕННЫЕ ПРИ СПУСКЕ ПО ЭТИМ ТРАССАМ.</p>
        </div>
      </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
  <div className="flex flex-col lg:flex-row gap-12 items-start">

    {/* КАРТА */}
    <div className="flex-1">
      <div className="rounded-[32px] overflow-hidden shadow-lg">
        <img
          src={tra1}
          alt="Карта трасс"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* ТЕКСТ */}
    <div className="flex-1 space-y-12">

      <div>
        <h2 className="text-2xl font-bold text-sky-600 mb-4">
          Трасса тюбинга
        </h2>
        <p className="text-gray-700 leading-relaxed">
          трасса продолжительностью 200 метров, для тех, кто <br /> любит
          разнообразить свой отдых и приобщить своих <br /> близких к
          зимнему активному отдыху. Не важно на сколько <br /> хорошо вы
          катаетесь на лыжах или сноуборде, трасса <br /> тюбинга
          подходит для всех.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-sky-600 mb-4">
          Трасса для ходьбы
        </h2>
        <p className="text-gray-700 leading-relaxed">
          на территории ЦАО "Евразия" для любителей горных <br /> прогулок
          есть несколько троп для ходьбы. 1 тропа <br /> расположена между
          гостиницей и сервисным зданием – <br /> протяженность 500 метров.
          2 тропа расположена на самом <br /> верху горы Копанец –
          протяженность тропы от вершины до <br /> сервисного здания 5 км.
          3 тропа находится за учебным <br /> склоном, протяженность пути –
          5 км. Подробнее о <br /> прогулочных тропах можете почитать здесь.
        </p>
      </div>

    </div>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      
      {/* 1. Жогору жактагы үч сүрөт */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <img src={tra11} alt="Техника" className="rounded-[40px] w-full h-56 md:h-[280px] object-cover" />
        <img src={tra12} alt="Подъемник 1" className="rounded-[40px] w-full h-56 md:h-[280px] object-cover" />
        <img src={tra13} alt="Подъемник 2" className="rounded-[40px] w-full h-56 md:h-[280px] object-cover" />
      </div>

      {/* 2. Заголовок */}
      <h2 className="text-3xl md:text-[42px] font-bold text-[#23a9e1] mb-10 tracking-tight">
        Подъемники
      </h2>

      {/* 3. Көк блок (Артында тоолордун сүрөтү менен) */}
      <div className="relative rounded-[60px] bg-[#23a9e1] overflow-hidden min-h-[180px] md:min-h-[240px] flex items-center">
        
        <div 
          className="absolute inset-0 w-full h-full opacity-110 pointer-events-none"
          style={{
            backgroundImage: `url(${tra14})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* ТЕКСТ КАТМАРЫ */}
        <div className="relative z-10 px-6 md:px-12 py-8 md:py-12">
          <p className="text-white text-[16px] md:text-[20px] leading-[1.5] font-medium max-w-full md:max-w-5xl">
            Все трассы обслуживаются 4-х кресельным подъемником австрийской фирмы 
            «Doppelmayr», который всего за 7–8 минут доставит вас на вершину 
            горы Копанец, 610 метров. Учебный склон обслуживается бугельным 
            подъемником типа: бэби-лифт.
          </p>
        </div>

      </div>
    </div>
<div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* Үстүндөгү 3 чоң сүрөт */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <img src={tra11} alt="" className="rounded-[40px] w-full h-[280px] object-cover" />
        <img src={tra12} alt="" className="rounded-[40px] w-full h-[280px] object-cover" />
        <img src={tra13} alt="" className="rounded-[40px] w-full h-[280px] object-cover" />
      </div>

      {/* Правила заголовку */}
      <h2 className="text-[40px] font-bold text-[#009ee3] mb-10">Правила</h2>

      {/* Көк кнопкалар */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="bg-[#009ee3] text-white rounded-[15px] p-6 flex items-center justify-center text-center min-h-[90px] cursor-pointer">
          <span className="text-[16px] font-medium">Правила поведения посетителей на горнолыжных трассах</span>
        </div>
        <div className="bg-[#009ee3] text-white rounded-[15px] p-6 flex items-center justify-center text-center min-h-[90px] cursor-pointer">
          <span className="text-[16px] font-medium">Правила поведения посетителей на канатной дороге</span>
        </div>
        <div className="bg-[#009ee3] text-white rounded-[15px] p-6 flex items-center justify-center text-center min-h-[90px] cursor-pointer">
          <span className="text-[16px] font-medium">Иные правила курорта</span>
        </div>
      </div>

      {/* Социалдык иконкалар */}
 
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
  );
}
