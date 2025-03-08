import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from "react-router-dom"
import { useResize } from '../../hooks/useResize';
import { useMobileMenu } from '../../hooks/useMobileMenu';

function Brand () {
    const {screenWidth} = useResize();
    return <Link to={'/'}>
        <img width={260} src={logo} className={`${screenWidth <=769 ? 'w-[200px]': ''}`}/>
    </Link>
}

type NavigationLink = { label: string, to: string }

function Navigation () {
    const Links: NavigationLink[] = [
        { label: 'Αρχική', to: '/'},
        {label: 'Υπηρεσίες', to:'/services'},
        {label: 'Σχετικά', to:'/about'},
        {label: 'Blog', to:'/blog'},
        {label: 'Επικοινωνία', to:'/contact'},
    ]

    const { screenWidth } = useResize();
    return <nav className={`my-auto`}>
            {screenWidth <=769 && <Brand />}
            <ul className={`flex align-center gap-[18px] text-lg font-[400] ${screenWidth <= 769 ? 'flex-col text-stone-700 font-bold text-lg mt-4': ''} `}>
                {Links.map(link => (
                    <NavigationLink key={link.label} label={link.label} to={link.to}/>
                ))}    
           </ul>
    </nav>
}

function NavigationLink ({ label, to } : { label: string, to: string}) {
    return <NavLink to={to} className={({isActive}) => isActive ? 'text-(--accent-color) hover:text-(--accent-color) duration-400 font-bold': 'text-stone-700 hover:text-(--accent-color) font-bold duration-200'}>
        {label} 
    </NavLink>
}

function ContactDetail ({ label, content}: {label: string, content: string}) {
    return <span className='min-w-[100px] my-2 text-stone-700'>
        {label}:<br />
        <b>{content}</b>
    </span>
}

function ContactDetails () {
    return <div className='flex flex-col mt-2'>
        <ContactDetail label='Phone' content='(701)814-6992'/>
        <ContactDetail label='Physical Address' content='​6296 Donnelly Plaza
            Ratkeville, ​Bahamas.'/>
    </div>
}

function MobileNavigation ({ toggleMenu }: {toggleMenu: () => void}) {
    return <div className='absolute w-[80%] h-screen top-0 right-0 p-8 bg-(--mobile-menu-bg-color)'>
        <button className='ml-[95%] hover:cursor-pointer' onClick={toggleMenu}><X size={32} /></button>
        <Navigation />
        <ContactDetails />
    </div>
    
}

export default function Header () {
    const { screenWidth } = useResize();
    const { isMobileMenuOpen, toggle } = useMobileMenu();
    
    return <header className="w-full py-[1.4rem] px-4 bg-white sticky top-0">
        <div className='mx-auto max-w-[1200px] flex justify-between font-display'>
            <Brand />
            {/* Mobile & Tablet Navigation */}
            { screenWidth <= 769 && (<>
                <button className='hover:cursor-pointer' onClick={toggle}><Menu size={32} /></button>
                {isMobileMenuOpen && <MobileNavigation toggleMenu={toggle} />}
            </>)}    

            {/* Desktop & Laptop Navigation */}
            { screenWidth > 769 && <Navigation /> }
        </div>
    </header>
}