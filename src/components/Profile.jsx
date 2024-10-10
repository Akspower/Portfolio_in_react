import React, { useState, useEffect, useRef } from 'react';
import 'animate.css'; // Ensure animate.css is installed and imported
import './profile.css'; // Import the CSS file

const Profile = () => {
  const [socialLinks] = useState({
    github: 'https://github.com/Akspower',
    linkedin: 'https://www.linkedin.com/in/aditya-kumar-sharma-73447621a/',
    leetcode: 'https://leetcode.com/u/Aditya_kumae_sharma/',
    instagram: 'https://www.instagram.com/yourinstagram',
  });

  const userDetails = {
    name: 'Aditya Kumar Sharma',
    description: 'Full Stack Developer | Web Enthusiast. Passionate about creating dynamic web applications and learning new technologies.',
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSarcasticPopupOpen, setIsSarcasticPopupOpen] = useState(false);
  const [isConfirmationPopupVisible, setIsConfirmationPopupVisible] = useState(false);
  const [showFactMessage, setShowFactMessage] = useState(false); // State to toggle fact message
  const factRef = useRef(null); // Ref for the fact icon
  const nameRef = useRef(null); // Ref for the name
  const popupRef = useRef(null); // Ref for the More Details popup

  const handleMouseMove = (e) => {
    const circle = document.querySelector('.cursor-effect');
    if (circle) {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }
  };

  const handleResumeDownload = () => {
    setIsSarcasticPopupOpen(false);
    setIsConfirmationPopupVisible(true);
    setTimeout(() => {
      setIsConfirmationPopupVisible(false);
      const link = document.createElement('a');
      link.href = '/Aditya_srmist_CSE.pdf'; 
      link.download = 'Aditya_Kumar_Sharma_Resume.pdf';
      link.click();
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (factRef.current && !factRef.current.contains(event.target)) {
        setShowFactMessage(false);
      }
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const letters = nameRef.current.children;

    // Function to animate the filling effect
    const fillLetters = () => {
      Array.from(letters).forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('filled');
        }, index * 300); // Adjust timing as needed
      });
    };

    fillLetters(); // Trigger the fill effect
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-10 relative overflow-hidden mt-16" 
      onMouseMove={handleMouseMove}
    >
      {/* Left side: About Me */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-10 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          <span ref={nameRef} className="liquid-fill">
            {userDetails.name.split('').map((letter, index) => (
              <span key={index} className="letter">{letter === ' ' ? '\u00A0' : letter}</span> // Handle spaces
            ))}
          </span>
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          {userDetails.description}
        </p>
        <div className="flex space-x-4 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          <a href={socialLinks.github} className="text-3xl hover:text-yellow-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={socialLinks.linkedin} className="text-3xl hover:text-blue-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={socialLinks.instagram} className="text-3xl hover:text-pink-500 transition" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Download Resume Button */}
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
          onClick={() => setIsSarcasticPopupOpen(true)}
        >
          Download Resume
        </button>

        {/* Tech Stack */}
        <div className="mt-10 flex flex-wrap gap-4">
          <h2 className="text-2xl font-semibold w-full mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            <div className="tech-stack-item">HTML</div>
            <div className="tech-stack-item">CSS</div>
            <div className="tech-stack-item">JavaScript</div>
            <div className="tech-stack-item">React</div>
            <div className="tech-stack-item">MongoDB</div>
            <div className="tech-stack-item">MySQL</div>
            <div className="tech-stack-item">Express</div>
            <div className="tech-stack-item">Node.js</div>
            <div className="tech-stack-item">EJS</div>
            <div className="tech-stack-item">C++</div>
          </div>
        </div>

        {/* Fact Icon moved below the Tech Stack */}
        <div className="mt-6 relative hidden md:block" ref={factRef}>
          <button 
            className="text-yellow-500 text-xl hover:text-yellow-400 focus:outline-none"
            onClick={() => setShowFactMessage((prev) => !prev)}
          >
            <i className="fas fa-info-circle"></i>
          </button>
          {showFactMessage && (
            <div className="absolute left-0 top-10 bg-gray-800 text-white p-4 rounded-md shadow-lg w-72 z-50">
              <p className="text-sm">
                This project was created by Aditya with a little help from ChatGPT! Remember, with the right prompts, anything is possible! 
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right side: Profile Photo */}
      <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
        <div className="relative group">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/IMG_3929.JPG"
              alt="Aditya Kumar Sharma"
              className="w-64 h-80 object-cover rounded-xl shadow-lg transition-transform transform group-hover:scale-105 duration-500 ease-in-out"
            />
            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-indigo-400 transition-all duration-500 ease-in-out"></div>
          </div>
          <div className="absolute inset-0 rounded-xl border-4 border-gradient-to-r from-blue-400 to-purple-600 opacity-30 animate-pulse"></div>
        </div>
        <div className="cursor-effect"></div>
      </div>

      {/* Button to Show More Details */}
      <div className="absolute bottom-24 right-10">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
          onClick={() => setIsPopupOpen(true)}
        >
          More Details
        </button>
      </div>

      {/* Sarcastic Download Resume Popup */}
      {isSarcasticPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Are you sure?</h2>
            <p className="mb-4">Are you really sure you want to download this <em>dirty</em> resume?</p>
            <div className="flex justify-end space-x-4">
              <button 
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => setIsSarcasticPopupOpen(false)}
              >
                No
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={handleResumeDownload}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {isConfirmationPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg">Your download will start shortly...</h2>
          </div>
        </div>
      )}

      {/* More Details Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={popupRef} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl mb-4">More Details</h2>
            <p className="mb-4">
              Currently pursuing a B.Tech at SRM University with a CGPA of 8.62. Ready to collaborate on web development projects!
            </p>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => setIsPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
