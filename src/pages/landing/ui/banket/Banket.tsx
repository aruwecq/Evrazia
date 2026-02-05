import React, { useState, useEffect, useRef } from "react";
import Banner from "../banner/Banner";

import ban1 from '../../img/ban1.png';
import ban2 from '../../img/ban2.png';
import ban3 from '../../img/ban3.png';
import ban4 from '../../img/ban4.png';

import fr1 from '../../img/icons8-yandex-zen-100 2.svg';
import fr2 from '../../img/icons8-вконтакте-144 2.svg';
import fr3 from '../../img/icons8-ютуб-100 2.svg';

import kar1 from '../../img/kar1.png'
import kar2 from '../../img/kar2.png'
import kar3 from '../../img/kar3.png'
import kar4 from '../../img/kar4.png'
import kar5 from '../../img/kar5.png'

export function Banket() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const originalImages = [ban1, ban2, ban3, ban4];
    
    const extendedImages = [
      originalImages[originalImages.length - 1],
      ...originalImages,
      originalImages[0]
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
      const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      };

      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      if (currentIndex === extendedImages.length - 1) {
        timeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(1);
        }, 700);
      }

      if (currentIndex === 0) {
        timeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(extendedImages.length - 2);
        }, 700);
      }

      return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, extendedImages.length]);

    const mangalData = [
      { time: "2 часа", price: "600" },
      { time: "4 часа", price: "800" },
      { time: "день", price: "1200" },
    ];

    const karList = [kar1, kar2, kar3, kar4, kar5];
    const infiniteKar = [...karList, ...karList, ...karList];

    return (
      <div className="max-w-7xl mx-auto p-6 font-sans overflow-hidden">
        <div className="mb-12 rounded-[2.5rem] overflow-hidden">
          <Banner />
        </div>

        <div className="mt-20">
          <h2 className="text-[#1A202C] text-5xl font-bold mb-12 text-center">
            Стоимость аренды мангальной зоны
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-[13px] border-b border-gray-100 uppercase tracking-wider">
                  <th className="py-6 px-8 font-normal">Время аренды*</th>
                  <th className="py-6 px-8 font-normal text-right">Стоимость, рублей</th>
                </tr>
              </thead>
              <tbody>
                {mangalData.map((item, idx) => (
                  <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
                    <td className="py-6 px-8 align-middle font-semibold text-gray-700">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-[#ADD8E6] opacity-80"></div>
                        {item.time}
                      </div>
                    </td>
                    <td className="py-6 px-8 text-right font-bold text-gray-500">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-20 relative w-full overflow-visible">
          <div 
            className="flex gap-4"
            style={{ 
              transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
              transform: `translateX(calc(50% - (70% / 2) - ${currentIndex * 72.3}%))`
            }}
          >
            {extendedImages.map((img, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[70%] transition-all duration-700 ${
                    isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                  }`}
                >
                  <img 
                    src={img} 
                    alt="Slide" 
                    className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-xl"
                    style={{ imageRendering: "auto" }}
                  />
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center gap-3 mt-10">
            {originalImages.map((_, index) => {
              const normalizedIndex = (currentIndex - 1 + originalImages.length) % originalImages.length;
              return (
                <div
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    normalizedIndex === index ? "bg-[#009EE3] w-10" : "bg-gray-300 w-2.5"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-16 pb-10">
          {[fr2, fr3, fr1].map((icon, i) => (
            <a key={i} href="#" className="w-12 h-12 rounded-full bg-[#009EE3] flex items-center justify-center hover:scale-110 transition-transform">
              <img src={icon} alt="social" className="w-6 h-6 brightness-0 invert" />
            </a>
          ))}
        </div>

        <div className="max-w-7xl mx-auto p-6 font-sans bg-white">
          <div className="max-w-[1100px] mx-auto p-4 font-sans leading-tight">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.7fr] gap-6 items-start">
              <div className="flex flex-col">
                <img
                  src={kar1}
                  alt="Корпоратив"
                  className="w-full h-[220px] object-cover rounded-[1.5rem] mb-4"
                />
                <h2 className="text-[#009EE3] text-[28px] md:text-[32px] font-extrabold mb-4 uppercase leading-[0.9]">
                  Корпоративные программы<br />и банкеты
                </h2>
                <div className="text-[#5A6773] text-[13px] md:text-[14px] space-y-3 pr-2">
                  <p>
                    Сказочный курорт «Евразия» приглашает Вас встретить "Новый год" за городом или провести банкет в честь праздника в вашей компании. Комфортные условия и гостеприимная атмосфера курорта дадут Вам возможность в полной мере испытать праздничные эмоции.
                  </p>
                  <p>
                    Проведение корпоративных мероприятий от профессионалов гарантирует Вам неповторимый отдых.
                  </p>
                  <p>
                    Центр активного отдыха «Евразия» предоставляет все условия для хорошего отдыха большой компанией и небольшим дружным коллективом.
                  </p>
                  <p className="text-[13px] leading-tight pt-2 border-t border-transparent">
                    К услугам клиентов курорта: ресторан и гостиница, горнолыжные склоны, тюбинговая трасса, прокат снаряжения и опытные инструкторы для любителей активных видов спорта и многое другое.
                  </p>
                </div>
              </div>

              <div className="h-full">
                <img
                  src={kar2}
                  alt="Праздник"
                  className="w-full h-[520px] object-cover rounded-[2rem]"
                />
              </div>

              <div className="text-[#5A6773] text-[14px] leading-[1.5] space-y-6 pt-2">
                <p>
                  Центр активного отдыха <br /> «Евразия» предлагает <br /> оптимальные условия <br /> для Вашего комфортного <br /> проживания и <br /> сбалансированного <br />  питания.
                </p>
                <p>
                  К Вашим <br /> услугам <br /> предоставляется <br /> гостиничный комплекс у <br /> подножья склонов and <br /> ресторан в стиле <br />альпийского шале.
                </p>
                <p>
                  Правильное питание – <br /> залог хорошего <br /> самочувствия. На выбор <br /> гостей наши кулинарные <br /> мастера предложат <br /> меню на любой вкус.
                </p>
              </div>
            </div>

            <div className="w-full text-center mt-6">
              <p className="text-[#009EE3] text-[12px] font-semibold">
                *В стоимость не включено использование музыкального и светового оборудования.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[36px] md:text-[42px] font-extrabold text-[#1A202C] mb-12 leading-tight">
            Стоимость* проведения банкета – от <br />
            <span className="font-extrabold">1500 рублей/персона.</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm">
              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Банкетное меню №1
                </p>
                <p className="text-[14px] text-gray-400 mt-1">
                  за 1500 руб
                </p>
              </div>
              <button 
                onClick={() => setSelectedMenu({title: "Банкетное меню №1", price: "1500 руб", info: "В данное меню входят холодные закуски, два вида салатов, основное горячее блюдо на выбор и безалкогольные напитки. Идеально подходит для классического корпоративного вечера."})}
                className="rounded-full border border-[#009EE3] px-7 py-2.5 text-[14px] font-medium text-[#009EE3] transition-all hover:bg-[#009EE3] hover:text-white">
                Посмотреть
              </button>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm">
              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Банкетное меню №2
                </p>
                <p className="text-[14px] text-gray-400 mt-1">
                  за 1500 руб
                </p>
              </div>
              <button 
                onClick={() => setSelectedMenu({title: "Банкетное меню №2", price: "1500 руб", info: "Меню №2 ориентировано на любителей кавказской кухни: ассорти шашлыков, запеченные овощи, традиционные соусы и авторские десерты от нашего шеф-повара."})}
                className="rounded-full border border-[#009EE3] px-7 py-2.5 text-[14px] font-medium text-[#009EE3] transition-all hover:bg-[#009EE3] hover:text-white">
                Посмотреть
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-28">
          <h2 className="text-[#009EE3] text-[36px] md:text-[42px] font-extrabold mb-12">
            Корпоративная программа.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <img
                src={kar3}
                alt="Корпоратив"
                className="w-full h-[260px] object-cover rounded-[2rem] mb-6"
              />
              <p className="text-[#5A6773] text-[14px] leading-[1.6] max-w-[520px]">
                ЦАО «Евразия» приглашает Вас и Ваших коллег на занятия
                горнолыжным спортом по корпоративной программе.
                Программа подразумевает посещение вашими партнерами,
                клиентами или коллегами центра на льготных условиях
                в течение всего сезона.
              </p>
            </div>

            <div className="grid grid-cols-[1fr_0.9fr] gap-6 items-start">
              <img
                src={kar4}
                alt="Праздник"
                className="w-full h-[420px] object-cover rounded-[2.5rem]"
              />
              <p className="text-[#5A6773] text-[14px] leading-[1.6] pt-2">
                ЦАО «Евразия» приглашает Вас и Ваших коллег на занятия
                горнолыжным спортом по корпоративной программе.
                Программа подразумевает посещение вашими партнерами,
                клиентами или коллегами центра на льготных условиях
                в течение всего сезона.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#009EE3] text-[13px] font-semibold max-w-4xl mx-auto">
              ЦАО «Евразия» славится разнообразием горнолыжных трасс разного уровня сложности
              и отлично подготовленным снежным полотном. Мы уверены, что каждый наш гость
              сможет подобрать себе занятие по душе!
            </p>
          </div>
        </div>

        <div className="mt-32 w-full overflow-hidden">
          <h2 className="text-center text-[28px] md:text-[32px] font-semibold text-[#1A202C] max-w-4xl mx-auto mb-14 leading-snug">
            По программе действует скидка на все <br /> услуги ЦАО «Евразия»
            до <span className="font-bold">20%</span> для <br /> корпоративных клиентов.
          </h2>

          <div className="relative w-full">
            <div className="flex gap-6 animate-scroll-infinite">
              {infiniteKar.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[450px] h-[340px]"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedMenu && (
          <div 
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md transition-all"
            onClick={() => setSelectedMenu(null)}
          >
            <div 
              className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-[90%] shadow-2xl relative scale-up-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-[#009EE3] transition-colors"
                onClick={() => setSelectedMenu(null)}
              >
                &times;
              </button>
              
              <h3 className="text-[#1A202C] text-3xl font-bold mb-2">{selectedMenu.title}</h3>
              <p className="text-[#009EE3] font-bold text-lg mb-6">{selectedMenu.price}</p>
              
              <div className="h-[1px] bg-gray-100 w-full mb-6"></div>
              
              <p className="text-[#5A6773] text-lg leading-relaxed">
                {selectedMenu.info}
              </p>
              
              <button 
                onClick={() => setSelectedMenu(null)}
                className="mt-10 w-full py-4 bg-[#009EE3] text-white rounded-2xl font-bold text-lg hover:bg-[#0088c4] transition-all shadow-lg shadow-[#009EE3]/30"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scrollInfinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-450px * 5 - 24px * 5)); }
          }
          .animate-scroll-infinite {
            display: flex;
            width: max-content;
            animation: scrollInfinite 20s linear infinite;
          }
          .scale-up-center {
            animation: scale-up-center 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          }
          @keyframes scale-up-center {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}} />
      </div>
    );
    
}
