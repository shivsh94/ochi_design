import React, { useEffect } from 'react'

function Eyes() {
  return (

    <div className='eyes w-full h-screen overflow-hidden'>

      <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3   rounded-full bg-black'>
                    <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10'>
                        <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                    </div>
                
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                <div className='w-2/3 h-2/3 relative  rounded-full bg-black'>
                <div className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 '>
                        <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes
