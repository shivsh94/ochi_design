import { motion } from "framer-motion";
import React from "react";
// import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {/* <div className='masker '>
            <h1 className='uppercase text-9xl  tracking-tighter leading-[7.5vw] font-["Founders_Grotesk"] font-semibold'>We Create</h1>
        </div>
        <div className='masker '>
            <h1 className='uppercase text-9xl  tracking-tighter leading-[7.5vw] font-["Founders_Grotesk"] font-semibold'>eye opening</h1>
        </div>
        <div className='masker '>
            <h1 className='uppercase text-9xl  tracking-tighter leading-[7.5vw] font-["Founders_Grotesk"] font-semibold'> presentations</h1>
        </div> */}

        {/* ...we can write these codes By using map fn ...in simple way */}

        {["We Create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index } className="masker ">
                <div className="w-fit flex items-end overflow-hidden">
                    {index=== 1 && (
                        <motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[.5vw] relative bg-red-500"></motion.div>
                    )} 
                    <h1 className='pt-[2vw] -md-[1vw] uppercase text-[9vw]  tracking-tighter leading-[.75] font-["Founders_Grotesk"] font-medium'>
                {item}
              </h1>
                </div>
             
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] mt-20 border-zinc-800 flex justify-between items-center py-5 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight">{item}</p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light  uppercase text-md">
            start the project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
          {/* <FaArrowUpLong /> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
