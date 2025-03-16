import { FormEvent } from "react"

interface InputI { label: string, type: string, required: boolean }


function Input ({label, required, type}: InputI) {
    return <div className="flex flex-col gap-[10px] items-start w-full">
        <label htmlFor="" className="text-stone-700 font-semibold">{label}{required ? '*' : ''}</label>
        <input className="w-full text-xl py-[10px] border-1 border-stone-200" type={type} />
    </div>
}

export default function ContactUs () {
    const inputs: InputI[] = [
        { label: 'Name', type: 'text', required: true },
        { label: 'Email', type: 'email', required: true },
        { label: 'Phone', type: 'tel', required: false },
    ]
    
    function handleSubmit (e: FormEvent) {
        e.preventDefault();
    }

    return <section className="bg-[url(http://localhost:10064/wp-content/uploads/2022/08/contact-section-background-image.webp)] bg-cover flex items-center md:justify-start md:px-[10%] h-[90vh] bg-center">
        <div className="w-[90%] h-[80%] min-h-[600px] p-[80px] mx-auto md:mx-0 bg-white max-w-[560px] flex flex-col justify-center">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="mt-[20px] mb-[30px] text-xl">We are ready to help you with your home renovation project.</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[25px]">
                {inputs.map(input => (
                    <Input key={input.label} {...input}/>
                ))}
                <button className="mt-[12px] w-full bg-(--accent-color) text-white py-[12px] font-semibold text-lg hover:cursor-pointer hover:bg-blue-400 duration-300">Book Appointment</button>
            </form>
        </div>
    </section>
}