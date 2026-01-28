import React from "react";
import Container from "../container/Container";
import { Mail, MapPin } from "lucide-react";
import Glow from "../glow/Glow";
import BtnPrimary from "../btn/BtnPrimary";
import From from "./From";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen pt-24 lg:pt-0 flex items-center justify-center relative overflow-hidden">
      <Container>
        <Glow />
        <div className="glass max-w-5xl p-8 md:p-16 rounded-2xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* left */}
            <div className="space-y-4xl">
              <h2 className="text-4xl font-bold  text-text mb-4 ">Let’s work together.</h2>
              <p className="text-text/35 leading-relaxed text-sm mb-4">
                I’m open to freelance projects and collaborative opportunities,
                and I’m always excited to build meaningful digital experiences.
              </p>
              <div>
                <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <span className=""><Mail className="text-primary" /></span>
                    </div>
                    <div>
                        <p className="uppercase text-text/35 font-bold text-xs">email me</p>
                        <p className="text-text/30 font-medium">elaganby22@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <span><MapPin className="text-primary" /></span>
                    </div>
                    <div>
                        <p className="uppercase text-text/35 font-bold text-xs">location</p>
                        <p className="text-text/30 font-medium">remote  </p>
                    </div>
                </div>
              </div>
            </div>
            {/* left */}
            {/* right */}
            <div>
              <From />
            </div>
            {/* right */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Contact);
