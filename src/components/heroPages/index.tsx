import { KeyboardArrowDown } from "@styled-icons/material-outlined";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPage({ title, image }) {
  return (
    <>
      <div className="h-screen bg-black relative flex justify-center md:pt-[96px] md:p-7 p-6 pt-[68px]">
        <div className="max-w-[900px] flex z-[1] flex-col h-full justify-between">
          <div className="flex flex-col items-center justify-center w-full h-full py-4 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: -36 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1 className=" text-2xl md:text-[2.3rem] md:leading-10  max-w-[650px] py-4 absolute top-1/2 left-1/2 font-medium -translate-y-1/2 -translate-x-1/2 text-center font-korataki text-white uppercase">
                {title}
              </h1>
            </motion.div>
          </div>
          <div>
            <span className="flex justify-center animate-bounce">
              <KeyboardArrowDown size={40} className=" animate-pulse" />
            </span>
          </div>
        </div>

        <Image
          src={image}
          alt={"Noticias-hero"}
          width={1920}
          height={1080}
          priority={true}
          onLoad={(e) => {
            e.currentTarget.classList.add("animate-fade-in");
          }}
          className="absolute top-0 left-0 object-cover object-center w-screen h-screen opacity-0"
        />
      </div>
    </>
  );
}
