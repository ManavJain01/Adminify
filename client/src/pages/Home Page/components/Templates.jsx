import React from 'react';

const Templates = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">Templates Showcase</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">E-commerce</h3>
          <p>Beautiful templates for online stores.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
          <p>Showcase your work with stunning designs.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl mb-4">Restaurant</h3>
          <p>Responsive templates for restaurants and cafes.</p>
        </div>
      </div>
    </div>
  );
};

export default Templates;