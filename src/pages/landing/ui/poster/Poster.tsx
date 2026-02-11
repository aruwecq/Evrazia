import post1 from '../../img/Mask group (2).png'
import post2 from '../../img/Mask group (3).png'
import { Link } from 'react-router-dom'

function Poster() {
    return (
        <div className='max-w-7xl mx-auto px-4 mt-10 mb-10'>

            <div className='flex flex-col md:flex-row mt-10 justify-between gap-4'>
                <div className='w-full md:w-1/2'><img className='w-full h-48 md:h-[420px] object-cover rounded-lg' src={post1} alt="" /></div>
                <div className='w-full md:w-1/2'><img className='w-full h-48 md:h-[420px] object-cover rounded-lg' src={post2} alt="" /></div>
            </div>
            <div className='flex mt-7 flex-col md:flex-row md:items-center justify-between gap-4'>
                <h2 className='text-4xl font-bold text-blue-500'>
                    Афиша
                </h2>
                <Link to="/poster">
                    <button className='bg-blue-500 text-white p-3 rounded-lg px-6 md:px-10 hover:bg-blue-600'>
                        Посмотреть все
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Poster
