import React from 'react';

const Templates = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">Templates Showcase</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-lg shadow-md">
          <img src="https://camo.githubusercontent.com/1ea00ad9795167ede7e975476cdcbce64d21cdf478e6e3ecf1757b902ba2f40b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64676a7878757a64722f696d6167652f75706c6f61642f76313732353834333739302f6469736d6566615f7777696c6c702e706e67" alt="Dismefa" className="h-48 mb-2" />
          <h3 className="font-bold text-2xl">E-commerce</h3>
          <p>Beautiful templates for online stores.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <img src="https://camo.githubusercontent.com/86cd7b880bbaf3f9d61ce420f4f36284bfdc3e2ccf625f2b71a7fee23f806129/68747470733a2f2f6d616e61766a61696e2d706f7274666f6c696f2e76657263656c2e6170702f6173736574732f706f7274666f6c696f312d4365727052586d6f2e706e67" alt="Portfolio" className="h-48 mb-2" />
          <h3 className="font-bold text-2xl">Portfolio</h3>
          <p>Showcase your work with stunning designs.</p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <img src="https://camo.githubusercontent.com/6cacde265a44435bf14bcf6db50448ab36f1f392789585773f5e903e8059de6c/68747470733a2f2f6d65726e2d70726f6a656374732d616d6265722e76657263656c2e6170702f6173736574732f466f6f6425323044656c69766572792532304170702d42327171706b63682e706e67" alt="BestFood" className="h-48 mb-2" />
          <h3 className="font-bold text-2xl">Restaurant</h3>
          <p>Responsive templates for restaurants and cafes.</p>
        </div>
      </div>
    </div>
  );
};

export default Templates;