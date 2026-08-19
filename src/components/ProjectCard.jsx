import React from 'react'

const ProjectCard = ({ title, role, description, outcome, image, tech, demoLink, codeLink }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      {/* 1. Quotes hataye aur typo fix kiya (image) */}
      <img 
        src={image} 
        alt={title} 
        className='w-full h-60 object-cover' 
      />
      
      <div className='p-6'>
        {role && <span className='text-xs text-purple font-semibold block mb-1'>{role}</span>}
          <h3 className='text-xl font-semibold mb-2'>{title}</h3>
          <p className='text-gray-400 mb-4'>{description}</p>

          {outcome && (
  <div className='bg-purple/10 border border-purple/20 rounded-lg p-2.5 mb-4 text-xs text-gray-300'>
    <span className='text-purple font-semibold'>Outcome: </span>{outcome}
  </div>
)}
        
        {/* 2. Tech badges ke liye flex wrapper aur badges style */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span 
              key={index} 
              className='px-3 py-1 bg-dark-400 rounded-full text-sm'
            >
              {item}
            </span>
          ))}
        </div>
        <div className='flex gap-2'>
  <div className='flex gap-2'>
    <a 
      href={codeLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='w-full text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300'
    >
      View Code
    </a>
</div>
</div>
      </div>
    </div>
  )
}

export default ProjectCard