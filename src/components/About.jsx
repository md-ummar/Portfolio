import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAni from "../assets/aboutAni.json";

function About() {
  return (
    <div id="#about" className="border-b border-neutral-900  lg:mb-34 md:pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-5 pt-6 pb-6 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex justify-center w-[75%]  px-15 mx-auto ">
            <Lottie animationData={aboutAni} loop={true} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className=" flex  lg:justify-start">
            <p className="my-16 max-w-xl pt-10">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
