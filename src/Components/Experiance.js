import React from 'react'

import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";

const Experiance = () => {
    const experiences=[
        {
            id:1,
            // src:html
            src:<FaHtml5 size={100}/>,
             p:"html",
             style:"bg-orange-500"
        },
        {
            id:2,
            // src:css
            src:<IoLogoCss3 size={100}/>,
             p:"css",
              style:"bg-blue-500"
        },
        {
            id:3,
            // src:javascript
            src:<TbBrandJavascript size={100}/>,
             p:"Javascript",
             style:"bg-yellow-500"
        },
        {
            id:4,
            // src:github
            src:<FaGithub size={100}/>,
             p:"GitHub",
             style:"bg-stone-500"
        },
        {
            id:5,
            // src:bootstrap
            src:<FaBootstrap size={100}/>,
             p:"Bootstrap",
            style:"bg-sky-500"
        },
        {
            id:6,
            // src:tailwind
            src:<RiTailwindCssFill size={100}/>,
             p:"tailwind",
             style:"bg-blue-500"
        },
        {
            id:7,
            // src:react
            src:<FaReact size={100}/>,
             p:"React",
            //   style:"shadow-lg shadow-blue-500"
            style:"bg-blue-800"
        },
        {
            id:8,
            // src:sql
            src:<TbSql size={100}/>,
            p:"SQL",
            style:"bg-sky-950"
        },
    ]
  return (
    <div id="Experience" className=' w-full bg-slate-900 flex justify-center items-center flex-col 
    md:h-screen'>
        <div >
            <p className=' uppercase text-white font-bold text-center text-4xl underline'>Experiance</p>
            <p className='text-center font-bold text-xl mt-5 mb-4 text-white'>Check my Experiance here</p>
        </div>
        <div className='flex flex-wrap md:max-w-4xl gap-14 mx-auto justify-center items-center'>
            {
                experiences.map(({id,src,p,style})=>{
                    return(
                        <div key={id} className={`p-8 hover:scale-105 duration-200
                                                   rounded-lg hover:shadow-md hover:shadow-stone-200 ${style}`}>
                            {/* <img src={src} width={100} height={100} alt='imges'/> */}
                            {src}
                          
                            {
                                <p className=' rounded-md text-center bg-red-500 text-white'>{p}</p>
                            }
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Experiance