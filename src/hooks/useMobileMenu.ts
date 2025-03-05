import { useEffect, useState } from "react"

export function useMobileMenu () {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    function toggle () {
        setIsMobileMenuOpen(prevVal => !prevVal);
    }
    useEffect(() => {}, [isMobileMenuOpen]);
    return { isMobileMenuOpen, toggle }
}