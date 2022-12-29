import Image  from "next/image"

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
            <img src = '/banner.webp'
            />

    <div className='absolute top-1/2 w-full text-center'>
        <p className="text-sm md:text-2xl font-mono md:font-bold bg-white m-32 -mt-20  text-blue-800">
            All Coffee in affordable price
        </p>
       
    </div>

        </div>
    )
}

export default Banner