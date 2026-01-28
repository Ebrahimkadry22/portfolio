import { Github, Linkedin, Phone } from "lucide-react";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-10/12 p-2 flex flex-col gap-4 ">
     
      <a href="https://wa.me/201023032268" target="_blank" className="p-2 bg-primary/30 hover:bg-primary transition duration-300 rounded-full  cursor-pointer">
        <Phone size={18} className="text-white" />
      </a>
     
        <a
        className="p-2 bg-primary/30 hover:bg-primary transition duration-300 rounded-full  cursor-pointer" 
        href="https://linkedin.com/in/kadry22" target="_blank" rel="noopener noreferrer">
        <Linkedin size={18} className="text-white" />
        </a>
      
      
        <a 
        className="p-2 bg-primary/30 hover:bg-primary transition duration-300 rounded-full  cursor-pointer"
        href="https://github.com/Ebrahimkadry22" target="_blank" rel="noopener noreferrer">
        <Github size={18} className="text-white" />
        </a>
      
    </div>
  );
};

export default React.memo(SocialMedia);
