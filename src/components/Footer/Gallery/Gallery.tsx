export default function Gallery () {
    return <section className="max-w-[250px] md:max-w-[800px] grid grid-cols-2 gap-[25px] p-[20px] grid-row-[1fr 0.5fr 1fr] md:grid-row-3 md:grid-cols-3 my-[20px] lg:max-w-[300px]">
        <img className='' src='http://localhost:10064/wp-content/uploads/2022/08/gallery-image-1.webp' />
        <img className='h-full w-full ' src='http://localhost:10064/wp-content/uploads/2022/08/gallery-image-2.webp' />
        <img className='row-start-1 row-end-1' src='http://localhost:10064/wp-content/uploads/2022/08/gallery-image-3.webp' />
        <img className='row-start-2 row-end-2 col-start-2 col-end-2' src='http://localhost:10064/wp-content/uploads/2022/08/gallery-image-4.webp' />
        <img className='row-start-2 row-end-2 col-start-1 col-end-1' src='http://localhost:10064/wp-content/uploads/2022/08/gallery-image-5.webp' />
        <img className='row-start-1 row-end-1 col-start-2 col-end-2 h-full' src='http://localhost:10064/wp-content/uploads/2022/08/about-us-page-cta-image.webp' />
    </section>
}