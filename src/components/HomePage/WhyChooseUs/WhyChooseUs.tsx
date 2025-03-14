import HomeIllustrationImage from '../../../assets/home_illustration.svg';
type OfferType = { title: string, content: string}

function Offer ({ title, content}: OfferType) {
    return <div className="flex flex-col gap-4 w-full items-center text-center lg:nth-[1]:items-start lg:nth-1:text-start lg:nth-4:text-start lg:nth-2:text-end lg:nth-5:text-end lg:nth-4:items-start lg:nth-2:items-end lg:nth-5:items-end"> 
        <h3 className="text-2xl font-bold text-(--font-color) text-center">{title}</h3>
        <p className="text-stone-500 text-[18px] font-semibold max-w-[600px] lg:max-w-[300px] md:px-[30px] lg:px-0">{content}</p>
        <button className="bg-(--font-color) w-[150px] text-nowrap py-[12px] px-[22px] hover:bg-(--accent-color) hover:cursor-pointer duration-200 text-lg text-white font-semibold">Read More</button>
    </div>
}

function Offers ({ offers }: { offers: OfferType[] }) {
    return <div className='w-full flex flex-col gap-y-[4rem] lg:grid grid-cols-3 lg:gap-y-[6rem] grid-rows-2'>
        
        <Offer {...offers[0]}/>
        <Offer {...offers[1]}/>
            <img className='row-start-1 row-span-2 -row-end-1 col-start-2 mx-auto max-w-[400px] lg:max-w-max lg:w-full lg:h-full' src={HomeIllustrationImage} alt='Home Illustration Image'/>
        <Offer {...offers[2]}/>
        <Offer {...offers[3]}/>
    </div>
}

export default function WhyChooseUs () {
    const offers: OfferType[] = [
        { title: 'Warranty', content: 'Proin ex ipsum facilisis id tincidunt sed vulputate in lacus donec pharetra.'},
        { title: 'Responsibility', content: 'Proin ex ipsum facilisis id tincidunt sed vulputate in lacus donec pharetra.'},
        { title: 'Quality', content: 'Proin ex ipsum facilisis id tincidunt sed vulputate in lacus donec pharetra.'},
        { title: 'Safety', content: 'Proin ex ipsum facilisis id tincidunt sed vulputate in lacus donec pharetra.'},
    ]

    return <section className="flex flex-col gap-[80px] justify-center max-w-[1400px] mx-auto mt-[60px] px-[20px] lg:mb-[60px]">
        <div className='flex flex-col gap-[10px]'>
            <span className="text-md text-(--accent-color) font-[500] text-center">Aliquam Fringilla</span>
            <h2 className=" text-(--font-color) text-3xl lg:text-4xl text-center font-bold">Why Choose Us</h2>
        </div>
        <Offers offers={offers}/>
    </section>
}