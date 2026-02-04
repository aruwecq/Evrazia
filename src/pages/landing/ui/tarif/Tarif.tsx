import React, { useState } from "react";
import Banner from "../banner/Banner";

import fr1 from '../../img/icons8-yandex-zen-100 2.svg' 
import fr2 from '../../img/icons8-вконтакте-144 2.svg'
import fr3 from '../../img/icons8-ютуб-100 2.svg'

import evro from '../../img/evro.png'
import sne from '../../img/sne.png'

export function Tarif() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const weekdayData = [
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки)",
      category: [
        { age: "Дети до 14 лет", prices: ["250", "350", "400", "450", "500"] },
        { age: "Взрослые", prices: ["500", "600", "700", "800", "1000"] },
      ],
      isSpecial: false,
    },
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки) при занятии с инструктором",
      category: [
        { age: "Дети до 14 лет", prices: ["200", "350", "400", "450", "500"] },
        { age: "Взрослые", prices: ["300", "600", "700", "800", "1000"] },
      ],
      isSpecial: true,
    },
    {
      name: "Горные лыжи / сноуборд",
      category: [
        { age: "Дети до 14 лет", prices: ["150", "200", "225", "250", "275"] },
        { age: "Взрослые", prices: ["300", "350", "400", "450", "600"] },
      ],
      isSpecial: false,
    },
  ];

  // 2. Выходной күн үчүн маалыматтар
  const weekendData = [
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки)",
      category: [
        { age: "Дети до 14 лет", prices: ["400", "450", "500", "550", "600"] },
        { age: "Взрослые", prices: ["700", "800", "900", "1000", "1200"] },
      ],
      isSpecial: false,
    },
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки) при занятии с инструктором",
      category: [
        { age: "Дети до 14 лет", prices: ["300", "450", "500", "550", "600"] },
        { age: "Взрослые", prices: ["500", "800", "900", "1000", "1200"] },
      ],
      isSpecial: true,
    },
    {
      name: "Горные лыжи / сноуборд",
      category: [
        { age: "Дети до 14 лет", prices: ["250", "275", "300", "325", "350"] },
        { age: "Взрослые", prices: ["400", "450", "500", "550", "650"] },
      ],
      isSpecial: false,
    },
  ];

  const holidayData = [
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки)",
      category: [
        { age: "Дети до 14 лет", prices: ["500", "600", "700", "800", "900"] },
        { age: "Взрослые", prices: ["900", "1000", "1200", "1300", "1500"] },
      ],
      isSpecial: false,
    },
    {
      name: "Комплект (горные лыжи, сноуборд, ботинки, палки) при занятии с инструктором",
      category: [
        { age: "Дети до 14 лет", prices: ["300", "350", "700", "750", "600"] },
        { age: "Взрослые", prices: ["500", "600", "700", "1000", "1200"] },
      ],
      isSpecial: true,
    },
    {
      name: "Горные лыжи / сноуборд",
      category: [
        { age: "Дети до 14 лет", prices: ["250", "275", "300", "325", "350"] },
        { age: "Взрослые", prices: ["400", "450", "500", "550", "650"] },
      ],
      isSpecial: false,
    },
  ];

  const tubingData = [
    { day: "Будни", prices: ["100", "150", "200", "300"] },
    { day: "Выходные", prices: ["150", "200", "300", "450"] },
    { day: "Праздничные", prices: ["200", "300", "400", "600"] },
  ];

  const scheduleData = [
    { day: "Понедельник", times: ["09.00 - 18.00", "09.00 - 18.00", "09.00 - 18.00", "10.00 - 17.00"] },
    { day: "Вторник", times: ["09.00 - 18.00", "09.00 - 18.00", "09.00 - 18.00", "09.00 - 18.00"] },
    { day: "Среда", times: ["09.00 - 18.00", "09.00 - 18.00", "09.00 - 18.00", "09.00 - 18.00"] },
  ];

  const renderTable = (data) => (
    <div className="overflow-x-auto mb-20">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 text-[12px] uppercase border-b border-gray-100">
            <th className="py-4 font-normal w-[30%]">Наименование</th>
            <th className="py-4 font-normal w-[20%]">Возрастная категория</th>
            <th className="py-4 font-normal text-center leading-tight">1 час</th>
            <th className="py-4 font-normal text-center leading-tight">2 часа</th>
            <th className="py-4 font-normal text-center leading-tight">3 часа</th>
            <th className="py-4 font-normal text-center leading-tight">4 часа</th>
            <th className="py-4 font-normal text-center leading-tight">день</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.category.map((cat, catIdx) => (
                <tr 
                  key={`${idx}-${catIdx}`}
                  className={`
                    ${item.isSpecial ? 'bg-[#89CFF0]' : (idx % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white')} 
                    transition-colors 
                    ${catIdx === item.category.length - 1 ? 'border-b border-white' : ''}
                  `}
                >
                  {catIdx === 0 && (
                    <td className="p-4 align-middle" rowSpan={item.category.length}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 ${item.isSpecial ? 'bg-white' : 'bg-[#ADD8E6]'}`}></div>
                        <span className={`text-[14px] font-bold leading-tight ${item.isSpecial ? 'text-gray-900' : 'text-gray-700'}`}>
                          {item.name}
                        </span>
                      </div>
                    </td>
                  )}
                  <td className={`px-4 py-2 text-[13px] font-semibold align-middle ${item.isSpecial ? 'text-gray-900' : 'text-gray-600'}`}>
                    {cat.age}
                  </td>
                  {cat.prices.map((price, pIdx) => (
                    <td key={pIdx} className={`px-4 py-2 text-center text-[16px] font-bold align-middle ${item.isSpecial ? 'text-gray-900' : 'text-gray-700'}`}>
                      {price}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="mb-12 rounded-[2.5rem] overflow-hidden">
        <Banner />
      </div>

      <div className="mb-12">
        <h1 className="text-[#009EE3] text-6xl font-black mb-10 italic uppercase tracking-tighter text-left">
          Сезон 2025/2026
        </h1>
        <div className="text-center space-y-3 mb-12">
          <p className="text-[#009EE3] text-[22px] font-bold">
            Для вас работает прокат горнолыжного и сноубордического снаряжения.
          </p>
          <p className="text-[#009EE3] text-[18px] font-bold max-w-5xl mx-auto leading-tight">
            Чтобы воспользоваться прокатом снаряжения, необходим залог (документ удостоверяющий личность: паспорт или водительское удостоверение).
          </p>
        </div>
      </div>

      {/* Таблицалар */}
      <h2 className="text-[#009EE3] text-[28px] font-extrabold mb-6 uppercase tracking-tight text-left">СТОИМОСТЬ ПРОКАТА В БУДНИЙ ДЕНЬ</h2>
      {renderTable(weekdayData)}

      <h2 className="text-[#009EE3] text-3xl font-black mb-8 uppercase italic text-left">Стоимость проката в выходной день</h2>
      {renderTable(weekendData)}

      <h2 className="text-[#009EE3] text-3xl font-black mb-8 uppercase italic text-left">Стоимость проката в праздничные дни</h2>
      {renderTable(holidayData)}

      {/* Тюбинг таблицасы */}
   <h2 className="text-[#009EE3] text-3xl font-black mb-8 uppercase italic text-left">
  Стоимость проката ватрушек (тюбинг).
</h2>
<div className="overflow-x-auto mb-20">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="text-gray-400 text-[11px] uppercase border-b border-gray-100">
        <th className="py-4 px-4 font-normal w-[30%]">Наименование</th>
        <th className="py-4 px-4 font-normal w-[20%]">Дни</th>
        <th className="py-4 font-normal text-center">1 час</th>
        <th className="py-4 font-normal text-center">2 часа</th>
        <th className="py-4 font-normal text-center">3 часа</th>
        <th className="py-4 font-normal text-center">день</th>
      </tr>
    </thead>
    <tbody className="bg-[#F8F9FA]">
      {tubingData.map((row, idx) => (
        <tr key={idx}>
          {idx === 0 && (
            <td 
              className="p-4 align-middle border-b border-white" 
              rowSpan={tubingData.length}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ADD8E6] flex-shrink-0"></div>
                <span className="text-[14px] font-bold text-gray-700 leading-tight">
                  Ватрушка (тюбинг)
                </span>
              </div>
            </td>
          )}
          
          <td className="px-4 py-2 text-[13px] font-semibold text-gray-600 align-middle border-b border-white">
            {row.day}
          </td>
          
          {row.prices.map((price, pIdx) => (
            <td 
              key={pIdx} 
              className="px-4 py-2 text-center text-[16px] font-bold text-gray-700 align-middle border-b border-white"
            >
              {price}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

<h2 className="text-[#009EE3] text-3xl font-black mb-8 uppercase italic text-left">
  График работы горнолыжных трасс и службы проката снаряжения
</h2>
<div className="overflow-x-auto mb-20">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="text-gray-400 text-[11px] uppercase border-b border-gray-100">
        <th className="py-4 font-normal w-[25%] px-4">День недели</th>
        <th className="py-4 font-normal text-center leading-tight">График работы трасс без освещения</th>
        <th className="py-4 font-normal text-center leading-tight">График работы трасс с освещением №1 и №2</th>
        <th className="py-4 font-normal text-center leading-tight">График работы учебного склона</th>
        <th className="py-4 font-normal text-center leading-tight">График работы службы проката и сервиса снаряжения</th>
      </tr>
    </thead>
    <tbody>
      {scheduleData.map((row, idx) => (
        <tr 
          key={idx} 
          className={`${idx % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white'} border-b border-white`}
        >
          <td className="p-4 align-middle">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ADD8E6] flex-shrink-0"></div>
              <span className="text-[14px] font-bold text-gray-700">{row.day}</span>
            </div>
          </td>
          {row.times.map((time, tIdx) => (
            <td 
              key={tIdx} 
              className="p-4 text-center text-[14px] font-semibold text-gray-600 align-middle"
            >
              {time}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="mt-10 mb-20">
        <h2 className="text-[#009EE3] text-4xl font-black mb-10 italic uppercase text-left">Акции</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-[2.5rem] overflow-hidden h-[450px] shadow-lg group">
            <img src={evro} alt="Евробус" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-12 flex flex-col h-full text-white bg-black/10 text-left">
              <h3 className="text-5xl font-black mb-4">Евробус - экспресс</h3>
              <p className="text-2xl font-bold uppercase">Челябинск-Куса</p>
              <p className="text-xl mt-1 opacity-90 italic">за 3 часа</p>
              <button className="mt-auto bg-[#009EE3] text-white py-4 px-12 rounded-2xl self-start font-bold text-lg">Заказать</button>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden h-[450px] shadow-lg group">
            <img src={sne} alt="Снежные будни" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-12 flex flex-col h-full text-white bg-black/5 text-left">
              <h3 className="text-5xl font-black mb-4">Снежные будни</h3>
              <p className="text-lg font-black uppercase">Прокат снаряжения +</p>
              <p className="text-lg font-black uppercase mb-4">Кресельный подъемник</p>
              <p className="text-xl italic mb-6">с понедельника по пятницу</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-7xl font-black">1400</span>
                <span className="text-2xl font-bold">руб.</span>
                <span className="text-7xl font-black ml-6">4</span>
                <span className="text-2xl font-bold">часа</span>
              </div>
              <p className="text-[12px] opacity-90 mb-6 font-bold">*За исключением праздничных дней</p>
              <button className="mt-auto bg-[#009EE3] text-white py-4 px-12 rounded-2xl self-start font-bold text-lg">Заказать</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-16">
          <a href="#" className="w-14 h-14 rounded-full bg-[#009EE3] flex items-center justify-center hover:scale-110 transition-transform">
            <img src={fr2} alt="VK" className="w-8 h-8 brightness-0 invert" />
          </a>
          <a href="#" className="w-14 h-14 rounded-full bg-[#009EE3] flex items-center justify-center hover:scale-110 transition-transform">
            <img src={fr3} alt="YouTube" className="w-8 h-8 brightness-0 invert" />
          </a>
          <a href="#" className="w-14 h-14 rounded-full bg-[#009EE3] flex items-center justify-center hover:scale-110 transition-transform">
            <img src={fr1} alt="Lgo" className="w-8 h-8 brightness-0 invert" />
          </a>
        </div>
      </div>
    </div>
  );
}