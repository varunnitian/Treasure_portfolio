"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiMysql, SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

{
  /*about data*/
}
const about = {
  title: "About me",
  description: "my name is varun jain and i am a btech student at national institute of technology hamirpur.",
  info: [
    { fieldName: "Name", fieldValue: "Varun Jain" },
    { fieldName: "Phone", fieldValue: "(+91) 9672757011" },
    { fieldName: "Experience", fieldValue: "0+ Years of Experience" },
    { fieldName: "Twitter", fieldValue: "dorsey2003" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "varunjain20029672@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

{
  /*experience data*/
}
const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My experience",
  description: "I have proficiency in Frontend and Backend Technologies.",
  items: [
    { company: "The Sparks Foundation", position: "Web Developer Intern", duration: "Mar 2024 - Apr 2024" },
    { company: "Robotics Society NITH", position: "Coordinator", duration: "Jan 2022 - Present" },
    { company: "Team Hermetica", position: "Volunteer", duration: "Feb 2022 - May 2022" },
  ],
};

{
  /*education data*/
}
const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "My education",
  description: "I am a Student at NIT Hamirpur in chemical engineering discipline.",
  items: [
    { College: "National Institute Of Technology, Hamirpur", Programme: "Bachelor Of Technology (B.Tech)", Branch: "Chemical Engineering", duration: "2021 - 2025", SGPI: "8.67", CGPI: "7.94" },
  ],
};

{
  /*skills data*/
}
const skills = {
  title: "My skills",
  description: "I am proficient in the following skillset",
  skillset: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiNextdotjs />, name: "NextJs" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "Github" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-[60px]">
        <Tabs defaultValue="experience" className="flex w-full">
          <TabsList className="flex flex-col w-full max-w-[250px] gap-6 mr-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="flex-grow">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
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
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-start gap-3">
                          <span className="text-accent text-lg">{item.College}</span>
                          <p className="text-white/60 text-sm">{item.Programme}</p>
                          <h3 className="text-xl">{item.Branch}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{item.duration}</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-white/60 text-sm">SGPI: {item.SGPI}</p>
                            <p className="text-white/60 text-sm">CGPI: {item.CGPI}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                  {skills.skillset.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
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
