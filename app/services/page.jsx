"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Leverage modern technologies like HTML, CSS, and JavaScript frameworks to develop highly responsive, performance-driven web applications. Integrate cutting-edge libraries such as React.js and Next.js to ensure scalability, seamless user experiences, and efficient server-side rendering for optimized loading times.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Create high-fidelity prototypes and mockups using Figma, emphasizing intuitive user experiences. Leverage essential UI/UX design principles to build visually compelling and user-friendly interfaces, ensuring smooth navigation, improved usability, and enhanced engagement across digital platforms.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} 
              className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                        <BsArrowDownRight className="text-primary text-3xl" /> 
                    </Link>
                </div>
               {/* title */}
               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
               {/* description */}
               <p className="text-white/60">{service.description}</p>
               {/* border */}
               <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
