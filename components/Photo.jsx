"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
  <div className="w-full h-full relative">
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
    }} 
    >
        



        
    </motion.div>
    </div>
  );
};

export default Photo;