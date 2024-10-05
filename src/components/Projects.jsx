import React from 'react';

const projects = [
  {
    title: 'Money Heist Simulation',
    shortDescription: 'A dynamic web application to manage a fictional heist team, featuring real-time updates and team management capabilities.',
    liveLink: 'https://money-heist-tau.vercel.app/',
    githubLink: 'https://github.com/Akspower/money-heist',
    imageUrl: 'https://deadline.com/wp-content/uploads/2018/04/casa-de-papel-money-heist.jpeg'
  },
  {
    title: 'Spotify Clone',
    shortDescription: 'A fully functional Spotify clone that emulates core features like music playback and playlist creation.',
    liveLink: 'https://spotify-clone-eta-green.vercel.app/',
    githubLink: 'https://github.com/Akspower/spotify-clone',
    imageUrl: 'https://k4p2f2g6.rocketcdn.me/wp-content/uploads/2023/06/Spotifys-desktop-gets-a-new-look.jpg'
  },
  {
    title: 'Meal Management',
    shortDescription: 'A web application that allows users to search for food recipes by country and name using an external API.',
    liveLink: 'https://meal-react.vercel.app/',
    githubLink: 'https://github.com/Akspower/Meal-React',
    imageUrl: 'https://media.istockphoto.com/id/1159239928/photo/indian-food-and-indian-cuisine-dishes-top-view.jpg?s=612x612&w=0&k=20&c=hIRU_mlspmfKQtiTH26x2g3JTjygbwvFeHrPTZnTXNc=' // Added imageUrl
  },
  {
    title: 'Usability Hub Clone',
    shortDescription: 'A clone of the Usability Hub website created solely using HTML and CSS. This project showcases the layout and design principles of the original site, providing an interactive experience.',
    liveLink: 'https://akspower.github.io/html_css_clone/',
    githubLink: 'https://github.com/Akspower/html_css_clone',
  },
  {
    title: 'Todo List',
    shortDescription: 'A task management application where users can add and delete tasks, and manage their priority by moving tasks up or down.',
    liveLink: 'https://react-todo-list-gamma-dun.vercel.app/',
    githubLink: 'https://github.com/Akspower/react_todo_list',
  },
  {
    title: 'Blog Website',
    shortDescription: 'Developed a dynamic blog website utilizing Node.js, Express, and EJS for server-side rendering. Integrated an API to enhance functionality and provide dynamic content management.',
    liveLink: 'https://github.com/Akspower/BLOG-API-PROJECT',  // Same link for demo and GitHub
    githubLink: 'https://github.com/Akspower/BLOG-API-PROJECT',
  },
];

const dsaProject = {
  title: 'C++ Placement Ready DSA Questions',
  shortDescription: 'A comprehensive collection of Data Structures and Algorithms (DSA) questions prepared in C++ to help users practice and excel in coding interviews.',
  githubLink: 'https://github.com/Akspower/place_source',
  leetCodeLink: 'https://leetcode.com/u/Aditya_kumae_sharma/',
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10 animate__animated animate__fadeIn">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 flex flex-col justify-between rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full m-2">
            <div>
              {project.imageUrl && ( // Check if imageUrl exists before rendering
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-3" />
              )}
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-3 italic">{project.shortDescription}</p>
            </div>
            <div className="flex justify-between mt-auto">
              <a href={project.liveLink} className="text-blue-400 hover:text-blue-600 transition">Live Demo</a>
              <a href={project.githubLink} className="text-green-400 hover:text-green-600 transition">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="bg-green-900 p-6 flex flex-col justify-between rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl m-2">
          <h3 className="text-2xl font-semibold mb-3">{dsaProject.title}</h3>
          <p className="text-gray-200 mb-3 italic">{dsaProject.shortDescription}</p>
          <div className="flex justify-between mt-auto">
            <a href={dsaProject.githubLink} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Explore DSA Questions</a>
            <a href={dsaProject.leetCodeLink} className="text-yellow-400 hover:text-yellow-600 transition">LeetCode Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
