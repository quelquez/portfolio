import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "three/webgpu";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-8" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 overflow-clip">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:maria.starostina.dev@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Maria | 2024
          <br /> Powered by <img src="infinity.svg" />
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((profile) => (
          <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener norefferer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={`Logo${profile.id}`}
                width={40}
                height={40}
              />
          </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
