import { motion } from "framer-motion";
import { span } from "framer-motion/client";
import React, { useState } from "react";

function Featured() {
  const[isHovering,setHovering] =useState(false);
  
  return (
    <div data-scroll data-scroll-section className="w-full relative py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div onMouseEnter={()=> setHovering(true)} onMouseLeave={()=>setHovering(false)} className="cardcontainer relative w-1/2 h-[75vh] ">
                <h1 className="absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none font-['Neue_Montreal'] text-6xl">
                <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 translate-y-1/2 top-1/2  tracking-tight leading-none font-['Neue_Montreal']">
                {"FYDE".split("").map((item, index)=> (
                    <motion.span initial={{y: "100%"}}
                     animate={isHovering ? ({y: "0"}) : ({y: "100%"})}
                     transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                     className="inline-block" >{item}</motion.span>
                ))}
                </h1>
                </h1>
                <div className="card w-full rounded-xl h-full overflow-hidden ">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
          <h1 className="absolute right-full translate-x-[50%] -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none font-['Neue_Montreal'] text-6xl">
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 translate-y-1/2 top-1/2  tracking-tight leading-none font-['Neue_Montreal']">
                {"".split("").map((item, index)=> (
                   <motion.span initial={{y: "100%"}}
                   animate={isHovering ? ({y: "0"}) : ({y: "100%"})}
                   transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                   className="inline-block" >{item}</motion.span>
                ))}
                </h1>
          </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden  ">
                    <img className="w-full h-full bg-cover" src=" https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
