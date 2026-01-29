import React from 'react';
import Banner from '../../ui/banner/Banner';
import img1 from '../../img/Group 5707.jpg';
import img2 from '../../img/Group 5708.jpg';

import Icons from '../../ui/icons/Icons';

    
function Events() {
    // Tadbirlar uchun ma'lumotlar
    const calendarData = [
        {
            month: "АПРЕЛЬ 2023",
            events: [
                { id: 1, title: "Семинар судей по горным лыжам. Лекторы: Чекменев и Кравченко", date: "22 октября", time: "с 11.00 до 15.00 в кафе сервисного здания ЦАО 'Евразия'", hasDoc: "Положение" },
                { id: 2, title: "Осенняя смена лагеря 'Горная семейка'", date: "30 октября - 5 ноября", hasDoc: null },
            ]
        },
        {
            month: "МАРТ 2023",
            events: [
                { id: 3, title: "Семинар судей по сноуборду. Лекторы: Галямов и Лапшина в кафе сервисного здания ЦАО 'Евразия'", date: "5-6 ноября", hasDoc: null },
                { id: 4, title: "Осенняя смена лагеря 'Горная семейка' на первом снегу", date: "23-28 ноября", hasDoc: null },
                { id: 5, title: "Курс инструкторов по сноуборду и горным лыжам категории 'С'", date: "18-27 ноября", hasDoc: "Положение" },
                { id: 6, title: "Неофициальное открытие сезона 2022-2023", date: "19 ноября", hasDoc: "Анонс" },
            ]
        },
        {
            month: "ФЕВРАЛЬ 2023",
            events: [
                { id: 7, title: "Официальное открытие сезона", date: "3 декабря", hasDoc: "Анонс" },
                { id: 8, title: "Региональные соревнования «Снежные игры», 1 этап за призы ЦАО «Евразия» Слалом-гигант, Слалом, Комбинация.", date: "11-15 декабря", hasDoc: "Положение" },
                { id: 9, title: "Кубок области 1 этап Слалом-гигант, Слалом, Комбинация", date: "12-15 декабря", hasDoc: null },
                { id: 10, title: "4 Этап Кубка России по горнолыжному спорту: слалом-гигант, слалом", date: "15-22 декабря", hasDoc: "Положение" },
                { id: 11, title: "Кубок России среди глухих по сноуборду: sbx - psl", date: "20-25 декабря", hasDoc: "Положение" },
                { id: 12, title: "Новогодняя ночь в ЦАО “Евразия”", date: "31 декабря", hasDoc: "Подробнее" },
            ]
        },
        {
            month: "ЯНВАРЬ 2023",
            events: [
                { id: 13, title: "Новогодние праздники", date: "1-8 января", hasDoc: "Отчет" },
                { id: 14, title: "Первенство России по сноуборду в дисциплине биг-эйр", date: "12-16 января", hasDoc: "Отчет" },
                { id: 15, title: "Кубок Уральских гор", date: "17-20 января", hasDoc: "Положение" },
                { id: 16, title: "Курс инструкторов категории 'C'", date: "22-31 января", hasDoc: "Отчет" },
                { id: 17, title: "Первенство Челябинской области среди юношей и девушек", date: "25-28 января", hasDoc: "Положение" },
                { id: 18, title: "Первенство Уральского Федерального округа", date: "25-28 января", hasDoc: "Отчет" },
            ]
        }
    ];

    return (
        <div className="bg-white pb-10 font-sans">
            <Banner />

            <div className="max-w-7xl mx-auto px-6 mt-16 text-center md:text-left">
                {/* 1. Sarlavha va Grid */}
                <h2 className="text-[#00AEEF] text-3xl font-black mb-10 uppercase tracking-tight">
                    Ближайшие мероприятия
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="rounded-[40px] overflow-hidden shadow-lg hover:scale-[1.01] transition-transform cursor-pointer">
                        <img src={img1} alt="Event 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-lg hover:scale-[1.01] transition-transform cursor-pointer">
                        <img src={img2} alt="Event 2" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* 2. Kalendar Sarlavhasi */}
                <h2 className="text-[#00AEEF] text-3xl font-black uppercase tracking-tight leading-tight mb-16">
                    Календарь мероприятий ЦАО "ЕВРАЗИЯ" <br />
                    <span className="text-[#00AEEF]">сезон 2022-2023</span>
                </h2>

                {/* 3. Dinamik Kalendar Ro'yxati (Barcha oylar) */}
                <div className="space-y-20">
                    {calendarData.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-center text-2xl font-bold text-[#1e293b] mb-10 uppercase tracking-[0.2em]">
                                {section.month}
                            </h3>

                            <div className="space-y-4">
                                {section.events.map((event) => (
                                    <div key={event.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-all gap-5">
                                        <div className="flex-1 text-left">
                                            <h4 className="text-[17px] font-bold text-[#1e293b] mb-1 leading-tight">
                                                {event.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 font-semibold uppercase">
                                                {event.time && <span className="block normal-case mb-1">{event.time}</span>}
                                                {event.date}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {event.hasDoc && (
                                                <button className="px-6 py-2.5 border-2 border-[#00AEEF] text-[#00AEEF] rounded-2xl text-[13px] font-black uppercase tracking-wider hover:bg-[#00AEEF] hover:text-white transition-all min-w-[130px]">
                                                    {event.hasDoc}
                                                </button>
                                            )}
                                            <button className="px-8 py-2.5 bg-[#00AEEF] text-white rounded-2xl text-[13px] font-black uppercase tracking-wider hover:bg-[#008cc0] shadow-md transition-all min-w-[100px]">
                                                Отчёт
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Icons />
            </div>
        </div>
    );
}

export default Events;