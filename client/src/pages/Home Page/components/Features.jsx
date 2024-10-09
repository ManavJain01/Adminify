import React from 'react';

const Features = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">Easy-to-Use Builder</h3>
          <p>Drag-and-drop editor with customizable templates.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">Mobile-Responsive Designs</h3>
          <p>Websites that look great on any device.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">SEO Optimization</h3>
          <p>Built-in tools to help you rank higher on search engines.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">Fast & Secure Hosting</h3>
          <p>Reliable and secure web hosting included.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;