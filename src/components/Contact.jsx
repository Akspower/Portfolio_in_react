import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);  // State for success message

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { name: '', email: '', message: '' };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    // Validate Message
    const wordCount = formData.message.trim().split(/\s+/).length;
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    } else if (wordCount < 10) {
      newErrors.message = 'Message must be at least 10 words.';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Display success message
      setSuccessMessage(true);

      // Clear form data
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(false), 10000);
      return () => clearTimeout(timer); // Clear the timer if component unmounts
    }
  }, [successMessage]);

  // Hide success message when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setSuccessMessage(false);
    if (successMessage) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [successMessage]);

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-black via-gray-800 to-gray-700 text-white relative flex flex-col lg:flex-row">
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded h-32 resize-none"
              placeholder="Your Message (min 10 words)"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300">
            Send
          </button>
        </form>

        {successMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 bg-green-600 rounded-md text-center shadow-lg text-white animate__animated animate__fadeIn">
            <div className="flex items-center justify-center">
              <span className="mr-2 text-2xl">✔️</span>
              <span>Message sent successfully to Mr. Aditya!</span>
            </div>
            <p>He will reply soon, or contact him via social media.</p>
          </div>
        )}
      </div>

      <div className="flex-1 p-6 mt-6 lg:mt-0">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="mb-4">I have worked on various projects and created many websites in collaboration with others.</p>

        <h3 className="text-xl font-bold mb-2">Personal Details:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Gender: Male</li>
          <li>DOB: 08-03-2004</li>
          <li>Languages Known: English & Hindi</li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/aditya-kumar-sharma-73447621a/" className="text-blue-400 hover:underline">Find me on LinkedIn</a>
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Achievements/Certifications:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Certified in Foundation of Cyber Security (Google Certification).</li>
          <li>Acquired certification for Software Engineering Job Simulation conducted by JPMorgan Chase & Co.</li>
          <li>Acquired certification in Database Management System organized by NPTEL.</li>
          <li>Attended C# seminar, gaining valuable insights into .NET Framework for Windows/Web development.</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-2">Extracurricular Activities:</h3>
        <ul className="list-disc list-inside">
          <li>Engaged as a volunteer in leading tech-related initiatives.</li>
          <li>Led the organization of college-level event “RUBAROO 2023”.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
