import React from 'react';

const FeaturedListings = () => {
  return (
    <div id ='new-listings'>
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Property Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWQbH38iDErHcqRc1dQB_TmQrMD8ul-dn0w&usqp=CAU" alt="Property 1" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Modern Apartment</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-semibold">Price: $500,000</p>
              <p className="text-gray-800 font-semibold">Sqft: 1500</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">Bedrooms: 3</p>
              <p className="text-gray-600">Bathrooms: 2</p>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWQbH38iDErHcqRc1dQB_TmQrMD8ul-dn0w&usqp=CAU" alt="Property 2" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Luxury Villa</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-semibold">Price: $750,000</p>
              <p className="text-gray-800 font-semibold">Sqft: 3000</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">Bedrooms: 5</p>
              <p className="text-gray-600">Bathrooms: 4</p>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWQbH38iDErHcqRc1dQB_TmQrMD8ul-dn0w&usqp=CAU" alt="Property 3" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Cozy Townhouse</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-semibold">Price: $400,000</p>
              <p className="text-gray-800 font-semibold">Sqft: 2000</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">Bedrooms: 4</p>
              <p className="text-gray-600">Bathrooms: 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default FeaturedListings;
