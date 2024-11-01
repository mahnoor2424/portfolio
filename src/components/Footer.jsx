import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-gray-100 text-black text-center py-6" id="Footer">
    <p className="text-sm flex justify-center items-center">
        &copy; {2024} Your Mahnoor. All rights reserved.
    </p>
    <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">Contact Us</a>
    </div>
    
    </div>

    </>
  )
}

export default Footer
