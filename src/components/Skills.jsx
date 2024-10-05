// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Add skills here */}
        <div className="text-center">
          <p className="text-xl font-bold">JavaScript</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">React</p>
        </div>
        {/* Add more skills */}
      </div>
    </section>
  );
};

export default Skills;
