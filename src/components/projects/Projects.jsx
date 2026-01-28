import React from 'react'
import Container from '../container/Container'
// import image from "../../assets/unnamed.png"
import imgHat from "../../assets/Capture3.PNG"
import imgsoc from "../../assets/Capture.PNG"
import imgEi from "../../assets/Capture2.PNG"
import imgEc from "../../assets/Capture5.PNG"
import imgTu from "../../assets/Capture4.PNG"
import { a } from 'framer-motion/client'
const Projects = () => {
    const projectsPreson = [
        {
            id:1,
            title:"HATALAQIHA",
            image:imgHat,
            tools:[
                'Html',
                'css',
                'js'
            ],
            links:[

                {name :"gitHub",
                url:'https://github.com/Ebrahimkadry22/HATALAQIHA'
            },
            {
                name: 'Live Demo',
                url:'https://ebrahimkadry22.github.io/HATALAQIHA/'
            }
            ]
        },
        {
            id:2,
            title:"Social-networking-site",
            image:imgsoc,
            tools:[
                'Html',
                'css',
                'js'
            ],
            
            links:[

                {name :"gitHub",
                url:'https://github.com/Ebrahimkadry22/Social-networking-site'
            },
            {
                name: 'Live Demo',
                url:'https://social-networking-site-lemon.vercel.app'
            }
            ]
            
        },
        {
            id:3,
            title:"Eilajik",
            image:imgEi ,
            tools:[
                'Html',
                'css',
                'js'
            ],
            links:[

                {name :"gitHub",
                url:'https://github.com/Ebrahimkadry22/eilajik'
            },
            {
                name: 'Live Demo',
                url:'https://eilajik-krbx85aw4-ibrahim-kadrys-projects.vercel.app/'
            }
            ]
           
        },
        {
            id:4,
            title:"E-commerce",
            image:imgEc ,
            tools:[
                'react',
                'tailwindcss',
                'axios',
                'react-toastify',
                'react-icons',
                'react-loader-spinner',
                'react-router-dom',
                'slick-carousel',
            ],
             links:[

                {name :"gitHub",
                url:'https://github.com/Ebrahimkadry22/e-commerce'
            },
            {
                name: 'Live Demo',
                url:null
            }
            ]
           
        },
        {
            id:5,
            title:"tutoruu",
            image:imgTu ,
            tools:[
                'Html',
                'css',
                'js'
            ],
            links:[

                {name :"gitHub",
                url:'https://github.com/Ebrahimkadry22/tutoruu'
            },
            {
                name: 'Live Demo',
                url:'https://ebrahimkadry22.github.io/tutoruu/'
            }
            ]
           
        },
    ] 
  return (
    <div id='projects' className='min-h-screen py-44 relative '>
        <Container>
             <div className='flex items-center justify-center mb-14'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold relative inline-block '>Projects
                    <span className='absolute bg-primary w-1/2 h-1 left-1/2 -translate-x-1/2 -bottom-3 rounded-full'></span>
                </h2>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projectsPreson.map(pro=>(

                <div className='p-2' key={pro.id}>
                    <div className='h-52 overflow-hidden rounded-2xl'>
                    <img src={pro.image} alt="" className='object-cover object-center h-full w-full' />
                    </div>
                    <div className='mt-4'>
                        <h3 className='capitalize text-2xl font-medium mb-2'>{pro.title}</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                            <p className='text-md font-medium mb-1'>Tools</p>
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {pro.tools.map((t ,index)=>(
                                    <span key={index} className='px-2 py-1 bg-primary/10 rounded-2xl text-xs font-medium border border-primary/50 text-white/70 text-center hover:bg-primary transition duration-300 cursor-pointer' >{t}</span>

                                ))}
                            
                          
                            </div>
                            </div>

                            <div>
                            <p className='text-md font-medium mb-1'>Links</p>
                            <div className='grid grid-cols-2 gap-1 mt-2'>
                            {
                                pro.links.map((l,index)=> (
                                    l.url &&
                                    <a href={l.url} target='_blank' key={index} className='px-2 py-1 bg-primary/10 rounded-2xl text-xs font-medium border border-primary/50 text-white/70 text-center hover:bg-primary transition duration-300 cursor-pointer' >{l.name}</a>
                                    
                                ))
                            }
                            {/* <span className='px-2 py-.5 bg-primary/20 rounded-2xl text-sm' >React</span>
                            <span className='px-2 py-.5 bg-primary/20 rounded-2xl text-sm' >React</span>
                           */}
                            </div>
                          
                            </div>
                            
                        </div>
                    </div>

                </div>
                    ))
                }
                
            </div>
        </Container>
    </div>
  )
}

export default React.memo(Projects)