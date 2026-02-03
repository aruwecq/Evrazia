import Banner from "../banner/Banner";
import fr1 from '../../img/icons8-yandex-zen-100 2.svg';
import fr2 from '../../img/icons8-вконтакте-144 2.svg';
import fr3 from '../../img/icons8-ютуб-100 2.svg';

export function Vacansi() {
  const jobs = [1, 2, 3];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="mb-8 rounded-[2.5rem] overflow-hidden transition-transform duration-500 hover:shadow-2xl">
        <Banner />
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-[#009EE3] mb-8 text-left">
        Ищите работу? А мы готовимся к сезону!
      </h1>

      <div className="space-y-4 mb-16">
        {jobs.map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-700 mb-1">Повар со стажем работы</h3>
              <p className="text-sm text-gray-500">
                Обращаться по телефону: <span className="text-gray-600">89193003744, Елена Владимировна</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Резюме присылать на адрес: <span className="text-blue-500">mail@euroasia.su</span> или по телефону 8 (3513) 79-09-79
              </p>
            </div>
            
            <button className="mt-4 md:mt-0 px-10 py-2 border-2 border-[#009EE3] text-[#009EE3] rounded-full font-semibold hover:bg-[#009EE3] hover:text-white transition-colors">
              Откликнуться
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 py-8">
        <a href="#" className="hover:scale-110 transition-transform">
          <img src={fr2} alt="VK" className="w-16 h-16" />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <img src={fr3} alt="YouTube" className="w-16 h-16" />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <img src={fr1} alt="Zen" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}