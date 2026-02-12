import news1 from '../../img/Mask group (2).png';
import news2 from '../../img/Mask group (3).png';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">




            <div className="flex flex-col md:flex-row mt-10 gap-6">

                <div className="relative w-full md:w-1/2 h-[240px] md:h-[406px] rounded-xl overflow-hidden">
                    <img
                        src={news1}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* TEXT */}
                    <p className="absolute top-6 left-6 max-w-[520px] text-white text-2xl md:text-4xl font-extrabold leading-tight">
                        Состоялось первенство России по сноуборду в дисциплине Big-Air
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="relative w-full md:w-1/2 h-[240px] md:h-[406px] rounded-xl overflow-hidden">
                    <img
                        src={news2}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <p className="absolute top-6 left-6 max-w-[420px] text-white text-2xl md:text-3xl font-extrabold leading-tight">
                        Всероссийские соревнования по сноуборду в городе Куса
                    </p>
                </div>

            </div>

            {/* TOP */}
            <div className="flex mt-7 flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-4xl font-bold text-blue-500">
                    Новости
                </h2>
                <Link to="/news"> <button className='bg-blue-500 text-white p-3 rounded-lg px-6 md:px-10 hover:bg-blue-600'>
                    Посмотреть все
                </button>
                </Link>
            </div>
        </div>
    );
};

export default News;
