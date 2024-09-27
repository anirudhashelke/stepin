import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignIn = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate a delay for showing the success pop-up
    setTimeout(() => {
      setIsFormVisible(false); // Optionally close form after success
      setIsSubmitted(false);   // Reset submission for future use
    }, 3000); // Close the pop-up after 3 seconds
  };

  return (
    <div className=" flex flex-col items-center justify-center    ">
      <motion.button
        onClick={handleFormToggle}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign In
      </motion.button>

      {/* Conditionally render the form if not submitted */}
      {isFormVisible && !isSubmitted && (
        <div className='z-50 '>
          <form onSubmit={handleSubmit} className=" w-[100%] h-[100vh] absolute left-0 top-[82px]  bg-red-50  pt-10  flex justify-center ">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
               className='space-y-6 w-[50%] bg-white p-5 rounded-lg shadow-lg h-[60%]'>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
            </motion.div>
          </form>
        </div>
      )}

      {/* Success Pop-up Message */}
      {isSubmitted && (
        <motion.div
          className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold">Sign In Successfully</h3>
        </motion.div>
      )}
    </div>
  );
};

export default SignIn;
