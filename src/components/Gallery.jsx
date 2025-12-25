import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const Gallery = () => {
  const images = [];

  // Populate the images array
  for (let i = 1; i <= 25; i++) {
    const imagePath = `/Gallery/picture-${i}.jpg`;
    images.push(imagePath);
  }

  return (
    <>
      {/* Masonry Style Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-8 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg break-inside-avoid"
            variants={fadeIn('up', 'tween', index * 0.1, 1)}
            initial="hidden"
            animate="show"
          >
            <a href={image} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={image}
                alt={`Picture ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 px-4">

        {/* Virtual Photo Gallery */}
        <a
          href="https://dennyhidayat.com/project/page_photo/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-between px-7 py-4 w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-sm opacity-80">See more on</span>
            <span>Photo Gallery Page</span>
          </div>
          <svg
            className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm11 6H5l4-5 3 4 2-3 5 4z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/cndrmawa/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-between px-7 py-4 w-full md:w-auto bg-white/10 backdrop-blur border border-white/20 text-white rounded-2xl text-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:scale-105 transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-sm opacity-80">Also available on</span>
            <span>Instagram Feed</span>
          </div>
          <svg
            className="w-6 h-6 ml-4 group-hover:rotate-6 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.98 2H7.02C4.26 2 2 4.26 2 7.02v9.96C2 19.74 4.26 22 7.02 22h9.96C19.74 22 22 19.74 22 16.98V7.02C22 4.26 19.74 2 16.98 2zM12 8.36a3.64 3.64 0 1 1 0 7.28 3.64 3.64 0 0 1 0-7.28zM20 7.07a.93.93 0 1 1-1.86 0 .93.93 0 0 1 1.86 0z" />
          </svg>
        </a>
      </div>

    </>
  );
};

export default SectionWrapper(Gallery, 'Gallery');
