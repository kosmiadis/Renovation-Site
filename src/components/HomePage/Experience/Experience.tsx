import HomeNumbersImage from '../../../assets/home_numbers_image.webp'
import NumberBox from './NumberBox';

export default function Experience () {
    return <section className="mt-[80px] w-[90%] max-w-[1300px] mx-auto flex flex-col items-center lg:items-start lg:grid lg:grid-cols-[30% 70%] grid-rows-[75%]">
        {/* EXPERIENCE */}
        
        <div className='w-full h-full order-1 flex flex-col items-center col-start-1 col-end-1 bg-(--font-color) py-[80px] lg:mx-0 outline-2 px-[40px] text-white'>
            <h2 className='w-full text-[28px] font-bold lg:text-3xl text-center lg:text-left leading-[2.5rem] lg:max-w-[300px]'>Perfection In Every Step We Take</h2>
            <p className='mt-[30px] text-lg text-center lg:text-left lg:text-xl lg:mt-[50px] lg:max-w-[300px] font-semibold'>Aenean scelerisque sem eu dictum commodo velit nisi blandit.</p>
        </div>

        <div className='w-full py-[80px] lg:py-[30px] order-3 col-start-1 col-end-1 row-start-2 bg-(--font-color) text-white'>
            <NumberBox  final={25} suffix='+' tag='Years of Experience'/>
        </div>
        
        <div className='order-2'>
            <img className='' src={HomeNumbersImage}/>
        </div>
        
        {/* STATS */}
        <div className='w-full order-4 bg-(--accent-color) col-start-2 text-white flex flex-col py-[80px] lg:py-[30px] lg:flex-row gap-[8rem] lg:gap-0 p-[35px]'>
            <NumberBox final={100} tag='Awards Winning'/>
            <NumberBox final={450} tag='Happy Customers'/>
            <NumberBox final={240} tag='Projects Completed'/>
        </div>
    </section>
}