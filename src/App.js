import React from 'react';
import HeroSection from './comps/HeroSection';
import FeaturedListings from './comps/FeaturedListings';
import Footer from './comps/Footer';
import PlacesComponent from './comps/Places';
import Navbar from './comps/Navbar';
function App() {
  return (
    <>
     <Navbar />
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <FeaturedListings />
      <PlacesComponent />
      {/* Book a Call Button */}
      <div className="container mx-auto text-center mt-8 mb-16"> {/* Added margin-bottom to create space */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg"> {/* Increased padding to make the button bigger */}
          Book a Call
        </button>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
