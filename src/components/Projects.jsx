import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets' // 1. Data array import karein
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard' // 2. ProjectCard component import karein (path adjust kar lein agar different ho)

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='py-20 bg-dark-200 text-white'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Projects</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          A selection of my recent work
        </p>

        {/* 3. Grid ke andar .map() loop add kar diya hai */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className='flex justify-center mt-12'>
          <a href="https://github.com/SaniahMalik" className='inline-flex items-center px-6 py-3
          border border-purple rounded-lg text-white hover:text-purple font-medium transition duration-300'>
            <span >View More Projects</span>
            <FaArrowRight className='ml-2'/>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects