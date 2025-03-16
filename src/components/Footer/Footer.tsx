import FooterCenter from "./FooterCenter";
import Gallery from "./Gallery/Gallery";
import FooterContactDetails from "./FooterContactDetails";
export default function Footer () {
    return <footer className="flex  flex-col gap-[40px] items-center justify-around max-w-[1400px] mx-auto lg:flex-row lg:py-[100px]">
        <Gallery />
        <FooterCenter />
        <FooterContactDetails />
    </footer>
}