"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans antialiased">
      {/* Navbar - Simple, just the logo/name */}
      <nav className="bg-blue-950 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-white text-2xl font-bold tracking-tight">osigc-static</a>
          <div className="flex space-x-6">
            <a href="#hero" className="text-white hover:text-amber-500 transition-colors duration-300 text-lg">Home</a>
            <a href="#services" className="text-white hover:text-amber-500 transition-colors duration-300 text-lg">Services</a>
            <a href="#about" className="text-white hover:text-amber-500 transition-colors duration-300 text-lg">About</a>
            <a href="#contact" className="text-white hover:text-amber-500 transition-colors duration-300 text-lg">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-blue-950 text-white py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[calc(100vh-64px)]">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-800 opacity-95 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6">
            Innovating <span className="text-amber-500">Tomorrow</span>, Today.
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            osigc-static: Your trusted partner in strategic consulting, digital transformation, and sustainable growth.
          </p>
          <a href="#services" className="inline-block bg-amber-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 ease-in-out transform hover:scale-105">
            Explore Our Solutions
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-16 relative">
            Our Expertise
            <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">⚙️</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Strategic Consulting</h3>
              <p className="text-gray-700 leading-relaxed">
                Guiding your business through complex challenges with data-driven insights and actionable strategies.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">📊</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Digital Transformation</h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering your enterprise with cutting-edge technology and seamless digital integration.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">📈</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Performance Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Streamlining operations and boosting efficiency to maximize your organizational output.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">🔗</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Change Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Facilitating smooth transitions and fostering adaptability within your evolving business landscape.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">🌱</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Sustainable Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Developing robust frameworks that ensure long-term viability and ecological responsibility.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border-b-4 border-amber-500 flex flex-col items-center text-center">
              <div className="text-amber-500 text-6xl mb-4 font-extrabold leading-none">💡</div> {/* Placeholder for icon */}
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">Innovation Workshops</h3>
              <p className="text-gray-700 leading-relaxed">
                Fostering creativity and groundbreaking ideas through interactive, expert-led sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-blue-950 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-12 relative">
            About osigc-static
            <span className="block w-24 h-1 bg-white mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            At <strong className="text-amber-500">osigc-static</strong>, we are dedicated to empowering businesses to thrive in an ever-evolving global landscape. Founded on principles of integrity, expertise, and innovation, we provide tailored consulting solutions that drive measurable results.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Our team comprises seasoned industry professionals with a wealth of experience across various sectors. We believe in building lasting partnerships with our clients, understanding their unique challenges, and co-creating strategies that lead to sustainable success and competitive advantage.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            <strong className="text-amber-500">Our Mission:</strong> To be the catalyst for our clients' growth, delivering transformative insights and exceptional value that exceed expectations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-950 mb-16 relative">
            Get In Touch
            <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <form className="space-y-8 p-8 bg-slate-50 rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-blue-950 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-blue-950"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-blue-950 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-blue-950"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-blue-950 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-blue-950"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white text-xl font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-amber-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center text-lg text-gray-700">
            <p className="mb-2">Prefer to call? Reach us at:</p>
            <p className="font-bold text-blue-950 text-2xl">+1 (555) 123-4567</p>
            <p className="mt-4">Or email us directly:</p>
            <a href="mailto:info@osigc-static.com" className="font-bold text-amber-500 text-2xl hover:underline">info@osigc-static.com</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white py-12 px-6">
        <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold tracking-tight">osigc-static</p>
            <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} osigc-static. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 text-sm">
            <a href="#hero" className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Home</a>
            <a href="#services" className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Services</a>
            <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Contact</a>
            <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}