import React from "react";
import Container from "../container/Container";
import BtnPrimary from "../btn/BtnPrimary";
import image from "../../assets/ChatGPT Image Jan 25, 2026, 09_32_54 PM.png";
import Glow from "../glow/Glow";

const Hero = () => {
  const onScrollProject = ()=> {
    document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div id="home" className="min-h-screen flex items-center py-24 lg:py-0 relative overflow-hidden">
      <Glow />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* left */}
          <div>
            <span className="inline-block mb-4 px-4 py-1  text-sm rounded-full bg-primary/10 text-primary">AVAILABLE FOR WORK</span>
            <h1 className="text-4xl  sm:text-5xl xl :text-6xl font-bold leading-tight">
              Crafting <br /> <span className="text-primary">Digital</span> <br />
              Experiences
            </h1>
            <p className="mt-6 text-text/60 max-w-lg">
              Hi, I'm Ibrahim, a frontend developer specializing in building
              high-quality, modern web applications with a focus on performance
              and aesthetics
            </p>
            <div className="flex items-center gap-2 mt-8">
              <div onClick={onScrollProject}>
              <BtnPrimary variant="primary">View Work →</BtnPrimary>
              </div>
              {/* <BtnPrimary variant="secondary">Read Blog</BtnPrimary> */}
            </div>
          </div>
          {/* left */}

          {/* right */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 h-80 md:h-96 sm:w-80 relative ">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover overflow-hidden rounded-2xl rotate-6 hover:rotate-0 transition duration-300"
              />
            </div>

            <div className="absolute bottom-6 left-0 lg:-left-12 glass px-6 py-3 rounded-xl flex items-center gap-2 shadow-2xl shadow-primary/25 animate-bounce">
              <div className="w-8 h-8 bg-primary/20 flex justify-center items-center rounded-full text-primary font-medium">
                <p>Js</p>
              </div>
            <div>
                <p className="text-sm  text-text/60 ">SPECIALTY</p>
              <p className="text-sm  font-medium">React Architecture</p>
            </div>
            </div>
          </div>
          {/* right */}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Hero);
