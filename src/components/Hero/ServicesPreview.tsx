import { Check, Hammer, Paintbrush, PencilRuler, Shovel } from "lucide-react";
import { ReactElement } from "react";

function ServiceBlock ({ title, content, IconElement, }: {IconElement: ReactElement, title: string, content: string}) {
    return <div className="w-[100%] flex flex-col md:flex-row lg:m-auto gap-5"> 
        <div className="mx-auto md:mx-0 w-[48px] h-[48px]">
            {IconElement}
        </div>
        <div className="flex text-center md:text-left flex-col">
            <h2 className="font-bold text-xl text-stone-800">{title}</h2>
            <p className="mt-2 text-stone-500 font-semibold leading-[1.8rem]">{content}</p>
        </div>
    </div>
}


export default function ServicesPreview () {

    const services = [
        {title: 'Basement Remodel', content: "Basement Remodel Etiam facilisis ligula nec velit posuere egestas.", icon: <Hammer size={46} color="#ec6a2b" fill="#ec6a2b"/>},
        {title: 'Tile Installation', content: "Tile Installation Duis mauris augue efficitur euarcu posuere dignissim neque.", icon: <Shovel size={46} color="#ec6a2b" fill="#ec6a2b"/>},
        {title: 'Wall Painting', content: "Mauris imperdiet orci dapibus commodo libero interdum.", icon: <Paintbrush size={46} color="#ec6a2b" fill="#ec6a2b"/>},
        {title: 'Wood & Flooring', content: "Etiam facilisis ligula nec velit posuere egestas lectus.", icon: <PencilRuler size={46} color="#ec6a2b" fill="#ec6a2b"/>},

    ]

    return <article className="w-full flex flex-col mt-[50px] gap-[4rem] lg:mt-[-200px] lg:gap-0">
        <div className="flex flex-col lg:flex-row w-[90%] md:w-[95%] mx-auto lg:w-[100%] lg:mx-0">
            <div className="hidden lg:block lg:w-[30%] lg:bg-white"></div>
            <div className="bg-(--accent-color) h-[220px] flex justify-center gap-[1rem] p-[30px] text-white font-bold text-3xl w-[100%] lg:w-[70%]">
                <Check size='28' strokeWidth={3} className="my-auto text-stone-800 bg-white p-2 h-[48px] w-[48px] ml-[20px]"/>
                <h3 className="my-auto sm:text-wrap w-full">Quality. Safety. Reliability. Every time.</h3>
            </div>
        </div>
        <div className="flex flex-col gap-[5rem] w-[90%] md:w-[95%] mx-auto lg:w-[100%] lg:mx-0 lg:flex-row lg:gap-0">
            <div className="flex flex-col justify-center text-center lg:text-left p-[50px] lg:pl-[40px] gap-[25px] flex-1 bg-(--mobile-menu-bg-color) w-[100%] lg:w-[30%]">
                <h2 className="text-3xl lg:leading-[3.4rem] lg:max-w-[80%] text-stone-800 font-[700]">All Work Guaranteed in Writing</h2>
                <p className="text-lg font-[600]">Vivamus eget integer eu arcu vel arcu suscipit ultrices quis non mauris.</p>
            </div>
            <div className="w-[100%] lg:w-[70%] bg-white">
                <ul className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-8 lg:flex-wrap lg:gap-0">
                    {services.map(service => (
                        <li className="w-[100%] lg:w-[100%] lg:h-[220px] px-12 flex align-middle justify-center" key={service.title}>
                            <ServiceBlock IconElement={service.icon!} title={service.title} content={service.content} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </article>
}