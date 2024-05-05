import React from "react";
import { HERO_CONTENT } from "../constants";
import DownloadCV from "../assets/MD-UMMAR-resume.pdf"; //import resume here
import { delay, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import heroImg from "../assets/heroImg.json";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
function Hero() {
  return (
    <div
      id="hero"
      className="border-b border-neutral-900 pb-4 lg:mb-34  md:mx-auto px-4 mt-20  py-10 "
    >
      <div className="flex  flex-wrap ">
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start md:mx-8"
          >
            <div className="text-white ">
              <h1 className="mb-4 text-5xl sm:text-6xl lg:text-7xl lg:leading-normal font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text ">
                Hello, I&apos;m{" "}
              </h1>
              <br></br>
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                <TypeAnimation
                  sequence={["Md Ummar", 3000, "Web Developer", 3000]}
                  wrapper="div"
                  speed={30}
                  repeat={Infinity}
                />
              </div>
            </div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-l font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              <a href={DownloadCV} download={"MdUmmarCV.pdf"}>
                <button
                  type="button"
                  className="px-2 border-neutral-800  bg-slate-800 inline-block py-1 w-full sm:w-fit rounded-full border hover:bg-gradient-to-r hover:from-pink-300 hover:via-sate-500 hover:to-purple-500 text-white mt-3"
                >
                  <span className="block     rounded-full px-6 py-2 ">
                    Download CV
                  </span>
                </button>
              </a>
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className=" flex justify-center lg:justify-start ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="md:my-8 md:p-6 "
            >
              <Lottie animationData={heroImg} loop={true} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
