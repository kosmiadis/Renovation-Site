import { useResize } from "../../../hooks/useResize";
import { useCarousel } from "../../../store/carousel.store";

function CarouselController ({ slideIndex }: {slideIndex: number}) {
    const { currentSlide, goToSlide } = useCarousel();
    
    function handleClick () {
        goToSlide(slideIndex)
    }
    return <button onClick={handleClick} className={`bg-blue-200 ${slideIndex === currentSlide ? 'w-[27px] bg-blue-500 hover:bg-blue-500' : 'bg-stone-400 hover:bg-stone-600'}  duration-300 hover:cursor-pointer w-[9px] h-[9px] block rounded`}></button>
}

export default function CarouselControllers () {
    const { groups } = useCarousel()
    const { screenWidth } = useResize();

    return <div className="flex align-middle mt-[30px] mx-auto gap-[16px] ">
        {Array.from({ length: screenWidth <= 769 ? groups * 2 : groups }, (_, i) => {
            return <CarouselController slideIndex={i} key={i}/>
        })}
    </div>
}   