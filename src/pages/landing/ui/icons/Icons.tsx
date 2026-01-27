import React from 'react'
import kontktimg1 from '../../img/icons8-вконтакте-144 2.svg';
import yutibimg2 from '../../img/icons8-ютуб-100 2.svg';
import yandeximg3 from '../../img/icons8-yandex-zen-100 2.svg';


function Icons() {
  return (
    <div>
                      <div className="flex justify-center items-center gap-8 py-16 mt-10 border-t border-gray-100">
                    <a href="https://vk.com" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center hover:bg-[#008cc0] hover:scale-110 transition-all shadow-xl">
                        <img src={kontktimg1} alt="VK" className="w-9 h-9" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center hover:bg-[#008cc0] hover:scale-110 transition-all shadow-xl">
                        <img src={yutibimg2} alt="YouTube" className="w-9 h-9" />
                    </a>
                    <a href="https://yandex.ru" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center hover:bg-[#008cc0] hover:scale-110 transition-all shadow-xl">
                        <img src={yandeximg3} alt="Yandex" className="w-9 h-9" />
                    </a>
                </div>
    </div>
  )
}

export default Icons
