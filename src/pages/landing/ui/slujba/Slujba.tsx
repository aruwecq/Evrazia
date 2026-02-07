import Banner from "../banner/Banner";
import slu1 from '../../img/slu1.png'; 
import slu2 from '../../img/slu2.png'; 
import slu3 from '../../img/slu3.png'; 
import slu4 from '../../img/slu4.png'
import slu5 from '../../img/slu5.png'
import slu6 from '../../img/slu6.png'
import fr1 from '../../img/icons8-yandex-zen-100 2.svg'
import fr2 from '../../img/icons8-вконтакте-144 2.svg'
import fr3 from '../../img/icons8-ютуб-100 2.svg'

export function Slujba() {
  const steps = [
    {
      id: "01",
      title: "Обратитесь к администратору в службе инструкторов,",
      desc: "который находится в зоне проката снаряжения, и уточните наличие свободного инструктора."
    },
    {
      id: "02",
      title: "При необходимости, оформите договор проката снаряжения",
      desc: "и оплатите услуги по прокату снаряжения в кассе ЦАО 'Евразия'."
    },
    {
      id: "03",
      title: "Оформите урок с инструктором в кассе ЦАО 'Евразия'",
      desc: "вместе с вашим инструктором (с целью экономии вашего времени и денег, перед оплатой услуг инструктора будьте уже готовы к выходу на склон)."
    },
    {
      id: "04",
      title: "Получите у вашего инструктора ски-пасс",
      desc: "на пользование канатной дорогой. Стоимость пользования канатной дорогой включена в стоимость урока с инструктором."
    },
    {
      id: "05",
      title: "По окончанию занятия, сдайте инструктору ски-пасс",
      desc: "и другие атрибуты (если таковые были выданы перед началом занятия)."
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 font-sans text-[#333]">
      <div className="mb-12 rounded-[2.5rem] overflow-hidden transition-transform duration-500 hover:shadow-2xl">
        <Banner />
      </div>

      <div className="text-center mb-16">
        <p className="text-[#0091d5] text-sm md:text-base font-medium max-w-[800px] mx-auto mb-6 leading-relaxed">
          Опытные инструкторы ЦАО "Евразия" работают на основе австрийской методики, используя
          индивидуальный подход к обучению и совершенствованию, за короткие сроки смогут поставить
          правильную технику и скорректировать ошибки.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Правильная техника - основа всех побед <br /> и безопасного катания.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
        <div className="flex flex-col">
          <img src={slu1} alt="First steps" className="rounded-[2rem] w-full object-cover mb-8 shadow-sm" />
          <h3 className="text-[#0091d5] font-black text-xl mb-4 uppercase tracking-wide">
            Первые шаги на сноуборде и лыжах
          </h3>
          <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
            <p>
              Служба инструкторов ЦАО "Евразия" позволит в кратчайшие сроки освоить базовую 
              технику катания на лыжах и сноуборде. Эффективная методика, индивидуальный 
              подход и наглядный показ - основные принципы наших инструкторов.
            </p>
            <p>
              Базовые знания позволят вам в дальнейшем совершенствовать технику катания 
              без каких-либо ошибок.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <img src={slu2} alt="Mastery" className="rounded-[2rem] w-full md:w-1/2 object-cover shadow-sm order-2 md:order-1" />
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-[#0091d5] font-black text-xl mb-4 uppercase tracking-wide leading-tight">
              Повышаем мастерство на горных лыжах
            </h3>
            <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
              <p>
                Всегда хочется чего-то больше и уверенного спуска со склонов на лыжах может 
                уже не хватать. Карвинг, фан-карвинг, короткие карвинговые повороты и много 
                других элементов - столькому можно еще научиться.
              </p>
              <p>
                Индивидуальный подход, учет физических, технических и возрастных особенностей 
                при совершенствовании техники катания с инструкторами сделает обучение 
                максимально эффективным и увлекательным.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
          <div className="md:col-span-1">
            <img src={slu3} alt="Snowboard mastery" className="rounded-[2rem] w-full object-cover shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-[#0091d5] font-black text-xl mb-4 uppercase tracking-wide">
                Повышаем мастерство на сноуборде
            </h3>
            <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                <p>
                    Большинство сноубордистов, катаясь используют технику соскальзывания. Совершенствование 
                    техники катания с инструктором убирает границы и позволит освоить такие элементы как: 
                    карвинговый поворот, фан-карвинг, базовый и парковый фристайл, короткие динамичные 
                    повороты и многие другие. Сноуборд - далеко неизведанный "снаряд" и способен дарить 
                    удивительные ощущения, нужно только научиться его правильно использовать.
                </p>
            </div>
          </div>
          
      </div>
  <div className="bg-[#f0f9ff] p-8 rounded-[2rem] mt-10 shadow-sm border border-blue-50">
          <p className="text-[#0091d5] text-center font-bold text-sm md:text-base leading-relaxed">
            При раннем бронировании инструктора необходимо сообщить: ФИО, дату урока, время урока, контактный <br className="hidden md:block"/>
            номер, возраст, кол-во человек в группе, уровень катания каждого из участников урока.
          </p>
        </div>
      <div className="py-10 border-t border-gray-100">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-16 uppercase text-gray-800">
          Как оформить занятия с <br /> инструктором на цао "евразия":
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.slice(0, 3).map((step) => (
            <div key={step.id} className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-[#bde4f5] text-[#0091d5] rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                {step.id}
              </div>
              <h4 className="font-bold text-[13px] mb-3 leading-tight px-4 uppercase">{step.title}</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed px-6">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[800px] mx-auto mb-16">
          {steps.slice(3, 5).map((step) => (
            <div key={step.id} className="text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-[#bde4f5] text-[#0091d5] rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                {step.id}
              </div>
              <h4 className="font-bold text-[13px] mb-3 leading-tight px-4 uppercase">{step.title}</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed px-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-8 mb-10">
        <div className="space-y-3">
          <p className="text-[#0091d5] font-bold text-sm uppercase tracking-wide">Контакты для раннего бронирования инструктора:</p>
          <p className="text-2xl md:text-5xl font-extrabold text-gray-800 tracking-tighter">
            +7 (3513) 79-09-79 или +7 (922) 7-288-288.
          </p>
        </div>

        <div className="text-gray-500 text-sm font-medium">
          <p>Официальная группа "Школы горных лыж и сноуборда ЦАО Евразия"</p>
          <p>Вконтакте: <a href="http://vk.com/euroasiaschool" className="text-[#0091d5] hover:underline underline-offset-4">http://vk.com/euroasiaschool</a></p>
        </div>

      
      </div>
<div className="mb-24 overflow-x-auto px-4">
  <table className="w-full text-left border-collapse min-w-[950px] font-sans">
    <thead>
      <tr className="text-[11px] text-[#999] uppercase tracking-wider">
        <th className="py-6 font-normal pl-4 w-[320px]">Наименование услуг*</th>
        {[10, 20, 30, 40, 50, 60].map(min => (
          <th key={min} className="py-6 font-normal text-center leading-tight">
            Стоимость <br/> рублей/человек <br/> {min} минут
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-50">
      {[
        { name: "Индивидуальное занятие с инструктором", p: ["200", "300", "400", "500", "600", "700"] },
        { name: "Занятие с инструктором (группа из 2 человек)", p: ["•", "400", "500", "600", "700", "800"] },
        { name: "Занятие с инструктором (группа из 3 человек)", p: ["•", "•", "600", "700", "800", "900"] },
        { name: "Занятие с инструктором (группа из 4 человек)", p: ["•", "•", "•", "800", "900", "1000"] },
        { name: "Занятие с инструктором (группа из 5 человек)", p: ["•", "•", "•", "•", "1000", "1100"] },
        { name: "Занятие с инструктором (группа из 6 человек)", p: ["•", "•", "•", "•", "•", "1200"] },
      ].map((row, idx) => (
        <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#f8fbfd]' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
          <td className="py-6 pl-4 text-[14px] font-medium text-[#444] flex items-center gap-4">
            <div className="w-10 h-10 bg-[#bde4f5] rounded-full shrink-0 shadow-sm" />
            {row.name}
          </td>
          {row.p.map((price, i) => (
            <td key={i} className="py-6 text-center text-[#666] text-[15px]">
              {price}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="mb-24 overflow-x-auto px-4">
  <div className="min-w-[1000px] rounded-[1rem] overflow-hidden border border-gray-200 shadow-sm font-sans">
    <div className="bg-[#002b41] text-white py-4 px-6 text-center border-b border-[#003b5c]">
      <h3 className="text-[16px] font-bold uppercase tracking-wider">
        Стоимость занятия с инструктором на основных склонах**
      </h3>
      <p className="text-[12px] opacity-80 uppercase mt-1">
        (В стоимость включено пользование кресельным подъемником)
      </p>
    </div>

    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#0091d5] text-white text-[13px] font-bold uppercase border-b border-[#007bb5]">
          <th rowSpan={2} className="py-4 px-4 border-r border-[#007bb5] w-[200px]">Кол-во человек в группе</th>
          <th colSpan={3} className="py-3 px-3 text-center border-r border-[#007bb5]">Взрослый</th>
          <th colSpan={3} className="py-3 px-3 text-center border-r border-[#007bb5]">Дети до 10 лет</th>
          <th colSpan={3} className="py-3 px-3 text-center border-r border-[#007bb5]">Дети до 7 лет</th>
          <th rowSpan={2} className="py-4 px-3 text-center min-w-[140px]">Последующий час</th>
        </tr>
        <tr className="bg-[#48b3e5] text-white text-[11px] uppercase border-b border-[#007bb5]">
          {Array(3).fill(["Буд день", "Вых день", "Празд день"]).flat().map((day, i) => (
            <th key={i} className={`py-2 px-1 text-center font-bold ${i % 3 === 2 ? 'border-r border-[#007bb5]' : 'border-r border-white/20'}`}>
              {day.split(' ').map((word, j) => <div key={j}>{word}</div>)}
            </th>
          ))}
        </tr>
      </thead>
      
      <tbody className="text-[14px] text-[#333]">
        {[
          { group: "Индивидуальное занятие", prices: ["1300", "1800", "2000", "1300", "1800", "2000", "1300", "1800", "2000"] },
          { group: "Группа из 2 человек*", prices: ["1000", "1500", "1700", "1000", "1500", "1700", "-", "-", "-"] },
          { group: "Группа из 3 человек*", prices: ["900", "1400", "1600", "900", "1400", "1600", "-", "-", "-"] },
          { group: "Группа из 4 человек*", prices: ["800", "1300", "1500", "-", "-", "-", "-", "-", "-"] },
          { group: "Группа из 5 и более человек*", prices: ["700", "1100", "1300", "-", "-", "-", "-", "-", "-"] },
        ].map((row, idx) => (
          <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
            <td className="py-4 px-4 font-bold bg-[#fcfcfc] border-r border-gray-100">{row.group}</td>
            {row.prices.map((price, i) => (
              <td key={i} className={`py-4 px-2 text-center ${i % 3 === 2 ? 'border-r border-gray-100' : ''}`}>
                {price}
              </td>
            ))}
            {idx === 0 && (
              <td rowSpan={5} className="bg-[#75cdff]/20 py-4 px-3 text-center align-middle border-l border-gray-100">
                <div className="font-bold text-[#007bb5] mb-2 uppercase text-[12px]">Любой день</div>
                <div className="text-[16px] font-black text-[#003b5c]">-10%</div>
                <div className="text-[10px] text-gray-500 uppercase leading-tight">от стоимости часа</div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>

    <div className="bg-[#f2f8fc] m-4 p-5 rounded-[0.8rem] border-l-[6px] border-[#0091d5]">
      <div className="space-y-4 text-[14px] text-[#333]">
        <p className="leading-relaxed">
          <span className="font-bold">Тариф "Все включено" - весь сезон.</span> В будние дни, при оплате индивидуального занятия, прокат и подъемник - бесплатно. 
          <a href="#" className="text-[#0091d5] ml-1 underline underline-offset-4 hover:text-[#007bb5]">Правила получения проката (перейти...)</a>
        </p>
        <p className="leading-relaxed">
          <span className="font-bold">Тариф "Все включено" - бархатный сезон с 11 марта.</span> В будние и выходные дни, при оплате индивидуального занятия, прокат и подъемник - бесплатно. 
          <a href="#" className="text-[#0091d5] ml-1 underline underline-offset-4 hover:text-[#007bb5]">Правила получения проката (перейти...)</a>
        </p>
      </div>
    </div>
  </div>
  
  <div className="mt-4 px-2 space-y-1 text-[12px] text-gray-400 italic">
    <p>* - стоимость указана на 1 человека в группе.</p>
    <p>** - продолжительность занятия 60 минут.</p>
  </div>
</div>
<div className="mb-24 overflow-x-auto px-4 font-sans">
  <div className="min-w-[900px] border border-gray-300 shadow-sm">
    <div className="bg-[#003b5c] text-white py-3 px-6 text-center border-b border-gray-300">
      <h3 className="text-[18px] font-bold uppercase tracking-widest">
        Абонемент на обучение
      </h3>
    </div>

    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#0091d5] text-white text-[15px] font-bold uppercase">
          <th className="py-4 px-6 border-r border-white/30 w-[20%] text-center">Кол-во занятий</th>
          <th className="py-4 px-6 border-r border-white/30 w-[45%] text-center">Описание</th>
          <th className="py-4 px-4 border-r border-white/30 text-center">Буд день</th>
          <th className="py-4 px-4 border-r border-white/30 text-center">Вых день</th>
          <th className="py-4 px-4 text-center">Празд день</th>
        </tr>
      </thead>
      
      <tbody className="text-[15px] text-[#333]">
        <tr className="border-b border-gray-300">
          <td className="py-8 px-6 border-r border-gray-300 text-center font-medium">3 занятия</td>
          <td className="py-4 px-8 border-r border-gray-300 leading-relaxed">
            Горные лыжи для начинающих на учебном склоне. <br />
            Сноуборд для начинающих на учебном склоне.
          </td>
          <td className="py-4 px-4 border-r border-gray-300 text-center font-bold">3200</td>
          <td className="py-4 px-4 border-r border-gray-300 text-center font-bold">4500</td>
          <td className="py-4 px-4 text-center text-gray-500 italic">не действует</td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-8 px-6 border-r border-gray-300 text-center font-medium">3 занятия</td>
          <td className="py-4 px-8 border-r border-gray-300 leading-relaxed">
            Горные лыжи для катающихся на основных склонах. <br />
            Сноуборд для катающихся на основных склонах.
          </td>
          <td className="py-4 px-4 border-r border-gray-300 text-center font-bold">3500</td>
          <td className="py-4 px-4 border-r border-gray-300 text-center font-bold">4800</td>
          <td className="py-4 px-4 text-center text-gray-500 italic">не действует</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-white p-4">
      <p className="text-[13px] text-gray-600 italic leading-snug">
        Для продвинутых учеников предполагаемый результат будет обговорен после 1 занятия. Для занятий по абонементу <br />
        также действует тариф "Все включено", описанный выше. Стоимость указана в будние и выходные дни.
      </p>
    </div>
  </div>
</div>
<div className="max-w-[1200px] mx-auto p-6 font-sans flex flex-col md:flex-row gap-12 items-start justify-center">
      
      <div className="w-full md:w-1/2 max-w-[500px]">
        <img 
          src={slu4} 
          alt="Instructor" 
          className="w-full h-auto rounded-[2rem] object-cover shadow-sm"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-[500px]">
        <div className="mb-8">
          <p className="text-[#0091d5] text-sm font-bold text-center mb-1">Бронирование инструкторов</p>
          <h2 className="text-[28px] font-black text-[#002b41] text-center uppercase leading-tight">
            Онлайн-бронирование <br /> инструкторов
          </h2>
        </div>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[12px] text-gray-700 font-bold mb-1 block">Фамилия ученика (*)</label>
              <input type="text" placeholder="Фамилия" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
            </div>
            <div className="flex-1">
              <label className="text-[12px] text-gray-700 font-bold mb-1 block">Имя ученика (*)</label>
              <input type="text" placeholder="Имя" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
            </div>
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Контактный номер телефона (*)</label>
            <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-gray-50/30">
              <select className="p-3 text-sm bg-transparent outline-none border-r border-gray-200">
                <option>Rus</option>
              </select>
              <input type="text" placeholder="+7 (555) 000-0000" className="w-full p-3 text-sm bg-transparent outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Электронная почта (*)</label>
            <input type="email" placeholder="you@company.com" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Укажите вид спорта (сноуборд или горные лыжи) (*)</label>
            <input type="text" placeholder="Сноуборд" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Возраст ученика (*)</label>
            <input type="text" placeholder="22" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Укажите дату занятия (*)</label>
            <input type="text" placeholder="17.03.2023" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Укажите время занятия (*)</label>
            <input type="text" placeholder="13.30" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5]" />
          </div>

          <div>
            <label className="text-[12px] text-gray-700 font-bold mb-1 block">Напишите ваши пожелания к занятию</label>
            <textarea rows="4" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50/30 outline-none focus:border-[#0091d5] resize-none"></textarea>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="consent" className="w-4 h-4 rounded border-gray-300" />
            <label htmlFor="consent" className="text-[12px] text-gray-600">Согласие на обработку персональных данных</label>
          </div>

          <button type="submit" className="w-full bg-[#0091d5] text-white font-bold py-4 rounded-lg hover:bg-[#007bb5] transition-colors mt-4">
            Забронировать
          </button>
        </form>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto py-16 px-4 font-sans">
 
      <h2 className="text-[#0091d5] text-4xl font-black mb-12">Акции</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        

        <div 
          className="relative overflow-hidden rounded-[2.5rem] h-[500px] bg-cover bg-center group"
          style={{ backgroundImage: `url(${slu5})` }}
        >
  
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="relative h-full p-10 flex flex-col text-white">
            <h3 className="text-4xl font-black leading-tight mb-8">
              Акция <br /> "Урок - все включено"
            </h3>
            
            <div className="flex-1">
              <p className="text-lg font-medium opacity-90 mb-2">При занятии с инструктором</p>
              <p className="text-2xl font-black leading-tight tracking-wide">
                ПРОКАТ СНАРЯЖЕНИЯ + <br />
                КРЕСЕЛЬНЫЙ ПОДЪЁМНИК <br />
                БЕСПЛАТНО
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-[12px] opacity-70 mb-6">*За исключением праздничных дней</p>
              <button className="bg-[#0091d5] text-white font-bold py-4 px-12 rounded-xl hover:bg-[#007bb5] transition-all w-full md:w-auto">
                Заказать
              </button>
            </div>
          </div>
        </div>

       
        <div 
          className="relative overflow-hidden rounded-[2.5rem] h-[500px] bg-cover bg-center group"
          style={{ backgroundImage: `url(${slu6})` }}
        >
          {/* Градиент катмары */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          <div className="relative h-full p-10 flex flex-col text-white">
            <h3 className="text-4xl font-black leading-tight mb-8">
              Акции <br /> на 100 купон
            </h3>

            <div className="flex-1">
              <p className="text-xl font-medium opacity-90">Скидка до</p>
              <p className="text-7xl font-black italic tracking-tighter">50%</p>
            </div>

            <div className="mt-auto">
              <p className="text-[12px] opacity-70 mb-6">*За исключением праздничных дней</p>
              <button className="bg-[#0091d5] text-white font-bold py-4 px-12 rounded-xl hover:bg-[#007bb5] transition-all w-full md:w-auto">
                Заказать
              </button>
            </div>
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