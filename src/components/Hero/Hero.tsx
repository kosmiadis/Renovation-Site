import { useResize } from "../../hooks/useResize"
import ServicesPreview from "./ServicesPreview";

function CTA () {
    const { screenWidth } = useResize();

    const mobileHeroStyles = {

        backgroundImage: 'url(http://localhost:10064/wp-content/uploads/2022/08/home-hero-image.webp)',
        backgroundSize: '620px 450px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom'
    }

    const desktopHeroStyles = {
        backgroundImage: 'url(http://localhost:10064/wp-content/uploads/2022/08/home-hero-image.webp)',
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
        backgroundPositionY: 'top',
    }

    return <article className={`lg:px-[28px] h-screen py-[40px] md:h-auto px-[20px] sm:mt-8 lg:mt-8 w-full lg:min-h-screen lg:ml-[20px] flex flex-col gap-[2rem]`} style={screenWidth <=769 ? mobileHeroStyles: desktopHeroStyles}>
        <h2 className="md:mr-auto lg:mt-8 text-3xl md:max-w-[350px] md:text-left sm:leading-[2.6rem] md:leading-[3rem] md:text-4xl lg:text-5xl lg:leading-[4.5rem] lg:max-w-[600px] font-[700]   text-stone-800 text-center"><span className="text-(--accent-color)">Making</span> your vision become <span className="text-(--accent-color)">a reality.</span></h2>
        <p className="mx-auto md:mx-0 md:mr-auto max-w-[400px] text-center md:text-left text-stone-800 font-[500] text-xl leading-[2rem]">In at iaculis lorem praesent tempor dictum tellus ut molestie faucibus pretium mauris augue.</p>
        <button className="md:mr-auto self-center bg-[#212930] hover:bg-(--accent-color) hover:cursor-pointer duration-150 text-white font-bold text-lg px-8 py-4">CONTACT US</button>
    </article>
}

export default function Hero () {
    return <main className="flex flex-col max-w-[1400px] mx-auto md:px-[2rem]">
        <CTA />
        <ServicesPreview />
    </main>
}