import React from 'react'
import Container from '../container/Container'

const About = () => {
  return (
    <div id='about' className='min-h-screen pt-24 lg:pt-0 flex items-center justify-center'>
        <Container>
            <div className='flex items-center justify-center mb-14'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold relative inline-block '>About Me
                    <span className='absolute bg-primary w-1/2 h-1 left-1/2 -translate-x-1/2 -bottom-3 rounded-full'></span>
                </h2>
            </div>
            <div className='glass max-w-4xl rounded-2xl'>
                <div className='p-8 md:p-12 space-y-6 '>
                <p className='text-slate-300 text-xl md:text-2xl font-medium leading-relaxed italic'>Design is not just what it looks like and feels like. Design is how it works</p>
                <p className='text-slate-400 text-lg leading-relaxed'>
                    Frontend developer focused on creating clean, modern user interfaces that balance strong engineering with elegant, user-centered design.
                </p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default React.memo(About)