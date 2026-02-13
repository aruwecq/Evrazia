import post1 from '../../img/Mask group (2).png'
import post2 from '../../img/Mask group (3).png'
import { Link } from 'react-router-dom'

function Poster() {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10 mb-10'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-500 text-center sm:text-left'>
                Афиша
            </h2>
            
            
            <div className='flex flex-col md:flex-row mt-6 sm:mt-10 gap-4 md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <img className='w-full h-auto md:h-80 lg:h-105 object-cover rounded-xl' src={post1} alt="" />
                </div>
                <div className='w-full md:w-auto'>
                    <img className='w-full h-auto md:h-80 lg:h-105 object-cover rounded-xl' src={post2} alt="" />
                </div>
            </div>

            <div className='flex mt-7 sm:mt-10 justify-center'>
                <Link to="/events" className='w-full sm:w-auto text-center'>
                    <button className='w-full sm:w-auto bg-blue-500 text-white p-3 sm:p-4 rounded-lg px-10 hover:bg-blue-600 transition-all active:scale-95 font-medium'>
                        Посмотреть все
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Poster