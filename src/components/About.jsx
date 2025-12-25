import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants"; // Ensure this is correctly imported
import { SectionWrapper } from "../hoc";
import { HouseCanvas } from "./canvas"; // Ensure HouseCanvas is imported


// ServiceCard Component
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

// About Component
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Description Section */}
      <div className="flex flex-col sm:flex-row gap-10 mt-8">
        {/* Left - Text Section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My journey began in the <span className="font-bold text-white">mountains of Tembagapura</span>, Indonesia, near the Carstensz Pyramid (Puncak Jaya). 
          I started with a mining company, working in contract management within <span className="font-bold text-white">Freeport's Underground Division</span>. Surrounded by great colleagues, 
          I gained hands-on experience managing <span className="font-bold text-white">large-scale projects</span>.
          <br className="sm:block hidden" />
          <br />
          
          Craving new challenges, I moved to <span className="font-bold text-white">Jakarta</span>. 
          At the <span className="font-bold text-white">Central Bank of Indonesia</span>, I swapped my safety boots for business attire, diving into the <span className="font-bold text-white">financial markets</span>. 
          It was a fantastic opportunity to deepen my understanding of the finance industry and gain new insights.
          <br className="sm:block hidden" />
          <br />
          
          Fast forward to today: I've earned an MBA and joined an energy company in Germany. I believe that 
          <span className="font-bold text-white"> continuous growth is essential</span>, and I'm committed to learning as much as I can, 
          <span className="font-bold text-white">wherever life leads me</span>.
        </motion.p>

       {/* Right - 3D Canvas Section */}
        <div className="w-full max-w-[3000px] px-4 sm:px-8 md:px-16">
          <HouseCanvas /> {/* This is where your 3D Canvas is placed */}
        </div>
      </div>

      {/* Services Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services && services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
