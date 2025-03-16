import { ContactDetail } from "../Header/Header";

export default function FooterContactDetails () {
    return <section className="my-auto flex flex-col text-center lg:text-left max-w-[300px]">
        <ContactDetail label="Phone" content="(701)814-6992"/>
        <ContactDetail label="Physical address" content="6296 Donnelly Plaza Ratkeville, Bahamas"/>
        <ContactDetail label="Email address" content="info@mail.com"/>
    </section>
    
}