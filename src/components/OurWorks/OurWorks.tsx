import { useEffect } from 'react';
import sliderImg1 from '../../assets/slider_image_1.webp';
import sliderImg2 from '../../assets/slider_image_2.webp';
import sliderImg3 from '../../assets/slider_image_3.webp';
import sliderImg4 from '../../assets/slider_image_4.webp';
import sliderImg5 from '../../assets/slider_image_5.webp';
import sliderImg6 from '../../assets/slider_image_6.webp';
import { useCarousel } from '../../store/carousel.store';
import Carousel, { Image } from '../Carousel/Carousel';
import CarouselControllers from '../Carousel/CarouselControllers';
import { useResize } from '../../hooks/useResize';

export default function OurWorks () {
    
    const images:Image[] = [
        { src: sliderImg1, alt: 'Sitting Room'},
        { src: sliderImg2, alt: 'Bathroom with white tiles'},
        { src: sliderImg3, alt: 'Bathroom with somon tiles'},
        { src: sliderImg4, alt: 'Greyish sofa'},
        { src: sliderImg5, alt: 'Wooden Kitchen'},
        { src: sliderImg6, alt: 'Sitting Room Staircase'},
    ]
    
    const { setGroups } = useCarousel()
    const { screenWidth } = useResize();

    //number of slides in the desktop
    let groups: number = images.length / 2
    const remaining: number = screenWidth <= 769 ? 0 : images.length % 2
    if (remaining > 0 && screenWidth > 769) {
        groups++
    }
    
    useEffect(() => {
        setGroups(groups);
    }, [])
    

    return <div className='max-w-[1400px] py-10 mt-[80px] w-[90%] mx-auto flex flex-col justify-center'>
        <span className='text-center text-md text-(--accent-color) font-semibold'>Mauris Augue</span>
        <h2 className='mt-[15px] text-center font-bold text-(--font-color) text-4xl'>Our Works</h2>
        <Carousel images={images}/>
        <CarouselControllers />
    </div>
}