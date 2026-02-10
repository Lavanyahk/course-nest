import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Brand */}
          <h2 className="text-xl font-bold text-white">
            CourseHub
          </h2>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Courses</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CourseHub. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer