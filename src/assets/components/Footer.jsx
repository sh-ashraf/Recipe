import logoImg from '../logo.png'

export default function Footer() {
    return (
        <footer className="bg-white w-full shadow-sm  z-[55] relative">
            <div className="max-w-screen-xl mx-auto p-6 md:p-8">
                <div className="flex justify-between flex-wrap">
                    <a href="#" className='flex items-center mb-4 sm:mb-0 space-x-3'>
                        <img src={logoImg} alt='Logo' className='h-8'/>
                        <span className='text-2xl font-semibold'>Recipe</span>
                    </a>
                    <span className='text-2xl font-bold text-blue-700'>Route</span>
                </div>
                <hr className='my-6 lg:my-8 border-gray-200'/>
                <div className='text-sm text-gray-500 text-center'>
                © 2025 <a href='https://www.linkedin.com/in/youssef-fathy-195ba61a4' target='_blank' className='hover:underline'>Shehab Eldein Ashraf™</a> . All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
