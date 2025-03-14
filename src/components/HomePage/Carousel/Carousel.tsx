import { useEffect } from "react";
import { useResize } from "../../../hooks/useResize";
import { useCarousel } from "../../../store/carousel.store"

export type Image = { src: string, alt: string }

function ImageBox ({ src, alt }: Image) {
    return <img className={`min-w-[100%] md:min-w-[50%] h-[400px]`} src={src} alt={alt}/> 
}

export default function Carousel ({ images }: { images: Image[]}) {
    const { currentSlide, goToSlide, groups } = useCarousel();
    const { screenWidth } = useResize();

    useEffect(() => {
        const slideInterval = setTimeout(() => {
            // slide interval
            const nextSlide = currentSlide < groups - 1 ? currentSlide+1 : 0 
            goToSlide(nextSlide)
        }, 4500)

        return () => {
            clearInterval(slideInterval);
        }
    }, [currentSlide, goToSlide, groups])
    

    return <div className={`mt-[60px] w-full transform-3d h-[400px] relative overflow-x-hidden`}>
        {/* Carousel */}    
        <div className={`flex min-w-full box-border ${screenWidth > 769 ? '' : ''} transform-3d absolute duration-300`} style={{
            right: `${currentSlide * 100}%`
        }}>
            {images.map(image => (
                <ImageBox key={image.alt} {...image} />
            ))}
        </div>
    </div>
}