import React from 'react'

function Cards() {
  return (
    <div className='w-full h-full p-20 bg-slate-50'>
      <div className='container w-full py-20 flex gap-5 items-center justify-between  bg-white'>

        <div className='w-[50vw] h-[25vw] relative bg-[#0c534a] flex items-center justify-center rounded-lg'>
            <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <div className='w-full absolute h-[10] translate-y-[140px] p-10'>
              <button className='border border-[#CDEA68] text-[#CDEA68] rounded-full px-2 py-1'>&copy;2019-2022</button>
             </div>
        </div>
        
        <div className='w-[25vw] h-[25vw] relative flex items-center justify-center bg-zinc-900 rounded-lg'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <div className='w-full absolute h-[10] translate-y-[140px] p-5'>
              <button className='border rounded-full uppercase tracking-tight hover:bg-white hover:text-black px-2 py-0.5'>Rating 5.0 on clutch</button>
             </div>
        </div>
        <div className='w-[25vw] h-[25vw] relative flex items-center justify-center bg-zinc-800 rounded-lg'>
            <img className='w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <div className='w-full absolute h-[10] translate-y-[140px] p-7'>
              <button className='border text-sm uppercase tracking-tight hover:bg-white hover:text-black rounded-full px-2 py-1'>business bootcamp aulmni</button>
             </div>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
