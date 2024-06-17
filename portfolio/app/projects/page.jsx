"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
  num: "01",
  category: "Frontend",
  title: "Project 1",
  description:
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit maiores quo, et aperiam ab repellendus veniam, sit vel est corrupti nesciunt.",
  stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
  image: "/thumb1.png",
  live: "",
  github: "",
  },
  {
  num: "02",
  category: "Fullstack",
  title: "Project 2",
  description:
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit maiores quo, et aperiam ab repellendus veniam, sit vel est corrupti nesciunt.",
  stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
  image: "/thumb2.png",
  live: "",
  github: "",
  },
  {
  num: "03",
  category: "Backend",
  title: "Project 3",
  description:
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit maiores quo, et aperiam ab repellendus veniam, sit vel est corrupti nesciunt.",
  stack: [{ name: "React.js" }, { name: "Sass.css" }, { name: "Node.js" }],
  image: "/thumb3.png",
  live: "",
  github: "",
  },
  ];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative">
            <Swiper spaceBetween={30} slidesPerView={1} className="lg:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt={project.title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="btn bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyles="icon" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
