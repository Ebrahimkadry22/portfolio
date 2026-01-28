import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
    
  const [show , setShow] = useState(false)

  useEffect(()=> {
    const handleScroll = ()=> {
        setShow(window.scrollY > 300) ;
    }
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[])

  

    const scrollUp = ()=> {
        window.scrollTo({top:0 , behavior :"smooth"})
    }
    
  return (
    
       show &&
    <button onClick={scrollUp} className={`fixed bottom-6 right-6 w-10 h-10 bg-primary/70 rounded-full shadow shadow-primary flex items-center justify-center text-white/80 cursor-pointer hover:bg-primary transition duration-300`}>
        <ArrowUp />
    </button> 
    
    
  )
}

export default React.memo(ScrollTop)