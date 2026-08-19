import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa'
import { educationData, certificationData } from '../assets/assets'

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='education'
      className='py-20 bg-neutral-900 text-white border-t border-white/5'
    >
      <div className='container mx-auto px-6 max-w-6xl'>
        {/* Section Title */}
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          Educational <span className='text-purple'>Background</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          My academic qualifications and technical certifications
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          {/* Education Timeline (2 Columns wide) */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-3 bg-purple/10 text-purple rounded-xl text-xl'>
                <FaGraduationCap />
              </div>
              <h3 className='text-2xl font-bold text-white'>Degrees</h3>
            </div>

            <div className='space-y-6'>
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className='bg-neutral-800/60 p-6 rounded-2xl border border-white/5 hover:border-purple/40 transition duration-300'
                >
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2'>
                    <h4 className='text-xl font-bold text-white'>{edu.degree}</h4>
                    <span className='flex items-center text-xs font-mono text-purple bg-purple/10 px-3 py-1 rounded-full w-max mt-2 sm:mt-0'>
                      <FaCalendarAlt className='mr-1.5' /> {edu.duration}
                    </span>
                  </div>
                  <p className='text-purple font-medium text-sm mb-3'>{edu.institution}</p>
                  <p className='text-gray-400 text-sm leading-relaxed'>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (1 Column wide) */}
          <div className='space-y-6'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='p-3 bg-purple/10 text-purple rounded-xl text-xl'>
                <FaCertificate />
              </div>
              <h3 className='text-2xl font-bold text-white'>Certifications</h3>
            </div>

            <div className='space-y-4'>
              {certificationData.map((cert, index) => (
                <div 
                  key={index} 
                  className='bg-neutral-800/60 p-5 rounded-2xl border border-white/5 hover:border-purple/40 transition duration-300'
                >
                  <span className='text-xs font-mono text-purple'>{cert.year}</span>
                  <h4 className='text-lg font-bold text-white mt-1'>{cert.title}</h4>
                  <p className='text-gray-400 text-sm mt-1'>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Education