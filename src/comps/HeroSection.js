import React from 'react';
import { Fade } from 'react-awesome-reveal';

const HeroSection = () => {
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden">
      {/* Navbar */}
     
      {/* Text content */}
      <div id ='#home'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-10">
          <Fade triggerOnce>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              Discover Your Dream Home
            </h1>
          </Fade>
          <Fade delay={300} triggerOnce>
            <p className="text-base lg:text-lg text-gray-600 mb-8">
              Find the perfect property that suits your lifestyle
            </p>
          </Fade>
          <Fade delay={600} triggerOnce>
            <button className="bg-blue-500 text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </Fade>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <Fade delay={300} triggerOnce>
            <div className="overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-modern-house-visualized-in-stunning-3d-render-image_3630772.jpg"
                alt="Dream Home"
                className="w-full"
              />
            </div>
          </Fade>
        </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
