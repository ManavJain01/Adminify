import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 rounded-lg shadow-md">
          <p>"The website builder was so easy to use. My business site was up and running in no time!"</p>
          <p className="mt-4 font-semibold">- John Doe</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <p>"Excellent templates and great customer support!"</p>
          <p className="mt-4 font-semibold">- Jane Smith</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <p>"I love how responsive the designs are across all devices."</p>
          <p className="mt-4 font-semibold">- Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;