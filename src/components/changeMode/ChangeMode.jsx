import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ChangeMode = () => {
    const [active , setActive] = useState(false)
    const toggleDark = ()=> {
        const html = document.documentElement ;
        const current = html.getAttribute("data-theme") ;
        const nextTheme = current === 'dark' ? 'light' : "dark"
        html.setAttribute('data-theme', nextTheme)
        localStorage.setItem('theme',nextTheme)
        setActive(nextTheme === 'dark')
    }
    useEffect(()=> {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme',savedTheme);
        setActive(savedTheme === 'dark')
    } ,[])
  return (
    <div>
      <button onClick={toggleDark} className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 backdrop-blur text-white/80 hover:text-white hover:bg-white/10 transition duration-300 cursor-pointer ">
      {
        active ? 
        <Sun className="text-amber-300"/>
        :
        <Moon className="text-slate-800" />
      }
      </button>
    </div>
  );
};

export default ChangeMode;
