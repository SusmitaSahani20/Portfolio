import React from 'react'

const ProjectCard = ({ title, description, tags, imgSrc, github }) => {
  return (
    <div className="border rounded-xl shadow-sm overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank" className="text-blue-600">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard