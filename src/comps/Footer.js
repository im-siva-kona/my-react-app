import React from 'react';

const Footer = () => {
  return (
    <div id ='contact'>
    <footer className="py-10 bg-gray-800 text-white">
      <section className="py-10 lg:py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2">
              <p className="text-lg text-600 mb-4">For inquiries, please contact us:</p>
              <p className="text-lg text-600 mb-2">Email: example@example.com</p>
              <p className="text-lg text-600 mb-2">Phone: +1 234 567 890</p>
              <p className="text-lg text-600 mb-2">Address: 123 Dream Street, Dreamland</p>
            </div>
            <div className="lg:w-1/2">
              {/* Add your contact form or additional information here */}
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Real Estate Website. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
