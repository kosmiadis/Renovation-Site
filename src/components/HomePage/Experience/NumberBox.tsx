import { useEffect, useState } from "react";

export default function NumberBox ({ final, tag, prefix='', suffix='' }: { final: number, tag?: string, prefix?: string, suffix?: string}) {
    const [number, setNumber] = useState(0);
    const duration = 1500; // Animation duration in milliseconds
    const interval = 50; // Interval time in milliseconds
    const steps = duration / interval; // Total number of steps
    const stepValue = final / steps; // Amount to increase each step

    useEffect(() => {
        let current = 0;
        const increaseInterval = setInterval(() => {
            current += stepValue;
            if (current >= final) {
                clearInterval(increaseInterval);
                setNumber(final);
            } else {
                setNumber(Math.floor(current));
            }
        }, interval);

        return () => clearInterval(increaseInterval);
    }, [final, stepValue]);
    
    return <div className="w-full py-[10px] flex flex-col gap-4 items-center">
        <p className="inline text-4xl md:text-5xl font-bold">{prefix}{number}{suffix}</p>
        <span className="text-lg text-nowrap font-semibold text-blue-100">{tag}</span>
    </div>
}