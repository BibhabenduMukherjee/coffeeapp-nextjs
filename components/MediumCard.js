import React from 'react'

function MediumCard() {
  return (
    <div className='flex md:mt-28'>
   
<div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative h-44 w-72'>
                <img src= "/blackeye.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Black Eye  $9</h2>
        </div>

        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative  h-44 w-72'>
                <img src= "/coldbrew.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Cold Brew $6 </h2>
        </div>
        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative h-44 w-72'>
                <img src= "/doublex.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Double Expresso  $4 </h2>
        </div>
        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative h-44 w-72'>
                <img src= "/moccha.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Moccha  $7 </h2>
        </div>
        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative h-44 w-72'>
                <img src= "/iris.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Iris  $6 </h2>
        </div>
        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative  h-44 w-72'>
                <img src= "/captu.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Cappuccino  $6 </h2>
        </div>
        <div className='cursor-pointer hover:scale-105
        transform transtition duration-300 ease-out'>
            <div className='relative  h-44 w-72'>
                <img src= "/dcap.webp"  width={250} height={250} className='rounded-xl'/>
            </div>

            <h2 className='text-2xl mt-3'> Decaf  $4 </h2>
        </div>
    </div>
    
  )
}

export default MediumCard