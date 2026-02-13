import news1 from '../../img/Mask group (2).png';
import news2 from '../../img/Mask group (3).png';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center sm:text-left">
                Новости
            </h2>

            <div className="flex flex-col md:flex-row mt-6 sm:mt-10 gap-6">
                <div className="relative w-full md:w-1/2 h-[300px] sm:h-[406px] rounded-xl overflow-hidden group">
                    <img
                        src={news1}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <p className="absolute top-4 left-4 sm:top-6 sm:left-6 right-4 text-white text-xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                        Состоялось первенство России по сноуборду в дисциплине Big-Air
                    </p>
                </div>

                <div className="relative w-full md:w-1/2 h-[300px] sm:h-[406px] rounded-xl overflow-hidden group">
                    <img
                        src={news2}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <p className="absolute top-4 left-4 sm:top-6 sm:left-6 right-4 text-white text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                        Всероссийские соревнования по сноуборду в городе Куса
                    </p>
                </div>
            </div>

            <div className="flex mt-7 justify-center items-center">
                <Link to="/news" className="w-full sm:w-auto text-center"> 
                    <button className="w-full sm:w-auto bg-blue-500 text-white py-3 px-10 rounded-lg hover:bg-blue-600 transition-all active:scale-95">
                        Посмотреть все
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default News;