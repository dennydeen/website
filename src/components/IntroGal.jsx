import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const IntroGal = () => {
    return (
      <div className="gallery-introduction">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My Gallery</p>
          <h2 className={`${styles.sectionHeadText}`}>Photography.</h2>
        </motion.div>
  
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Outside of work, I love discovering new places, hiking, and photography. 
            I often use my Deutschland Ticket to explore areas around Germany, and I 
            usually bring along my Fujifilm XT-100 with a 15-45 mm lens, or sometimes 
            just my phone.
          </motion.p>
        </div>
      </div>
    );
};

export default SectionWrapper(IntroGal, "");