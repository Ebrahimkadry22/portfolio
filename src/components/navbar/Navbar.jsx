import React from "react";
import Container from "../container/Container";
import BtnPrimary from "../btn/BtnPrimary";
import ChangeMode from "../changeMode/ChangeMode";

const Navbar = () => {
  const onScrollContact = ()=> {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div className="w-full fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <Container>
        <div className="glass rounded-full  px-2 py-1.5 md:px-4 ">
          <div className="flex items-center justify-between gap-8">
            {/* logo */}
            <div className="flex  items-center gap-1">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary animate-bounce"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" />
              </svg>

              <a href="#home">
                <span className="text-base md:text-2xl font-medium ">Kadry</span>
                </a>
            </div>
            {/* logo */}
            {/* links */}
            <div className="mx-auto hidden md:block">
              <ul className="flex  gap-8 text-sm text-muted  ">
                <li className="hover:text-text transition-all duration-300">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-text transition-all duration-300">
                  <a href="#skils">Skills</a>
                </li>
                <li className="hover:text-text transition-all duration-300">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-text transition-all duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* links */}
            <div className="flex items-center gap-2 ">
              <div onClick={onScrollContact}>
            <BtnPrimary variant="primary" size="sm">
              Hrie me
            </BtnPrimary>
              </div>
            <ChangeMode />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Navbar);
