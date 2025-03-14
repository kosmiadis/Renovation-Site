import testimonialImage from '../../../assets/testimonial_avatar_1.webp';

export default function Testimonial () {
    return <section className="bg-(--font-color) overflow-hidden py-[100px]">
        <div className='lg:mx-auto lg:max-w-[1400px] flex flex-col gap-[40px]'>
        <svg className="mx-auto md:mx-0 md:ml-[60px] w-[38px] h-[38px] md:w-[52px] md:h-[52px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" aria-hidden="true" width="38" height="38"><path d="M4.7 58 0 2h25.3l-4 56H4.7zm34.7 0L34.7 2H60l-4 56H39.4z" style={{ fill: '#2bb6ed'}}></path></svg>
            <p className='text-white text-2xl md:text-3xl lg:text-4xl font-[500] leading-[2.6rem] lg:leading-[4rem] px-[30px] md:px-[90px] lg:text-left lg:ml-[60px] text-center '>Aenean non accumsan ante duis et risus accumsan sem tempus porta nec sit amet est sedut euismod.</p>
            <div className='md:ml-[60px] flex flex-col gap-[20px] md:flex-row'>
                <img src={testimonialImage} alt="testimonial image" className='rounded-[50%] w-[90px] h-[90px] mx-auto md:mx-0'/>
                <div className='flex flex-col md:my-auto'>
                    <p className='text-(--accent-color) text-xl mx-auto md:mx-0 md:text-2xl font-bold'>Michelle Harmington</p>
                    <span className='font-semibold text-white mx-auto md:mx-0 text-lg'>Happy Client</span>
                </div>
            </div>
        </div>
    </section>
}