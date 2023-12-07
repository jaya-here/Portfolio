import React from 'react'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects() {

  const projects = [{
    title:'Music Player',
    tagline:`Let's listen to music`,
    techstack:`React, Redux, TailwindCSS, API interaction`,
    link:'https://lighthearted-heliotrope-fd354b.netlify.app/'
  },
  {
    title:'Dashboard',
    tagline:`A look into a dashboard`,
    techstack:`React, TailwindCSS`,
    link:'https://sage-nougat-2505e2.netlify.app/'
  },
  {
    title:'Bookmarks',
    tagline:`A way to organise your favorite links`,
    techstack:`React, TailwindCSS, ContextAPI, API interaction`,
    link:'https://comforting-souffle-cf2ea6.netlify.app/'
  }
]



  return (
    <>
    <h4 className='text-gray-900 text-2xl font-bold ml-[4rem] my-[1.25rem]'>Projects</h4>
    <div className='flex gap-5 my-[3.5rem]'>
    {projects.map((project, index)=>{
        return (<Project
        title={project.title}
        tagline={project.tagline}
        techstack={project.techstack}
        link={project.link}
        additionalStyle={{transform:`translateY(-${index*2.25}rem)`}}>
        </Project>)
    })}
    </div>
    </>
  )
}

function Project({title, tagline, techstack, additionalStyle,link}) {
    return (
        <div className='flex flex-col items-center flex-1' style={{...additionalStyle}}>
            <div>
                <FontAwesomeIcon className='text-purple-600' icon={faBullseye}></FontAwesomeIcon>
            </div>
            <div className='text-center'>
                <h3 className='text-gray-900 text-md font-bold'>{title}</h3>
                <a className='text-base underline' 
                href={link}
                target="_blank">{tagline}</a>
            </div>
            <div className='flex gap-1'>
                {techstack.split(',').map((tech)=>{
                    return (  <p className='border
                    border-solid 
                    border-purple-400 
                    rounded-xl
                    p-1 px-2
                    my-2
                    text-[0.55rem]
                    font-semibold'>{tech}</p>)
                })}
            </div>
        </div>
    )
}

export default Projects