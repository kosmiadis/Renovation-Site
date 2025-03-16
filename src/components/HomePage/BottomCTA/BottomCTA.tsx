export default function BottomCta () {
    return <section className="flex flex-col lg:flex-row justify-between align-middle lg:items-start px-[20px] lg:px-[50px] py-[40px] bg-(--accent-color)">
        <div className="my-[6px] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-[20px]">
            <div className="my-auto flex flex-col items-center lg:items-start gap-[30px]">
                <h2 className="text-white text-[26px] lg:text-5xl lg:leading-[4rem] text-center lg:text-left font-semibold">Are you looking to make your renovation dreams a reality?</h2>
                <button className="mb-[30px] bg-(--font-color) w-[150px] text-nowrap py-[12px] px-[22px] hover:bg-white hover:text-(--font-color) hover:cursor-pointer duration-200 text-sm font-bold text-white">LEARN MORE</button>
            </div>

            <img className="w-full max-w-[500px] lg:max-w-[300px]" src={'http://localhost:10064/wp-content/uploads/2022/08/home-footer-cta-image.webp'} alt="" />
        </div>
    </section>
}