"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs, 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:"I am a detail-oriented professional with a passion for Information Technology, particularly in website development. I approach each project with precision and a commitment to delivering high-quality results. My eagerness for learning and innovation helps me stay ahead in the constantly evolving tech world.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nemnem Sihombing",
    },
    {
      fieldName: "Email",
      fieldValue: "sihombingnemnem@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 822 7243 0048",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresh Graduate",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesian, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I am an ambitious individual with a passion for Information Technology, particularly website development. I approach each project with meticulous attention to detail, ensuring high-quality and scalable solutions. My experience includes building responsive websites and user-friendly interfaces.",
  items: [
    {
      company: "PT. Pundi Mas Berjaya",
      position: "Frontend Developer",
      duration: "Jun 2023 - Augt 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Here some of the education I have undertaken, where I focused on building a strong foundation for future growth.",
  items: [
    {
      institution: "Institute Technology Del",
      degree: "Bachelor Degree in System Information",
      duration: "2020 - 2024",
    },
    {
      institution: "SMA Negeri 1 Pangaribuan",
      degree: "Senior High School",
      duration: "2017 -2020",
    },
    {
      institution: "SMP Negeri 1 Pangaribuan",
      degree: "Junior High School",
      duration: "2014 - 2017",
    },
    {
      institution: "SD Negeri 175761 Pulo Pakpahan",
      degree: "Elementary School",
      duration: "2008 - 2014",
    }, 
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "I have a diverse skill set in Information Technology, specializing in web development and UI/UX design. My problem-solving abilities and project management experience enable me to tackle challenges effectively and deliver high-quality, user-centric digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

// credentials data
const credentials = {
  icon: "/assets/resume/cap.svg",
  title: "My credential",
  description: "Here some of my credentials that I earned during my studies.",
  items: [
    {
      institution: "IES FOUNDATION",
      degree: "TOEFL ITP : 563",
      duration: "2024",
    },
    {
      institution: "Coursera",
      degree: "Google Advanced Data Analytic ",
      duration: "2024",
    },
    {
      institution: "Code for The Nation",
      degree: "Developer, Hackathon Code for The Nation",
      duration: "2023",
    },
    {
      institution: "ASEAN DATA SCIENCE EXPLORERS",
      degree: "Certified Data Science Explorers",
      duration: "2023",
    }, 
  ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
  <motion.div 
  initial={{ opacity:0 }} 
  animate={{
    opacity: 1, 
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}

  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                          </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                          </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index)=> {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </li>;
                })}
              </ul>
            </div>
          </TabsContent>

          {/* credentials */}
          <TabsContent value="credentials" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{credentials.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {credentials.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {credentials.items.map((item, index)=> {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                          </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>

          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-4"
                  >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-m">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          </div>
      </Tabs>
    </div>
    </motion.div>
    );
};

export default Resume;