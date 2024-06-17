"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Creating of website that interacts with client side. It is the development of everything on a website that you experience including icons, buttons, fonts, layout, color, etc. With a click of a button, you see the magic happening which is submitting a form, playing a video, navigating to a new page, etc. ",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description: `A backend developer is just one of many kinds of "programmers". Back end developers build and maintain the systems that store, process, and secure the data used by websites and apps. This is in contrast to front-end developers, who control everything you see and interact with directly in your browser or on a mobile app. In short, a backend developer concerns themselves ith servers, while front-end developers work on clients.`,
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 mt-8 mb-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6"
            >
              {/*top*/}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/*title*/}
              <h2 className="text-3xl font-bold leading-none text-white hover:text-accent transition-all duration-500">{service.title}</h2>
              {/*description*/}
              <p className="text-justify text-white/60">{service.description}</p>
              {/*border*/}
              <div className="border-b border-white w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
