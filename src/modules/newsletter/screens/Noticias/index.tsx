import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroPage from "@/components/heroPages";

export default function NewsLetterScreen() {
  return (
    <>
      <HeroPage
        title={"Notícias"}
        image={"/assets/images/Noticias-hero.webp"}
      />
      <div className=" bg-black min-h-screen w-full pb-20 relative px-12 pt-[90px]">
        <div className="flex flex-col items-center z-[2] w-full gap-10 ">
          <div className="flex flex-wrap justify-start w-full max-w-[1680px] gap-5">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className=" mb-24 min-h-[280px]   relative  text-[#fafafa] w-full md:basis-project-card-half"
                >
                  <div className="relative cursor-pointer p-5 z-[1] pb-[65%]">
                    <Link href={"/noticias/loren-ipson"}>
                      <Image
                        src={"/assets/images/noiterocket.jpg"}
                        alt={"illustriation1_d"}
                        width={1920}
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.classList.add("animate-fade-in");
                        }}
                        height={1080}
                        className="absolute top-0 opacity-0 left-0 object-cover object-center max-h-full h-full min-h-full z-[1] "
                      />
                    </Link>
                  </div>
                  <div className="relative mt-12 z-[2]">
                    <p className="text-xl opacity-80">20 de Novembro de 2023</p>
                    <p className="mt-3 text-xl uppercase font-korataki">
                      Projeto STRAUM
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={"/noticias/loren-ipson"}
                        passHref
                        className="max-w-fit"
                      >
                        <button className="px-4 relative group hover:animate-buttonColorMouseIn py-3 mt-12 text-white text-sm font-bold w-72 min-w-[10rem] uppercase border-2 hover:text-black hover:bg-white border-white  transition-colors duration-300 overflow-hidden">
                          ver mais
                          <span className="absolute left-0 right-0 z-0 w-full h-full group-hover:bg-white -bottom-full group-hover:animate-overlayMouseIn"></span>
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
