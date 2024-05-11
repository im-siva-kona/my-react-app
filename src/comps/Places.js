import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import Fade animation from react-awesome-reveal

const PlacesComponent = () => {
  // Data for places
  const places = [
    { name: 'Nellore', image: 'nellore.jpg' },
    { name: 'Nellore', image: 'nellore.jpg' },
    // Add more places as needed
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Choose Your Dream Location</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <Fade key={index} triggerOnce delay={index * 100}>
              <div className="rounded-lg shadow-md overflow-hidden relative">
                <img src={`/${place.image}`} alt={place.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50"></div>
                <div className="p-4 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2">{place.name}</h3>
                  {/* Add additional information about the place if needed */}
                  {/* Example: <p className="text-gray-600">Population: xxx</p> */}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacesComponent;
