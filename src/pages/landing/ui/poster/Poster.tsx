import post1 from '../../img/Mask group (2).png'
import post2 from '../../img/Mask group (3).png'
import { Link } from 'react-router-dom'

function Poster() {
    return (
        <div className='max-w-7xl  mx-auto px-6 mt-10 mb-10 justify-center'>

            <div className='flex mt-10 justify-between'>
                <div><img className='h-105' src={post1} alt="" /></div>
                <div><img className='h-105' src={post2} alt="" /></div>
            </div>
            <div className='flex mt-7 justify-between'>
                <h2 className='text-4xl font-bold text-blue-500'>
                    Афиша
                </h2>
                <Link to="/poster">
                    <button className='bg-blue-500 text-white  p-3 rounded-lg px-10 hover:bg-blue-600'>
                        Посмотреть все
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Poster
