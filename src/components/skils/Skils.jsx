import React from 'react'
import Container from '../container/Container'
import { Brush, DessertIcon, Rocket, SquareTerminal } from 'lucide-react'
import Glow from '../glow/Glow'

const Skils = () => {
    const skils = [
        {
            id:1,
            icon:
            <SquareTerminal className='text-primary group-hover:text-white transition-all duration-300' size={30} />
            ,
            title:'Core Development',
            descrtion:"Building modern, scalable user interfaces using React, TypeScript, and Tailwind CSS, with a focus on clean structure and maintainable code."
        },
        {
            id:2,
            icon:
            <Brush className='text-primary group-hover:text-white transition-all duration-300' size={30} />
            ,
            title:'UI / UX Design',
            descrtion:"Designing intuitive interfaces with a strong focus on layout, spacing, typography, and smooth interactions using Figma and design systems."
        },
        {
            id:3,
            icon:
            <Rocket className='text-primary group-hover:text-white transition-all duration-300' size={30} />
            ,
            title:'Performance',
            descrtion:"Improving loading speed, responsiveness, and overall user experience through performance best practices and optimization techniques."
        },
    ]
  return (
            <div className='min-h-screen py-40  relative overflow-hidden' id='skils'>
                <Glow />
        <Container>
            <div className='space-y-14'>

            <div className='space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold text-text tracking-tight'>Technical Stack</h2>
                <p className='text-text/70'>The tools and technologies I use to build modern user interfaces.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        skils.map((skil)=> (
                    <div key={skil.id} className='glass p-8 rounded-2xl cursor-pointer group
                    shadow hover:shadow-primary hover:-translate-y-2 transition-all duration-300  '>
                        <div>
                            <div className='bg-primary/10 group-hover:bg-primary rounded-2xl inline-block p-3 mb-3 transition-all duration-300 '>
                            <span >
                                {skil.icon} 
                            </span>
                            </div>
                            <h3 className='text-xl  font-bold text-text mb-3'>{skil.title}</h3>
                        </div>
                        <p className='bg-white/5 px-3 py-1 rounded-2xl text-sm text-text/70'>
                            {skil.descrtion}
                        </p>
                    </div>

                        ))
                    }
                </div>
            </div>
            </div>
        </Container>
        </div>
  )
}

export default React.memo(Skils)
