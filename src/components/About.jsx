import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='about'
      className='py-20 bg-dark-200 text-white'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        {/* Image + Content Grid */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2 w-full rounded-2xl overflow-hidden'
          >
            <img 
              className='w-full h-full object-cover rounded-2xl'
              src={assets.profileImg} 
              alt="Profile" 
            />
          </motion.div>

          {/* Right Side: Text & Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2 w-full'
          >
            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
            
            <p className='text-gray-300 mb-6 leading-relaxed w-full'>
             I am a Computer Science student passionate about software engineering, web application development, and intelligent system architectures. My core expertise involves crafting responsive user interfaces with React, engineering backends using Python and Flask, and managing data with MySql.
            </p>

            <p className='text-gray-300 mb-12 leading-relaxed w-full'>
              I aim to integrate machine learning and intelligent models into full-stack web applications, creating scalable, automated, and high-performance digital solutions that solve real-world problems.
            </p>
            

            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full'>
              {aboutInfo.map((data, index) => (
                <div 
                  key={index} 
                  className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                >
                  <div className='text-purple text-4xl mb-4'>
                    <data.icon />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                  <p className='text-gray-400 text-sm'>{data.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About