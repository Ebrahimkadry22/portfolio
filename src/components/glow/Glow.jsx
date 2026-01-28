import React from 'react'

const Glow = () => {
  return (
    <div>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] 
  bg-blue-500/20 rounded-full blur-[120px]"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] 
  bg-blue-500/20 rounded-full blur-[120px]"></div>
    </div>
  )
}

export default Glow