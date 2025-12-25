import React from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { logo } from "../assets";
import { linkedin, instagram } from "../assets";


const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="mt-16 max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 35)}
          className="text-3xl font-semibold text-center mb-6 text-white"
        >
          
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section (Logo) */}
          <div className="flex justify-center items-center">
            <motion.img
              src={logo} // Replace with your logo path
              alt="Logo"
              className="w-80 h-50"
              variants={fadeIn("left", "tween", 0.2, 50)}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          </div>

          {/* Center Section (Contact Text) */}
          <div className="flex flex-col justify-center items-center text-gray-700 space-y-4">
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 35)}
              className="text-[11px] text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
                Crafted with ❤️ using <a href="https://reactjs.org/" className="text-green-200" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://www.framer.com/motion/" className="text-green-200" target="_blank" rel="noopener noreferrer">Framer Motion</a>, <a href="https://tailwindcss.com/" className="text-green-200" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>, and <a href="https://threejs.org/" className="text-green-200" target="_blank" rel="noopener noreferrer">Three.js</a>.
                <br />
                Enhanced by <a href="https://vitejs.dev/" className="text-green-200" target="_blank" rel="noopener noreferrer">Vite</a> for fast builds, and supported by <a href="https://www.flaticon.com/" className="text-green-200" target="_blank" rel="noopener noreferrer">Flaticon</a> for the icons, every word set in the charming <a href="https://rsms.me/inter/" className="text-green-200" target="_blank" rel="noopener noreferrer">Inter Typeface</a>, and <a href="https://www.lightgalleryjs.com/" className="text-green-200" target="_blank" rel="noopener noreferrer">lightlibrary</a> for showcasing the awesome gallery photos.
                <br />
                Special thanks to <a href="https://www.jsmastery.pro/" target="_blank" className="text-green-200">JS Mastery</a> for amazing React tips & tricks.  
                Beautiful 3D models by <a href="https://skfb.ly/6QSKT" target="_blank" className="text-green-200">peachyroyalty (Forest House)</a> and <a href="https://skfb.ly/69Qty" target="_blank" className="text-green-200">Pixel (Medieval Fantasy Book)</a>, both under Creative Commons licenses.
                <br />
                <br />
      
                ~ DHi @2024 ~
              
            </motion.p>
          </div>

          {/* Right Section (Social Media Logos) */}
          <div className="flex justify-center items-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/hidayatdenny"
              target="_blank"
              className="text-lg text-white hover:text-blue-500 transition duration-300"
              variants={fadeIn("right", "tween", 0.2, 5)}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <img src={linkedin} alt="LinkedIn" className="w-14 h-14" />
            </motion.a>
            
            <motion.a
              href="https://www.instagram.com/_dennyhidayat"
              target="_blank"
              className="text-lg text-white hover:text-pink-500 transition duration-300"
              variants={fadeIn("right", "tween", 0.2, 5)}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <img src={instagram} alt="Instagram" className="w-14 h-14" />
            </motion.a>
          </div>
        </div>

        {/* Free Text Above Image */}
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-8 text-center text-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "Contact");