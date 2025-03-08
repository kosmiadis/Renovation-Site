import { useState } from "react";

export function useResize () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
    })
    return { screenWidth }
}