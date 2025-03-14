import ContactUs from "../components/HomePage/ContactUs/ContactUs";
import Experience from "../components/HomePage/Experience/Experience";
import Hero from "../components/HomePage/Hero/Hero";
import OurWorks from "../components/HomePage/OurWorks/OurWorks";
import ServicesLogosBar from "../components/HomePage/ServicesLogosBar/ServicesLogosBar";
import Testimonial from "../components/HomePage/Testimonial/Testimonial";
import WhyChooseUs from "../components/HomePage/WhyChooseUs/WhyChooseUs";

export default function HomePage () {
    return <main className="">
        <Hero />
        <OurWorks />
        <Testimonial />
        <WhyChooseUs /> 
        <Experience />
        <ServicesLogosBar />
        <ContactUs />
    </main>
}