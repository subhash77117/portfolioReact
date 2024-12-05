import React from 'react'
import portfolio from '../assets/portfolio.png'
import weather from '../assets/weather.png'
import bgChanger from '../assets/bgChanger.png'
import todo from '../assets/todo.png'

const ProjectSection = () => {
    const Projects=[
        {
            id:1,
            src:portfolio
        },
        {
            id:2,
            src:bgChanger
        },
        {
            id:3,
            src:weather
        },
        {
            id:4,
            src:todo
        },
    ]
  return (
    <div id="Projects" className='w-full  bg-zinc-900 md:h-screen flex justify-center items-center '>
        <div className='w-full '>
            <h1 className='text-center text-4xl text-gray-50 uppercase underline mt-3'>Projects</h1>
            <p className='text-xl leading-6 mt-4 text-white text-center font-extralight'>Check out some of my work right here</p>
            <div className=' flex mx-auto flex-wrap gap-6 justify-center items-center mt-5  '>
                {
                    Projects.map(({id ,src})=>{
                        return(
                            <div key={id} className='shadow-md shadow-slate-300 hover:scale-105 duration-200  text-cyan-50 rounded-lg'>
                                <img src={src} alt='img' width={250} height={250} className=' rounded-lg p-2 '/>
                                <div className="flex justify-around gap-4 p-4">
                                   <a
                                      href="https://subhashkrgupta-weather-app.netlify.app/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                     className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                                                  >
                                               Check
                                    </a>
                                   <a
                                     href="https://subhash-tic-tac-toe.netlify.app/"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
                                          >
                                     Demo
                                     </a>
                            </div>

                            </div>
                           
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectSection